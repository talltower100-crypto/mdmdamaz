import { execSync } from 'child_process';
try {
  const out = execSync('node run-tsc-see.js');
  require('fs').writeFileSync('tsc-out-final.txt', out.toString());
} catch(e) {}
