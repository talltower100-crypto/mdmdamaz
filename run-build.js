const { execSync } = require('child_process');
try {
  const out = execSync('npm run build', { encoding: 'utf8' });
  console.log("BUILD SUCCESS");
} catch (e) {
  console.log("BUILD ERROR");
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
