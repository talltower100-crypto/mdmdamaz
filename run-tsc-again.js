const { execSync } = require('child_process');
try {
  const out = execSync('npm run test-tsc', { stdio: 'pipe' });
  console.log('TSC SUCCESS');
} catch(e) {
  console.log('TSC FAILED');
  console.log(e.stdout ? e.stdout.toString() : e.toString());
}
