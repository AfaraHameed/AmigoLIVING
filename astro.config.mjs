// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   base: '/AmigoLIVING/', // ✅ must match your repo name exactly
// });
//---------------
// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   site: 'https://ladiespgbangalore.in',
//   base: '/',
// });
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://ladiespgbangalore.in', // ✅ Important for correct sitemap URLs
  integrations: [sitemap()],
})
