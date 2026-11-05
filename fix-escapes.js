const fs = require('fs');
let content = fs.readFileSync('src/pages/ServicePage.tsx', 'utf8');
content = content.replace(/\\\$/g, '$');
fs.writeFileSync('src/pages/ServicePage.tsx', content);
