const { execSync } = require('child_process');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('TSC SUCCESS');
} catch(e) {
  console.log('TSC FAILED');
}
