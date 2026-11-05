const { execSync } = require('child_process');
try {
  const out = execSync('npm run test-tsc');
  console.log(out.toString());
} catch(e) {
  console.log(e.toString());
}