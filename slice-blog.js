const fs = require('fs');
try {
  let content = fs.readFileSync('src/data/blogPosts.tsx', 'utf8');
  const index = content.indexOf('"providence-seo-company-near-me": {');
  if (index !== -1) {
    content = content.substring(0, index);
    const replaceAllContent = fs.readFileSync('replace-all.js', 'utf8');
    const match = replaceAllContent.match(/const newPostContent = `([\s\S]+?)`;/);
    if (match) {
      content += match[1] + '\n};\n\nexport const getPostBySlug = (slug: string) => {\n  return blogPosts[slug] || null;\n};\n';
      fs.writeFileSync('src/data/blogPosts.tsx', content);
      fs.writeFileSync('log.txt', 'Success');
    } else {
      fs.writeFileSync('log.txt', 'No match for newPostContent');
    }
  } else {
    fs.writeFileSync('log.txt', 'No index found');
  }
} catch (e) {
  fs.writeFileSync('log.txt', e.toString());
}
