const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'sequence');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

for (let i = 0; i < 75; i++) {
  const paddedIndex = i.toString().padStart(2, '0');
  const filename = `frame_${paddedIndex}_delay-0.066s.svg`;
  const filePath = path.join(dir, filename);

  // Calculate some creative changing colors and rotations for visual parallax effect
  const hue = (i * 5) % 360;
  const rotation = i * 4.8; // 360/75 = 4.8 degrees per frame
  const scale = 1 + Math.sin(i * 0.1) * 0.5;

  const svgContent = `
<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
  <rect width="1920" height="1080" fill="#121212" />
  
  <g transform="translate(960, 540) rotate(${rotation}) scale(${scale})">
    <!-- Abstract geometric shape -->
    <rect x="-300" y="-300" width="600" height="600" fill="none" stroke="hsl(${hue}, 80%, 60%)" stroke-width="10" rx="30" />
    <circle cx="0" cy="0" r="200" fill="none" stroke="hsl(${hue + 40}, 80%, 70%)" stroke-width="8" stroke-dasharray="20 40" />
    <path d="M -150 -150 L 150 150 M -150 150 L 150 -150" stroke="hsl(${hue + 80}, 80%, 80%)" stroke-width="5" />
    
    <!-- Changing Grid Background -->
    <g opacity="0.1">
      <line x1="-800" y1="0" x2="800" y2="0" stroke="white" stroke-width="2" />
      <line x1="0" y1="-800" x2="0" y2="800" stroke="white" stroke-width="2" />
    </g>
  </g>

  <!-- Frame counter UI -->
  <text x="100" y="1000" font-family="monospace" font-size="60" fill="white" opacity="0.3">
    FRAME [${paddedIndex}/74]
  </text>
</svg>
  `.trim();

  fs.writeFileSync(filePath, svgContent);
}

console.log('Successfully generated 75 SVG frames in public/sequence!');
