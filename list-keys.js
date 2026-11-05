const fs = require('fs');
const code = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');
const lines = code.split('\n');
const keys = [];
lines.forEach((line, index) => {
  if (line.match(/^[ \t]*"[A-Za-z0-9-]+": \{/)) {
    keys.push(`${index + 1}: ${line}`);
  }
});
console.log(keys.join('\n'));
