const { execSync } = require('child_process');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
} catch (e) {
  console.log("Error caught");
}
