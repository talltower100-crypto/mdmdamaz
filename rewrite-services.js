const fs = require('fs');

const services = [
  { id: "ai-seo", title: "AI Search Engine Optimization" },
  { id: "voice-ai-agents", title: "Voice AI Agents" },
  { id: "chat-ai-agents", title: "Chat AI Agents" },
  { id: "review-management", title: "Review Management" },
  { id: "crm-and-hosting", title: "CRM and Hosting" },
  { id: "google-business-profile", title: "Google Business Profile" },
  { id: "website-design", title: "Website Design" },
  { id: "seo", title: "Search Engine Optimization" },
  { id: "public-relations", title: "Public Relations" },
  { id: "conversational-ai-agents", title: "Conversational AI Agents" },
  { id: "linkedin-ghostwriting", title: "LinkedIn Ghostwriting" },
  { id: "ai-mass-social-media-posting", title: "AI Mass Social Media Posting" }
];

const cities = [
  "Providence, RI", "Cranston, RI", "Warwick, RI", "Pawtucket, RI", "North Kingstown, RI", "Boston, MA", "Worcester, MA"
];

const cityLinks = cities.map(city => `<Link to="/locations" className="text-primary hover:underline whitespace-nowrap">${city}</Link>`).join(' | ');

let servicesDataCode = `const servicesData: Record<string, any> = {\n`;

services.forEach(service => {
  const sTitle = service.title;
  const h1 = `Providence ${sTitle} Services`;
  const intro = `Are you looking for high-converting ${sTitle.toLowerCase()} in Providence, RI? Sowa Marketing Agency delivers expert ${sTitle.toLowerCase()} that drives real revenue, scales your operations, and secures your local market position. Let our team turn your digital presence into a measurable growth engine.`;
  
  const servicesInclude = [
    `Custom ${sTitle.toLowerCase()} strategies tailored for the Rhode Island market`,
    `Performance tracking and clear reporting on your local Providence campaigns`,
    `Technical audits and seamless integration of ${sTitle.toLowerCase()}`,
    `Continuous optimization to keep you ahead of regional competitors`,
    `Dedicated support from our North Kingstown team`
  ];

  const coreOfferings = [
    {
      title: `Strategic ${sTitle} Planning`,
      description: `We do not use cookie-cutter templates. Our team analyzes your specific market in Providence to build a ${sTitle.toLowerCase()} roadmap that directly aligns with your revenue goals.`
    },
    {
      title: `Seamless Implementation`,
      description: `Execution is where most agencies fail. We handle the technical heavy lifting of your ${sTitle.toLowerCase()} to ensure a flawless rollout without disrupting your current operations.`
    },
    {
      title: `Performance Tracking`,
      description: `You will never have to guess what your marketing dollars are doing. We provide transparent, data-driven reporting on how our ${sTitle.toLowerCase()} impacts your bottom line.`
    },
    {
      title: `Continuous Optimization`,
      description: `The digital landscape changes rapidly. We actively monitor and refine your ${sTitle.toLowerCase()} to maintain your competitive edge across Rhode Island and beyond.`
    }
  ];

  const whyNeed = [
    { pain: "Losing leads to local competitors?", solution: `Our ${sTitle.toLowerCase()} captures high-intent traffic before they call anyone else.` },
    { pain: "Wasting time on manual tasks?", solution: `We automate and streamline your workflows so you can focus on closing deals.` },
    { pain: "Unsure of your marketing ROI?", solution: `We provide crystal-clear metrics tying our work directly to your revenue.` },
    { pain: "Outdated digital presence?", solution: `We modernize your brand to build immediate trust with Providence buyers.` }
  ];

  const closing = `If you are ready to stop losing ground to competitors and start dominating the local market, Sowa Marketing Agency is here to help. Our professional ${sTitle.toLowerCase()} is designed to generate measurable results for your brand. Take the first step and contact us today to secure your digital future.`;

  servicesDataCode += `  "${service.id}": {
    title: "${sTitle}",
    h1: "${h1}",
    intro: "${intro}",
    servicesInclude: ${JSON.stringify(servicesInclude)},
    coreOfferings: ${JSON.stringify(coreOfferings)},
    whyNeed: ${JSON.stringify(whyNeed)},
    closing: "${closing}",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },\n`;
});

servicesDataCode += `};\n`;

