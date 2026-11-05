const { execSync } = require('child_process');
try {
  const out = execSync('npm run test-tsc', { encoding: 'utf-8' });
  console.log(out);
} catch (e) {
  console.error(e.stdout || e.message);
}