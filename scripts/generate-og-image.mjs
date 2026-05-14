import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#2a2724"/>
      <stop offset="100%" stop-color="#1a1815"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <!-- Subtle top accent line -->
  <rect x="80" y="80" width="48" height="2" fill="#C9A96E"/>

  <!-- Name -->
  <text
    x="80"
    y="300"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="80"
    font-weight="400"
    fill="#F2EDE8"
    letter-spacing="-1"
  >Dustin Martinka</text>

  <!-- Divider -->
  <rect x="80" y="328" width="560" height="1" fill="rgba(242,237,232,0.2)"/>

  <!-- Title -->
  <text
    x="80"
    y="384"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="28"
    font-weight="300"
    fill="rgba(242,237,232,0.65)"
    letter-spacing="3"
  >SR. MANAGER, PRODUCT DESIGN</text>

  <!-- URL -->
  <text
    x="80"
    y="530"
    font-family="'Helvetica Neue', Arial, sans-serif"
    font-size="20"
    font-weight="300"
    fill="#C9A96E"
    letter-spacing="1"
  >dustinmartinka.com</text>
</svg>
`;

const outputPath = resolve(__dirname, '../public/og-image.jpg');

await sharp(Buffer.from(svg))
  .jpeg({ quality: 92 })
  .toFile(outputPath);

console.log('Generated: public/og-image.jpg');
