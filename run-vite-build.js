const { execSync } = require('child_process');
const fs = require('fs');
try {
  const out = execSync('npm run build', { stdio: 'pipe' });
  fs.writeFileSync('build-out.txt', out.toString());
} catch (e) {
  fs.writeFileSync('build-out.txt', e.stdout ? e.stdout.toString() + '\n' + e.stderr.toString() : e.toString());
}