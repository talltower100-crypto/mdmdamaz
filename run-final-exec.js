import { execSync } from 'child_process';
try {
  const out = execSync('node run-tsc-final.js');
  require('fs').writeFileSync('tsc-final-out.txt', out.toString());
} catch(e) {}
