const { execSync } = require('child_process');
try {
  execSync('node find-dup7.js', { stdio: 'inherit' });
} catch(e) {}
