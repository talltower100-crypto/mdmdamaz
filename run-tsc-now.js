const { execSync } = require('child_process');
try {
  const out = execSync('npx tsc --noEmit');
  console.log(out.toString());
} catch(e) {
  console.log(e.stdout ? e.stdout.toString() : e.toString());
}
