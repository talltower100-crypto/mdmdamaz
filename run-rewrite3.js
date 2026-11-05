const { execSync } = require('child_process');
try {
  execSync('node rewrite-services2.js', { stdio: 'inherit' });
  console.log('Success');
} catch (e) {
  console.error(e);
}