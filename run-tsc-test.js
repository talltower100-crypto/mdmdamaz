const { execSync } = require('child_process');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('TSC succeeded');
} catch (e) {
  console.error('TSC failed', e.message);
}