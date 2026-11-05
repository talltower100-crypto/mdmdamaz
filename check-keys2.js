const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');
const regex = /"([^"]+)":\s*\{/g;
let match;
const keys = [];
while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
}
const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
console.log('Duplicates:', duplicates);
console.log('Keys:', keys);
