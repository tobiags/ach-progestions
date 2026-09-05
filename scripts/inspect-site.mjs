import fs from 'fs';
import path from 'path';

async function main() {
  const url = 'https://xstore.8theme.com/elementor3/digital-marketing-agency/';
  console.log('Fetching:', url);
  const res = await fetch(url);
  const html = await res.text();

  fs.writeFileSync('site-home.html', html, 'utf-8');
  console.log('Saved site-home.html, size:', html.length);

  // Extract all links
  const links = [];
  const linkRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[1]);
  }

  const internal = [...new Set(links.filter(l => l.includes('digital-marketing-agency')))];
  console.log('Internal links found:', internal);

  // Extract all images
  const imgs = [];
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
  while ((match = imgRegex.exec(html)) !== null) {
    imgs.push(match[1]);
  }
  console.log('Total images found:', imgs.length);

  // Extract all Google Fonts links
  const fontMatches = html.match(/fonts\.googleapis\.com\/css2?[^"']+/g) || [];
  console.log('Fonts:', [...new Set(fontMatches)]);
}

main().catch(console.error);
