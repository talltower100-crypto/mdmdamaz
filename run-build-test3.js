const { execSync } = require('child_process');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build succeeded');
} catch (e) {
  console.error('Build failed', e.message);
}