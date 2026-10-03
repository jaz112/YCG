import { resources, organizations } from '../src/data/resources.ts';
const urls = [...new Set([...resources.map(x=>x.source.url), ...resources.flatMap(x=>(x.supportingSources??[]).map(source=>source.url)), ...organizations.map(x=>x.website)])];
let failures = 0;
for(let index=0;index<urls.length;index+=5) {
  await Promise.all(urls.slice(index,index+5).map(async url=>{
    try {
      const response = await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'User-Agent':'YCG-LinkReview/1.0'}});
      await response.body?.cancel();
      if(!response.ok) failures++;
      console.log(`${response.status} ${url}${response.url!==url ? ' -> '+response.url : ''}`);
    } catch(error) { failures++; console.log(`UNCONFIRMED ${url}: ${error.message}`); }
  }));
}
console.log(`${urls.length} URLs checked; ${failures} need manual review. HTTP success is not content verification.`);
process.exitCode=failures ? 1 : 0;
