const { execSync } = require('child_process');
try {
  const out = execSync('npm run test-tsc');
  require('fs').writeFileSync('temp-out.txt', out.toString());
} catch(e) {
  require('fs').writeFileSync('temp-out.txt', e.toString());
}