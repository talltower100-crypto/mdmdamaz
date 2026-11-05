const fs = require('fs');
const ts = require('typescript');

const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');
const sourceFile = ts.createSourceFile('blogPosts.tsx', content, ts.ScriptTarget.Latest, true);

function visit(node) {
  if (ts.isPropertyAssignment(node)) {
    if (node.name && ts.isStringLiteral(node.name)) {
      console.log(`Line ${sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1}: ${node.name.text}`);
    }
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);
