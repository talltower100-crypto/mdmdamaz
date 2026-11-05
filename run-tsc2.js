const { execSync } = require('child_process');
try {
  const out = execSync('npm run test-tsc');
  require('fs').writeFileSync('tsc-out2.txt', out.toString());
} catch(e) {
  require('fs').writeFileSync('tsc-out2.txt', e.stdout ? e.stdout.toString() : e.toString());
}