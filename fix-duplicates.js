const fs = require('fs');

let content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');

// Find all keys
const regex = /"([^"]+)":\s*\{/g;
let match;
const keys = [];
const positions = [];

while ((match = regex.exec(content)) !== null) {
  keys.push(match[1]);
  positions.push({ key: match[1], start: match.index });
}

// Find duplicates
const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);
console.log('Duplicates found:', duplicates);

if (duplicates.length > 0) {
  const dupKey = duplicates[0];
  console.log('Removing duplicate key:', dupKey);
  
  // Find the second occurrence
  const firstIndex = keys.indexOf(dupKey);
  const secondIndex = keys.indexOf(dupKey, firstIndex + 1);
  
  if (secondIndex !== -1) {
    const startPos = positions[secondIndex].start;
    // Find the end of the object
    let endPos = startPos;
    let braceCount = 0;
    let foundFirstBrace = false;
    
    for (let i = startPos; i < content.length; i++) {
      if (content[i] === '{') {
        braceCount++;
        foundFirstBrace = true;
      } else if (content[i] === '}') {
        braceCount--;
      }
      
      if (foundFirstBrace && braceCount === 0) {
        // We found the end of the object. Look for a trailing comma.
        endPos = i + 1;
        while (endPos < content.length && (content[endPos] === ' ' || content[endPos] === '\n' || content[endPos] === '\r' || content[endPos] === ',')) {
          endPos++;
        }
        break;
      }
    }
    
    // Remove the duplicate object
    content = content.substring(0, startPos) + content.substring(endPos);
    fs.writeFileSync('src/data/blogPosts.tsx', content);
    console.log('Duplicate removed successfully.');
  }
} else {
  console.log('No duplicates found.');
}
