const { execSync } = require('child_process');
try {
  const out = execSync('npx tsc --noEmit', { encoding: 'utf8' });
  require('fs').writeFileSync('tsc-out.txt', out);
} catch (e) {
  require('fs').writeFileSync('tsc-out.txt', e.stdout ? e.stdout.toString() : e.message);
}
