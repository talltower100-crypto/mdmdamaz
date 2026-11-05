import { execSync } from 'child_process';
const out = execSync('node run-tsc-now.js');
require('fs').writeFileSync('tsc-now.txt', out.toString());
