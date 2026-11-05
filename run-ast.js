const { execSync } = require('child_process');
const out = execSync('node run-check-ast.js');
require('fs').writeFileSync('ast-out.txt', out.toString());
