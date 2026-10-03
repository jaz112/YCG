import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const enabled = import.meta.env.PUBLIC_INDEXABLE === 'true' && Boolean(site);
  return new Response(`User-agent: *\n${enabled ? 'Allow: /' : 'Disallow: /'}\n${enabled ? `Sitemap: ${new URL('/sitemap.xml', site)}\n` : ''}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
