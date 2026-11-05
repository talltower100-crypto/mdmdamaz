import { execSync } from 'child_process';
const out = execSync('node find-dup-final.js');
require('fs').writeFileSync('dup-final.txt', out.toString());