const componentCode = `import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import NotFound from "./NotFound";

${servicesDataCode}

const generateFallbackContent = (title: string) => {
  const h1 = \`Providence \${title} Services\`;
  return {
    title,
    h1,
    intro: \`Are you looking for high-converting \${title.toLowerCase()} in Providence, RI? Sowa Marketing Agency delivers expert \${title.toLowerCase()} that drives real revenue, scales your operations, and secures your local market position. Let our team turn your digital presence into a measurable growth engine.\`,
    servicesInclude: [
      \`Custom \${title.toLowerCase()} strategies tailored for the Rhode Island market\`,
      \`Performance tracking and clear reporting on your local Providence campaigns\`,
      \`Technical audits and seamless integration of \${title.toLowerCase()}\`,
      \`Continuous optimization to keep you ahead of regional competitors\`,
      \`Dedicated support from our North Kingstown team\`
    ],
    coreOfferings: [
      {
        title: \`Strategic \${title} Planning\`,
        description: \`We do not use cookie-cutter templates. Our team analyzes your specific market in Providence to build a \${title.toLowerCase()} roadmap that directly aligns with your revenue goals.\`
      },
      {
        title: \`Seamless Implementation\`,
        description: \`Execution is where most agencies fail. We handle the technical heavy lifting of your \${title.toLowerCase()} to ensure a flawless rollout without disrupting your current operations.\`
      },
      {
        title: \`Performance Tracking\`,
        description: \`You will never have to guess what your marketing dollars are doing. We provide transparent, data-driven reporting on how our \${title.toLowerCase()} impacts your bottom line.\`
      },
      {
        title: \`Continuous Optimization\`,
        description: \`The digital landscape changes rapidly. We actively monitor and refine your \${title.toLowerCase()} to maintain your competitive edge across Rhode Island and beyond.\`
      }
    ],
    whyNeed: [
      { pain: "Losing leads to local competitors?", solution: \`Our \${title.toLowerCase()} captures high-intent traffic before they call anyone else.\` },
      { pain: "Wasting time on manual tasks?", solution: \`We automate and streamline your workflows so you can focus on closing deals.\` },
      { pain: "Unsure of your marketing ROI?", solution: \`We provide crystal-clear metrics tying our work directly to your revenue.\` },
      { pain: "Outdated digital presence?", solution: \`We modernize your brand to build immediate trust with Providence buyers.\` }
    ],
    closing: \`If you are ready to stop losing ground to competitors and start dominating the local market, Sowa Marketing Agency is here to help. Our professional \${title.toLowerCase()} is designed to generate measurable results for your brand. Take the first step and contact us today to secure your digital future.\`,
    image: "https://vibe.filesafe.space/1778622835347500334/assets/ba9edb02-1db9-42f6-a47c-d39ade1d3301.png"
  };
};

export default function ServicePage() {
  const { serviceId } = useParams();
  
  if (!serviceId) return <NotFound />;

  const service = servicesData[serviceId] || generateFallbackContent(serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-16">
      <SEO 
        title={\`\${service.h1} | Sowa Marketing Agency\`}
        description={service.intro.substring(0, 155)}
        canonical={\`https://sowaagency.com/services/\${serviceId}\`}
      />
      
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{service.h1}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {service.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our {service.title} Services Include:</h2>
            <ul className="space-y-4 ml-2">
              {service.servicesInclude.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            {service.coreOfferings.map((offering: any, i: number) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4">{offering.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Why You Need Professional {service.title}</h2>
            <ul className="space-y-6">
              {service.whyNeed.map((item: any, i: number) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 font-bold text-lg min-w-[250px]">
                    <div className="w-2 h-2 rounded-full bg-destructive shrink-0"></div>
                    {item.pain}
                  </div>
                  <div className="text-lg text-muted-foreground sm:border-l sm:border-border sm:pl-4">
                    {item.solution}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <p className="text-xl mb-8 font-medium">{service.closing}</p>
            <Button size="lg" className="rounded-full px-10 text-lg h-14" asChild>
              <Link to="/contact">
                Contact Sowa Marketing Agency <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Footer Links */}
      <section className="border-t border-border pt-8 pb-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Proudly Serving:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            ${cityLinks}
          </div>
        </div>
      </section>

    </div>
  );
}
`;

fs.writeFileSync('src/pages/ServicePage.tsx', componentCode);
console.log('Done rewriting ServicePage.tsx');
