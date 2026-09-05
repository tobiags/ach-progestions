import fs from 'fs';
import path from 'path';

const blogPosts = [
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/2025/07/23/the-psychology-behind-successful-branding/',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/2025/07/22/5-reasons-your-business-needs-a-strong-social-media-strategy/',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/2025/07/21/which-strategy-works-best-for-your-business/',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/2025/07/21/how-to-create-a-capsule-wardrobe/',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/2025/07/20/how-to-build-a-high-converting-website-from-scratch/',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/2025/07/19/top-7-digital-marketing-trends-to-watch-in-2025/',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/checkout/',
  'https://xstore.8theme.com/elementor3/digital-marketing-agency/my-account/lost-password/'
];

async function fetchRemaining() {
  for (const url of blogPosts) {
    const slug = url.split('/').filter(Boolean).pop() || 'index';
    try {
      console.log('Fetching', slug, url);
      const res = await fetch(url);
      const html = await res.text();
      fs.writeFileSync(`scraped-pages/${slug}.html`, html, 'utf-8');

      // extract more images if any
      const imgRegex = /(https:\/\/xstore\.8theme\.com\/elementor3\/digital-marketing-agency\/wp-content\/[^"'<>\s)]+\.(?:png|jpg|jpeg|svg|webp|gif))/gi;
      let match;
      const images = JSON.parse(fs.readFileSync('scraped-pages/images.json', 'utf-8'));
      const imgSet = new Set(images);
      while ((match = imgRegex.exec(html)) !== null) {
        imgSet.add(match[1]);
      }
      fs.writeFileSync('scraped-pages/images.json', JSON.stringify([...imgSet], null, 2), 'utf-8');
    } catch (e) {
      console.error(e.message);
    }
  }
}

fetchRemaining();
