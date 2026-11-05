const fs = require('fs');
const path = require('path');

const blogPostsContent = fs.readFileSync(path.resolve(__dirname, './src/data/blogPosts.tsx'), 'utf-8');
const slugRegex = /slug:\s*["']([^"']+)["']/g;
const blogs = [];
let match;
while ((match = slugRegex.exec(blogPostsContent)) !== null) {
  if (!blogs.includes(match[1])) {
    blogs.push(match[1]);
  }
}
console.log('Found blogs:', blogs);
