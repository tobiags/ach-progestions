import fs from 'fs';
import path from 'path';

async function downloadImages() {
  const images = JSON.parse(fs.readFileSync('scraped-pages/images.json', 'utf-8'));
  console.log(`Found ${images.length} images to download...`);

  const publicImgDir = path.resolve('public/images');
  if (!fs.existsSync(publicImgDir)) {
    fs.mkdirSync(publicImgDir, { recursive: true });
  }

  const mapping = {};

  for (let i = 0; i < images.length; i++) {
    const url = images[i];
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(publicImgDir, filename);
    mapping[url] = `/images/${filename}`;

    if (fs.existsSync(dest)) {
      continue;
    }

    try {
      console.log(`[${i + 1}/${images.length}] Downloading: ${filename}`);
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`Failed to fetch ${url}: ${res.status}`);
        continue;
      }
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(dest, buffer);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
    }
  }

  fs.writeFileSync('scraped-pages/image-map.json', JSON.stringify(mapping, null, 2), 'utf-8');
  console.log('Finished downloading images. Map saved to scraped-pages/image-map.json');
}

downloadImages();
