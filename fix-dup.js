const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');

const regex = /"([^"]+)":\s*\{/g;
let match;
const keys = [];
const positions = [];
while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
  positions.push({ key: match[1], index: match.index });
}

const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
console.log('Duplicates:', duplicates);

if (duplicates.length > 0) {
  // Find the second occurrence and remove it
  const dupKey = duplicates[0];
  const occs = positions.filter(p => p.key === dupKey);
  if (occs.length > 1) {
    const start = occs[1].index;
    // Find the next key or end of file
    const nextKey = positions.find(p => p.index > start);
    let end = nextKey ? nextKey.index : content.lastIndexOf('}');
    
    // Remove from start to end
    const newContent = content.substring(0, start) + content.substring(end);
    fs.writeFileSync('src/data/blogPosts.tsx', newContent);
    console.log('Removed duplicate:', dupKey);
  }
}
