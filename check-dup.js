const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.tsx', 'utf-8');
const ts = require('typescript');
const sourceFile = ts.createSourceFile('blogPosts.tsx', content, ts.ScriptTarget.Latest, true);

const keys = [];
function visit(node) {
  if (ts.isPropertyAssignment(node)) {
    if (node.name && ts.isStringLiteral(node.name)) {
      keys.push({ text: node.name.text, line: sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1 });
    }
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);

const keyNames = keys.map(k => k.text);
const duplicates = keys.filter((item, index) => keyNames.indexOf(item.text) !== index);
console.log('Duplicates:', duplicates);
