const { execSync } = require('child_process');
try {
  const out = execSync('npx tsc --noEmit 2>&1', { encoding: 'utf8' });
  require('fs').writeFileSync('tsc-out-direct.txt', out);
} catch (e) {
  require('fs').writeFileSync('tsc-out-direct.txt', e.stdout || e.message);
}
