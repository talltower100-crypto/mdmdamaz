const { execSync } = require('child_process');
const fs = require('fs');
try {
  const out = execSync('npm run build 2>&1');
  fs.writeFileSync('build-out.txt', out);
} catch (e) {
  fs.writeFileSync('build-out.txt', e.stdout ? e.stdout.toString() : e.toString());
}
