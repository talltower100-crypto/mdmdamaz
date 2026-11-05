const { execSync } = require('child_process');
try {
  const out = execSync('node find-dup5.js');
  require('fs').writeFileSync('dup-out2.txt', out.toString());
} catch(e) {
  require('fs').writeFileSync('dup-out2.txt', e.toString());
}