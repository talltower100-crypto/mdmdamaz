const { execSync } = require('child_process');
try {
  const out = execSync('node check-dup.js', { stdio: 'pipe' });
  require('fs').writeFileSync('dup-out.txt', out.toString());
} catch (e) {
  require('fs').writeFileSync('dup-out.txt', e.stdout.toString());
}