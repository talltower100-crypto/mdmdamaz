const { execSync } = require('child_process');
try {
  const out = execSync('node run-test-script.js').toString();
  console.log(out);
} catch (e) {
  console.log(e.toString());
}
