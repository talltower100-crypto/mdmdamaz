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
  { id: "ai-mass-social-media-posting", title: "AI Mass Social Media Posting" },
  { id: "email-marketing", title: "Email Marketing" },
  { id: "content-assistance", title: "Content Assistance" },
  { id: "ad-management", title: "Ad Management" }
];

const cities = [
  "Providence, RI", "Cranston, RI", "Warwick, RI", "Pawtucket, RI", "North Kingstown, RI", "Boston, MA", "Worcester, MA"
];

const cityLinks = cities.map(city => `<Link to="/locations" className="text-primary hover:underline whitespace-nowrap">${city}</Link>`).join(' | ');

let servicesDataCode = `const servicesData: Record<string, any> = {\n`;

services.forEach(service => {
  const sTitle = service.title;
  const kw = sTitle.toLowerCase();
  
  const h1 = `Providence ${sTitle} Services`;
  
  // Intro: 2-3 sentences. Core value prop + primary keyword. Mention city. Name business.
  const intro = `Sowa Marketing Agency builds high-converting Providence ${kw} campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.`;
  
  // Services Include: 5-7 items, named services, location keywords.
  const servicesInclude = [
    `Custom ${kw} strategy for the Providence market`,
    `Technical audits and foundation repair`,
    `Local Rhode Island competitor analysis`,
    `Performance tracking and lead attribution`,
    `Direct integration with your sales process`,
    `Ongoing optimization for regional dominance`
  ];

  // Core offerings: 4 sections. H2 maps to real search terms. Mention keyword.
  const coreOfferings = [
    {
      title: `Custom ${sTitle} Strategy`,
      description: `We build your ${kw} plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI.`
    },
    {
      title: `Technical ${sTitle} Implementation`,
      description: `A great plan means nothing without flawless execution. Our team handles the entire technical setup for your ${kw} campaign. You can focus on running your business while we build your growth engine.`
    },
    {
      title: `Local ${sTitle} Optimization`,
      description: `You need to own your backyard before expanding. We optimize your ${kw} assets specifically for Providence and surrounding areas. This approach captures high-intent local buyers before they find your competitors.`
    },
    {
      title: `Performance Tracking for ${sTitle}`,
      description: `Data drives every decision we make. We track exactly how your Providence ${kw} campaign performs down to the dollar. You always know exactly what your marketing budget yields.`
    }
  ];

  // Why Need: pain points paired with one-line solutions.
  const whyNeed = [
    { pain: "Losing leads to local competitors?", solution: `Our ${kw} captures high-intent traffic before they call anyone else.` },
    { pain: "Wasting time on manual tasks?", solution: `We streamline your workflows so you can focus on closing deals.` },
    { pain: "Unsure of your marketing ROI?", solution: `We provide clear metrics tying our work directly to your revenue.` },
    { pain: "Outdated digital presence?", solution: `We modernize your brand to build immediate trust with Providence buyers.` }
  ];

  // Closing CTA: Paragraph naming business + contact link. Include keyword.
  const closing = `Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional Providence ${kw} services designed to generate real business growth. Take the first step and contact us today to secure your digital future.`;

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
  const kw = title.toLowerCase();
  const h1 = \`Providence \${title} Services\`;
  return {
    title,
    h1,
    intro: \`Sowa Marketing Agency builds high-converting Providence \${kw} campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.\`,
    servicesInclude: [
      \`Custom \${kw} strategy for the Providence market\`,
      \`Technical audits and foundation repair\`,
      \`Local Rhode Island competitor analysis\`,
      \`Performance tracking and lead attribution\`,
      \`Direct integration with your sales process\`,
      \`Ongoing optimization for regional dominance\`
    ],
    coreOfferings: [
      {
        title: \`Custom \${title} Strategy\`,
        description: \`We build your \${kw} plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI.\`
      },
      {
        title: \`Technical \${title} Implementation\`,
        description: \`A great plan means nothing without flawless execution. Our team handles the entire technical setup for your \${kw} campaign. You can focus on running your business while we build your growth engine.\`
      },
      {
        title: \`Local \${title} Optimization\`,
        description: \`You need to own your backyard before expanding. We optimize your \${kw} assets specifically for Providence and surrounding areas. This approach captures high-intent local buyers before they find your competitors.\`
      },
      {
        title: \`Performance Tracking for \${title}\`,
        description: \`Data drives every decision we make. We track exactly how your Providence \${kw} campaign performs down to the dollar. You always know exactly what your marketing budget yields.\`
      }
    ],
    whyNeed: [
      { pain: "Losing leads to local competitors?", solution: \`Our \${kw} captures high-intent traffic before they call anyone else.\` },
      { pain: "Wasting time on manual tasks?", solution: \`We streamline your workflows so you can focus on closing deals.\` },
      { pain: "Unsure of your marketing ROI?", solution: \`We provide clear metrics tying our work directly to your revenue.\` },
      { pain: "Outdated digital presence?", solution: \`We modernize your brand to build immediate trust with Providence buyers.\` }
    ],
    closing: \`Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional Providence \${kw} services designed to generate real business growth. Take the first step and contact us today to secure your digital future.\`,
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
