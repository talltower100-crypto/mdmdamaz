const fs = require('fs');
let content = fs.readFileSync('src/pages/ServicePage.tsx', 'utf8');

// 1. Add image to all services pages
// Look for the start of the Main Content section
const mainContentMarker = `<div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16">`;
if (content.includes(mainContentMarker) && !content.includes('<img src={service.image}')) {
  content = content.replace(
    mainContentMarker,
    mainContentMarker + `
          
          <div className="my-8 relative overflow-hidden rounded-2xl border border-border/50">
            <img 
              src={service.image} 
              alt={\`\${service.title} Services\`} 
              className="w-full aspect-[21/9] object-cover"
            />
          </div>`
  );
}

// 2. Remove the word "Providence" from everywhere.
// For the footer links: <Link to="/locations" className="...">Providence, RI</Link>
// We can just change "Providence, RI" to "Rhode Island" to keep it clean, or just remove "Providence, " so it becomes "RI". Let's change "Providence, RI" to "Rhode Island" first.
content = content.replace(/>Providence, RI<\/Link>/g, ">Rhode Island</Link>");

// Now remove all other instances of Providence (case-insensitive)
content = content.replace(/Providence /gi, "");
content = content.replace(/ Providence/gi, "");
content = content.replace(/providence /gi, "");
content = content.replace(/ providence/gi, "");

fs.writeFileSync('src/pages/ServicePage.tsx', content);
console.log('Done modifying ServicePage.tsx');
