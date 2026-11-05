const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf8');

const regex = /^\s*"([^"]+)":\s*\{/gm;
const keys = [];
const duplicates = [];
let match;
while ((match = regex.exec(content)) !== null) {
  if (keys.includes(match[1])) {
    duplicates.push(match[1]);
  } else {
    keys.push(match[1]);
  }
}
console.log('Duplicates:', duplicates);
