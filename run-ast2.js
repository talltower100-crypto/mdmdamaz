const fs = require('fs');
const ts = require('typescript');

const sourceFile = ts.createSourceFile(
  'blogPosts.tsx',
  fs.readFileSync('src/data/blogPosts.tsx', 'utf8'),
  ts.ScriptTarget.Latest,
  true
);

function visit(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const keys = [];
    node.properties.forEach(prop => {
      if (prop.name && (ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name))) {
        const text = prop.name.text;
        if (keys.includes(text)) {
          console.log(`Duplicate key found: ${text} at line ${sourceFile.getLineAndCharacterOfPosition(prop.getStart()).line + 1}`);
        }
        keys.push(text);
      }
    });
  }
  ts.forEachChild(node, visit);
}

visit(sourceFile);