const fs = require('fs');

let content = fs.readFileSync('src/pages/ServicePage.tsx', 'utf8');

// Render the image in the JSX
// We'll insert it right after the Hero Header or before the servicesInclude list.
// The user says "there needs to be an image for all services pages."
// Let's place it right above "Our {service.title} Services Include:"
if (!content.includes('<img src={service.image}')) {
  content = content.replace(
    /<div>\s*<h2 className="text-3xl font-bold mb-6">Our \{service\.title\} Services Include:<\/h2>/,
    `<div className="my-12 relative overflow-hidden rounded-2xl border border-border/50">
            <img 
              src={service.image} 
              alt={\`\${service.title} Services\`} 
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our {service.title} Services Include:</h2>`
  );
}

// Remove "Providence" (case-insensitive)
// "Providence " -> ""
// " Providence" -> ""
// "providence " -> ""
// " providence" -> ""
// "Providence, RI" -> "Providence, RI" wait, if I remove Providence, it leaves ", RI".
// Let's just replace "Providence, RI" with "Rhode Island" or just remove it from the footer links?
// Let's replace "Providence, RI" with "Rhode Island" in the footer link:
content = content.replace(/>Providence, RI<\/Link>/g, ">Rhode Island</Link>");

// Replace "Providence " with ""
content = content.replace(/Providence /gi, "");
content = content.replace(/ Providence/gi, "");
content = content.replace(/providence /gi, "");
content = content.replace(/ providence/gi, "");

fs.writeFileSync('src/pages/ServicePage.tsx', content);
console.log('Done');
