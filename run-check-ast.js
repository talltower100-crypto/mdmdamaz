const { execSync } = require('child_process');
try {
  const out = execSync('node check-keys3.js').toString();
  console.log(out);
} catch (e) {
  console.log(e.toString());
}
try {
  const out = execSync('node check-ast.js');
  console.log(out.toString());
} catch(e) {
  console.log(e.toString());
}
