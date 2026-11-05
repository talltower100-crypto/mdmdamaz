const { execSync } = require('child_process');
try {
  execSync('npm run test-tsc', { stdio: 'inherit' });
  console.log('TSC PASS');
} catch (e) {
  console.log('TSC FAIL');
}