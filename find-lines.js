const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');
const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('"providence-seo-near-me":')) {
    console.log(`Found on line ${index + 1}: ${line}`);
  }
});