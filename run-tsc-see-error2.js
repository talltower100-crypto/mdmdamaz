import { execSync } from 'child_process';
try {
  const out = execSync('npx tsc --noEmit', { encoding: 'utf8' });
  console.log(out);
} catch (e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}