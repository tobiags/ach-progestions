import fs from 'fs';
import path from 'path';

const cssUrls = [
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/wp-content/cache/min/20/elementor3/digital-marketing-agency/wp-content/uploads/sites/20/xstore/kirki-styles.css',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/wp-content/cache/min/20/elementor3/digital-marketing-agency/wp-content/uploads/sites/20/elementor/css/post-17.css',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/wp-content/cache/min/20/elementor3/digital-marketing-agency/wp-content/uploads/sites/20/elementor/css/post-31.css',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/wp-content/cache/min/20/elementor3/digital-marketing-agency/wp-content/uploads/sites/20/elementor/css/post-32.css',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/wp-content/cache/min/20/elementor3/digital-marketing-agency/wp-content/uploads/sites/20/elementor/css/post-33.css',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/wp-content/cache/min/20/elementor3/digital-marketing-agency/wp-content/uploads/sites/20/elementor/css/post-7.css'
];

async function fetchCss() {
  const cssDir = path.resolve('scraped-pages/css');
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, { recursive: true });
  }

  for (const url of cssUrls) {
    const filename = path.basename(new URL(url).pathname);
    try {
      console.log('Downloading CSS:', filename);
      const res = await fetch(url);
      const text = await res.text();
      fs.writeFileSync(path.join(cssDir, filename), text, 'utf-8');
    } catch (e) {
      console.error(e.message);
    }
  }
}

fetchCss();
