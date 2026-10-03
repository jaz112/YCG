import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { categories, checklists } from '../data/catalog';
import { resources } from '../data/resources';
import { policies } from '../data/policies';
import { familyPathways } from '../data/family-content';
export const GET: APIRoute = async ({ site }) => {
  const paths = ['/families/', ...familyPathways.map(x=>`/families/${x.id}/`), '/', '/start/', '/topics/', '/resources/', '/journeys/', '/about/', '/team/', '/our-story/', '/about/disclaimer/', ...categories.map(x=>`/topics/${x.id}/`), ...checklists.map(x=>`/start/${x.id}/`), ...resources.map(x=>`/resources/${x.id}/`), ...policies.map(x=>`/about/${x.id}/`), ...(await getCollection('guides')).filter(x=>x.data.status==='reviewed').map(x=>`/guides/${x.id}/`)];
  const urls = site && import.meta.env.PUBLIC_INDEXABLE === 'true' ? paths.map(path=>`<url><loc>${new URL(path,site).href}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type':'application/xml' } });
};
