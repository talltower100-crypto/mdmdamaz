import { execSync } from 'child_process';
try {
  const out = execSync('node run-tsc-check.js');
  require('fs').writeFileSync('tsc-check-out.txt', out.toString());
} catch(e) {}
