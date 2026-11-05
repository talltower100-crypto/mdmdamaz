const { execSync } = require('child_process');
const fs = require('fs');
try {
  execSync('node run-test-script.js > keys.txt 2>&1');
} catch(e) {}
console.log(fs.readFileSync('keys.txt', 'utf8'));
