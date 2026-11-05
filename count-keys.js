const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf8');

console.log('Occurrences of providence-seo-company-near-me:');
let count1 = (content.match(/"providence-seo-company-near-me"/g) || []).length;
console.log(count1);

console.log('Occurrences of providence-seo-near-me:');
let count2 = (content.match(/"providence-seo-near-me"/g) || []).length;
console.log(count2);

const regex = /"([^"]+)":\s*\{/g;
const keys = [];
let match;
while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
}
const dups = keys.filter((item, index) => keys.indexOf(item) !== index);
console.log('Duplicates in keys:', dups);
