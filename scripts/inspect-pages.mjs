import fs from 'fs';
import path from 'path';

function inspectHtml(filename) {
  const html = fs.readFileSync(path.join('scraped-pages', filename), 'utf-8');
  console.log(`\n=================== ${filename} ===================`);
  
  // Find headings
  const headings = [...html.matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('Headings:', headings);

  // Find images in content
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(m => path.basename(m[1]));
  console.log('Images sample:', [...new Set(imgs)].slice(0, 10));
}

['home.html', 'about-us.html', 'contact-us.html', 'pricing-plans.html', 'blog.html', 'cart.html', 'my-account.html'].forEach(inspectHtml);
