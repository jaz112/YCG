import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
async function files(dir) {
  const entries = await readdir(dir, {withFileTypes:true});
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? files(path.join(dir,entry.name)) : path.join(dir,entry.name)))).flat();
}
const pages = (await files(root)).filter(file=>file.endsWith('.html'));
const content = new Map(await Promise.all(pages.map(async file=>[file,await readFile(file,'utf8')])));
const issues = [];
for (const [page, html] of content) {
  const label = path.relative(root,page);
  const route = label.replaceAll('\\','/').replace(/index\.html$/,'');
  const base = new URL(route,'https://build.invalid/');
  if ((html.match(/<h1[\s>]/g)??[]).length !== 1) issues.push(`${label}: expected one h1`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = match[1].replaceAll('&amp;','&');
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(raw)) continue;
    if (raw === '#') { issues.push(`${label}: placeholder link`); continue; }
    const url = new URL(raw,base);
    let target = decodeURIComponent(url.pathname).replace(/^\//,'');
    if (!path.extname(target)) target = target.replace(/\/$/,'')+'/index.html';
    if (target === '/index.html') target='index.html';
    const file = path.resolve(root,target);
    if (!file.startsWith(root+path.sep)) { issues.push(`${label}: path outside output`); continue; }
    try { await access(file); } catch { issues.push(`${label}: missing ${raw}`); continue; }
    if (url.hash && content.has(file)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!content.get(file).includes(`id="${id}"`)) issues.push(`${label}: missing anchor ${raw}`);
    }
  }
  if (/<img\b(?![^>]*\balt=)[^>]*>/g.test(html)) issues.push(`${label}: image without alt`);
  if (/file:\/\/|href="javascript:/i.test(html)) issues.push(`${label}: unsafe or local path`);
}
if (issues.length) { console.error(issues.join('\n')); process.exitCode=1; }
else console.log(`Checked links, anchors, images, and basic page semantics across ${pages.length} pages.`);
