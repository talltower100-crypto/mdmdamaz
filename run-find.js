const { execSync } = require('child_process');
try {
  const out = execSync('node find-dup-final2.js', { encoding: 'utf8' });
  require('fs').writeFileSync('dups-out.txt', out);
} catch (e) {
  require('fs').writeFileSync('dups-out.txt', e.stdout ? e.stdout.toString() : e.message);
}
