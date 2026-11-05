import { execSync } from 'child_process';
try {
  const out = execSync('node run-all.js');
  require('fs').writeFileSync('run-all-out.txt', out.toString());
} catch(e) {}
