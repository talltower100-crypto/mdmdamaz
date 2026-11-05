const { execSync } = require('child_process');
try {
  execSync('node fix-blog-final3.js');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('SUCCESS');
} catch(e) {
  console.log('FAILED');
}
