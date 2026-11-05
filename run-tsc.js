import { execSync } from 'child_process';
try {
  const out = execSync('npx tsc --noEmit', { encoding: 'utf8' });
  console.log("TSC SUCCESS");
} catch (e) {
  console.log("TSC ERROR", e.stdout ? e.stdout.toString() : e.message);
}
