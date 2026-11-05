import { execSync } from 'child_process';
const out = execSync('node count-keys.js');
require('fs').writeFileSync('count-out.txt', out.toString());
