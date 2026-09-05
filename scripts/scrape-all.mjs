import fs from 'fs';
import path from 'path';

const pagesToFetch = [
  { name: 'home', url: 'https://xstore.8theme.com/elementor3/digital-marketing-agency/' },
  { name: 'about-us', url: 'https://xstore.8theme.com/elementor3/digital-marketing-agency/about-us/' },
  { name: 'contact-us', url: 'https://xstore.8theme.com/elementor3/digital-marketing-agency/contact-us/' },
  { name: 'blog', url: 'https://xstore.8theme.com/elementor3/digital-marketing-agency/blog/' },
  { name: 'pricing-plans', url: 'https://xstore.8theme.com/elementor3/digital-marketing-agency/pricing-plans/' },
  { name: 'cart', url: 'https://xstore.8theme.com/elementor3/digital-marketing-agency/cart/' },
  { name: 'my-account', url: 'https://xstore.8theme.com/elementor3/digital-marketing-agency/my-account/' },
];

async function fetchAll() {
  if (!fs.existsSync('scraped-pages')) {
    fs.mkdirSync('scraped-pages', { recursive: true });
  }

  const allLinks = new Set();
  const allImages = new Set();

  for (const page of pagesToFetch) {
    try {
      console.log(`Fetching ${page.name}: ${page.url}`);
      const res = await fetch(page.url);
      const html = await res.text();
      fs.writeFileSync(`scraped-pages/${page.name}.html`, html, 'utf-8');

      // extract links
      const linkRegex = /href=["'](https:\/\/xstore\.8theme\.com\/elementor3\/digital-marketing-agency\/[^"'#?]+)["']/g;
      let match;
      while ((match = linkRegex.exec(html)) !== null) {
        allLinks.add(match[1]);
      }

      // extract images
      const imgRegex = /(https:\/\/xstore\.8theme\.com\/elementor3\/digital-marketing-agency\/wp-content\/[^"'<>\s)]+\.(?:png|jpg|jpeg|svg|webp|gif))/gi;
      while ((match = imgRegex.exec(html)) !== null) {
        allImages.add(match[1]);
      }
    } catch (e) {
      console.error(`Error fetching ${page.name}:`, e.message);
    }
  }

  console.log('\n--- All Discovered URLs ---');
  console.log([...allLinks]);

  console.log('\n--- Total Unique Images Found ---', allImages.size);
  fs.writeFileSync('scraped-pages/images.json', JSON.stringify([...allImages], null, 2), 'utf-8');
  fs.writeFileSync('scraped-pages/links.json', JSON.stringify([...allLinks], null, 2), 'utf-8');
}

fetchAll();
