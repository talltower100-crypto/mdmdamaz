const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');

const regex = /"([^"]+)":\s*\{/g;
let match;
const keys = [];
while ((match = regex.exec(content)) !== null) {
  // Only consider keys that look like our slugs
  if (match[1].startsWith('providence') || match[1].startsWith('north')) {
    keys.push(match[1]);
  }
}
console.log('Keys:', keys);
const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
console.log('Duplicates:', duplicates);
