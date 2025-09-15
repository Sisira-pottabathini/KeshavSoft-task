const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Configure Nunjucks
const env = nunjucks.configure('src/templates', {
  autoescape: false,
  noCache: true,
  trimBlocks: true,
  lstripBlocks: true
});

// Data to pass to templates
const siteData = {
  siteName: "Company",
  year: "2025",
  phone: "+91 99999 99999",
  email: "info@company.com",
  address: "Hyderabad, India"
};

// Pages to render
const pages = [
  { template: 'index.njk', output: 'index.html' },
  { template: 'about.njk', output: 'about.html' },
  { template: 'contact.njk', output: 'contact.html' }
];

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

// Render all pages
pages.forEach(page => {
  try {
    const output = env.render(page.template, siteData);
    fs.writeFileSync(path.join('dist', page.output), output);
    console.log(`✓ ${page.output} generated successfully`);
  } catch (error) {
    console.error(`Error rendering ${page.template}:`, error);
  }
});

// Copy assets
if (fs.existsSync('src/assets')) {
  copyDir('src/assets', 'dist/assets');
  console.log('✓ Assets copied successfully');
}

console.log('✓ Build completed successfully!');