const { execSync } = require('child_process');
try {
  const out = execSync('node do-replace2.js');
  console.log(out.toString());
} catch(e) {
  console.error(e.toString());
}