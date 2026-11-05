const { execSync } = require('child_process');
try {
  execSync('npx tsc --noEmit > tsc-errors.txt 2>&1');
} catch(e) {}
