import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('scraped-pages/css');
let allCss = '';
for (const f of files) {
  allCss += fs.readFileSync(path.join('scraped-pages/css', f), 'utf-8') + '\n';
}

// Colors
const colors = new Set(allCss.match(/#(?:[0-9a-fA-F]{3}){1,2}\b|rgba?\([^)]+\)/g) || []);
console.log('Unique colors found:', [...colors].slice(0, 30));

// Fonts
const fonts = new Set([...allCss.matchAll(/font-family:\s*([^;]+)/gi)].map(m => m[1].trim()));
console.log('Font families:', [...fonts]);

// Key element styles
console.log('Post-17 sample size:', allCss.length);
