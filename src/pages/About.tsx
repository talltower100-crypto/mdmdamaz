import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <SEOHead 
        title="About Sowa Marketing Agency | Rhode Island Digital Marketing"
        description="Sowa Marketing Agency provides Rhode Island digital marketing in North Kingstown. We build search campaigns and websites that drive measurable revenue."
        canonical="https://sowaagency.com/about"
        ogImage="https://vibe.filesafe.space/1778622835347500334/assets/91152161-5176-40a9-8e07-93101be6843a.png"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Sowa Marketing Agency",
            "url": "https://sowaagency.com"
          }
        })}
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Rhode Island Digital Marketing in North Kingstown
          </h1>

          <div className="mb-10 relative overflow-hidden rounded-2xl border border-border/50">
            <img 
              src="https://vibe.filesafe.space/1778622835347500334/assets/91152161-5176-40a9-8e07-93101be6843a.png" 
              alt="Professional digital marketing team in Rhode Island working in a modern office" 
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Finding reliable Rhode Island digital marketing does not have to be difficult. Located in North Kingstown, Sowa Marketing Agency builds search campaigns that drive revenue. We focus on clear data and direct results for local businesses.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
              <li><Link to="/services/ai-seo" className="text-primary hover:underline">AI Search Engine Optimization</Link></li>
              <li><Link to="/services/website-design" className="text-primary hover:underline">Custom Website Design</Link></li>
              <li><Link to="/services/voice-ai-agents" className="text-primary hover:underline">Voice AI Agents</Link></li>
              <li><Link to="/services/chat-ai-agents" className="text-primary hover:underline">Chat AI Agents</Link></li>
              <li><Link to="/services/review-management" className="text-primary hover:underline">Online Review Management</Link></li>
              <li><Link to="/services/crm-and-hosting" className="text-primary hover:underline">CRM and Hosting</Link></li>
              <li><Link to="/services/social-media-management" className="text-primary hover:underline">Social Media Management</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Why Choose Sowa Marketing Agency?</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-muted-foreground">
              <li><strong>10+ Years In Business</strong></li>
              <li><strong>1,500+ Clients Helped</strong></li>
              <li><strong>Local & Trusted</strong></li>
              <li><strong>Data-Driven Strategies</strong></li>
              <li><strong>Proven Track Record</strong></li>
              <li><strong>Fast Communication</strong></li>
              <li><strong>Custom AI Solutions</strong></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Aidan Sowa — Founder & Owner</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aidan started Sowa Marketing Agency to solve a specific problem in Rhode Island digital marketing. Most agencies focus on vanity metrics instead of actual business growth. He built a team that measures success strictly by the revenue generated for clients.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
              <li>Digital strategy expert</li>
              <li>AI automation specialist</li>
              <li>Local search authority</li>
              <li>Revenue-focused marketer</li>
              <li>Systems builder</li>
              <li>Rhode Island native</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Serving North Kingstown and Surrounding Areas</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with businesses across Rhode Island to improve their search visibility and lead flow. Our team serves North Kingstown, Providence, Warwick, Cranston, and Pawtucket. Call us at 401-219-4207 or visit our <Link to="/contact" className="text-primary hover:underline">contact page</Link> to discuss your project.
            </p>
          </div>

          <div className="pt-6 border-t border-border/50">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A strong Rhode Island digital marketing strategy requires a long-term partner who understands your market. We build systems designed to scale with your business year after year. Stop losing leads to competitors and start capturing the traffic you deserve.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
