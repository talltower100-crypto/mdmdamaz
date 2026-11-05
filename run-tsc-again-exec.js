const { execSync } = require('child_process');
try {
  const out = execSync('node run-tsc-again.js');
  require('fs').writeFileSync('tsc-again-out.txt', out.toString());
} catch(e) {}
