const { execSync } = require('child_process');
try {
  const out = execSync('node check-keys2.js');
  console.log(out.toString());
} catch(e) {
  console.log(e.toString());
}