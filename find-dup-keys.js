const fs = require('fs');
const code = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');
const lines = code.split('\n');
const keys = {};
const duplicates = [];
lines.forEach((line, index) => {
  const match = line.match(/^[ \t]*"([A-Za-z0-9-]+)": \{/);
  if (match) {
    const key = match[1];
    if (keys[key]) {
      duplicates.push(`Duplicate: ${key} at line ${index + 1} (first at ${keys[key]})`);
    } else {
      keys[key] = index + 1;
    }
  }
});
fs.writeFileSync('dup-keys.txt', duplicates.join('\n'));
