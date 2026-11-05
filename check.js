const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');

const regex = /^\s+"([^"]+)":\s*\{/gm;
let match;
const keys = [];
while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
}
console.log('Keys:', keys);
const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
console.log('Duplicates:', duplicates);
