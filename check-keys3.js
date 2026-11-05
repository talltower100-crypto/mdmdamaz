const fs = require('fs');
const ts = require('typescript');
const code = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');
const sourceFile = ts.createSourceFile('src/data/blogPosts.tsx', code, ts.ScriptTarget.Latest, true);

function visit(node) {
  if (ts.isPropertyAssignment(node)) {
    console.log(`Property: ${node.name.getText()} at line ${sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1}`);
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);
