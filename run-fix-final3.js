import { execSync } from 'child_process';
const out = execSync('node fix-blog-final3.js');
console.log(out.toString());
