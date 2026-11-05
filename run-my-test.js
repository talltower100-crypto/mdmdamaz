const { execSync } = require('child_process');
try {
  const out = execSync('npm run test-tsc', { stdio: 'pipe' });
  require('fs').writeFileSync('test-out.txt', out.toString());
} catch (e) {
  require('fs').writeFileSync('test-out.txt', e.stdout.toString() + '\n' + e.stderr.toString());
}