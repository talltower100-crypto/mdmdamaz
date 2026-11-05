const { execSync } = require('child_process');
try {
  execSync('node run-tsc.js', { stdio: 'inherit' });
} catch (e) {
  console.log(e);
}
