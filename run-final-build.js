import { execSync } from 'child_process';
try {
  const out = execSync('npm run build', { stdio: 'pipe' });
  console.log('BUILD SUCCESS');
} catch(e) {
  console.log('BUILD FAILED');
  console.log(e.stdout ? e.stdout.toString() : e.toString());
}
