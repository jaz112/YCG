import { defineConfig } from 'astro/config';
const site = process.env.SITE_URL;
if (site && (new URL(site).protocol !== 'https:' || new URL(site).pathname !== '/' || new URL(site).search || new URL(site).hash || new URL(site).username || new URL(site).password)) {
  throw new Error('SITE_URL must be an HTTPS origin, with no subdirectory.');
}
export default defineConfig({ output: 'static', site });
