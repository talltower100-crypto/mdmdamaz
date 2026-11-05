const { execSync } = require('child_process');
try {
  execSync('npm run test-tsc', { stdio: 'inherit' });
} catch(e) {
  console.log(e);
}