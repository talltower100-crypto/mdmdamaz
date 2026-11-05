const { execSync } = require('child_process');
try {
  execSync('node find-dup6.js');
} catch(e) {
  console.log(e);
}