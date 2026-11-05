const { execSync } = require('child_process');
try {
  execSync('node rewrite-services.js', { stdio: 'inherit' });
} catch (e) {
  console.log(e);
}
