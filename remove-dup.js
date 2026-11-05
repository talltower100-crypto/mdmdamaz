const fs = require('fs');
let content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');

// Find all matches of "providence-seo-near-me": {
const regex = /"providence-seo-near-me":\s*\{/g;
let match;
const positions = [];
while ((match = regex.exec(content)) !== null) {
  positions.push(match.index);
}

console.log('Found providence-seo-near-me at positions:', positions);

if (positions.length > 1) {
  // We have duplicates! Let's just keep the first one and remove the rest.
  // Actually, I can just use my fix-dup.js logic.
  const start = positions[1];
  
  // Find the next key or end of file
  const nextKeyRegex = /\n  "[a-z0-9-]+":\s*\{/g;
  nextKeyRegex.lastIndex = start + 1;
  const nextMatch = nextKeyRegex.exec(content);
  
  let end = nextMatch ? nextMatch.index : content.lastIndexOf('}');
  
  // Remove from start to end
  content = content.substring(0, start) + content.substring(end);
  
  // Clean up any double commas
  content = content.replace(/,\s*,/g, ',');
  
  fs.writeFileSync('src/data/blogPosts.tsx', content);
  console.log('Removed duplicate providence-seo-near-me');
} else {
  console.log('No duplicates found for providence-seo-near-me');
}
