const fs = require('fs');
const content = fs.readFileSync('public/sitemap.xml', 'utf8');
console.log(content.includes('seo-near-me-guide'));
console.log(content.includes('providence-seo-near-me'));
