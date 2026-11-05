const { execSync } = require('child_process');
try {
  const out = execSync('node run-final-build.js');
  require('fs').writeFileSync('build-out.txt', out.toString());
} catch(e) {}
