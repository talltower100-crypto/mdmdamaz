const { execSync } = require('child_process');
const output = execSync('node test-sitemap-extraction.js').toString();
console.log(output);
