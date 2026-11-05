import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Globe, Phone, Star, TrendingUp } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const caseStudiesData = {
  "advanced-realty": {
    client: "Advanced Realty",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/1a8ba274-e32b-4928-846f-92e5077123e7.png",
    contact: "Donald Hardy",
    category: "Website Design and Branding",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/10",
    accentColor: "text-blue-400",
    challenge:
      "Advanced Realty needed a modern, high-converting website to establish a dominant digital presence in a competitive real estate market. Their existing online footprint was outdated, inconsistently branded, and failing to generate quality inbound leads from motivated buyers and sellers in Rhode Island.",
    solution:
      "Sowa Marketing Agency delivered a full website redesign paired with a cohesive branding refresh. We built a fast, mobile-first site with compelling listing pages, strategic calls-to-action, and an SEO-optimized architecture. Rapid prototyping and clear communication kept the project on schedule from day one.",
    results: [
      { metric: "Days to Draft", value: "< 5", desc: "From kickoff to rough draft" },
      { metric: "Communication", value: "100%", desc: "Transparent throughout" },
      { metric: "Outcome", value: "Launched", desc: "On time, on budget" }
    ],
    quote: "The team moved fast. We had a rough draft within a few days and clear communication the whole way.",
    services: ["Website Design", "Logo and Branding", "SEO"],
    fullStory: [
      "When Advanced Realty approached us, they were facing a common struggle: their digital presence didn't match the high quality of their real-world service. In the fast-paced real estate market of Rhode Island, a slow or confusing website means lost commissions.",
      "We started with a deep discovery phase, identifying the specific pain points of their target demographic. We found that users wanted instant access to listings and a clear path to contact an agent without friction.",
      "Our design team created a custom UI that prioritized speed and visual clarity. We integrated a powerful search tool and optimized every image for fast loading without sacrificing quality. The branding was refreshed to feel premium yet accessible, positioning Advanced Realty as the local authority.",
      "The result was a transformative digital platform. Within five days of kickoff, we presented a fully functional rough draft. This speed allowed for rapid feedback cycles and a final launch that exceeded all performance benchmarks. Today, Advanced Realty enjoys a steady stream of automated leads."
    ]
  },
  "degrees-of-success": {
    client: "Degrees of Success",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/0d761af6-642c-408e-979c-2721615f8dcf.png",
    contact: "Genevieve Dobson",
    category: "Press Release and Media Placement",
    icon: TrendingUp,
    color: "from-purple-500/20 to-pink-500/10",
    accentColor: "text-purple-400",
    challenge:
      "Degrees of Success needed to establish authority, credibility, and national brand recognition quickly. Genevieve had a powerful story and a mission-driven brand, but lacked the media presence needed to reach a wider audience and attract high-caliber partnerships and clients.",
    solution:
      "We crafted a compelling, professionally written press release and distributed it through our premium media network. The campaign was strategically timed and pitched to maximize editorial pickup. Within a short turnaround, Degrees of Success secured features in some of the most respected financial and business publications in the world.",
    results: [
      { metric: "Publications", value: "3 Major", desc: "Yahoo, Bloomberg, Business Insider" },
      { metric: "Turnaround", value: "Fast", desc: "Publication within days" },
      { metric: "Authority", value: "National", desc: "Instant brand credibility" }
    ],
    quote: "The experience was great and fast! I got featured in Yahoo, Bloomberg and Business Insider. I would highly recommend them.",
    services: ["Press Release", "Content Assistance", "Brand Strategy"],
    fullStory: [
      "Authority is the currency of the modern business world. For Degrees of Success, the challenge wasn't the quality of their work, but the visibility of their brand. They needed to move from being a 'best kept secret' to a nationally recognized leader.",
      "Our strategy focused on 'The Big Three': Yahoo, Bloomberg, and Business Insider. These are high-authority domains that not only provide massive traffic but also offer significant SEO benefits through high-quality backlinks.",
      "We didn't just write a press release; we told a story. We highlighted the unique impact Degrees of Success was making in the financial education space, making it irresistible for editors looking for compelling business narratives.",
      "The execution was flawless. Within days of distribution, the features went live. This instant surge in credibility transformed their sales conversations. Instead of explaining who they were, Genevieve could now point to major media features that did the heavy lifting for her."
    ]
  },
  "kc-portfolio-capital": {
    client: "KC Portfolio Capital",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/187578ba-d2f3-4e0c-832c-0879df369638.png",
    contact: "Nam Le",
    category: "Google Business Profile and SEO",
    icon: Phone,
    color: "from-green-500/20 to-emerald-500/10",
    accentColor: "text-green-400",
    challenge:
      "KC Portfolio was an established business with quality services but a limited online footprint. Inbound call volume was low and the business was virtually invisible in local search results. Potential customers searching for their services in the area were finding competitors instead.",
    solution:
      "Sowa Marketing Agency executed a dual-channel growth strategy combining a fully optimized Google Business Profile with targeted on-page and off-page SEO. We built keyword-rich service pages, cultivated high-quality local citations, and optimized the GBP listing with photos, services, posts, and review generation strategies that drove the profile to top placement in local map results.",
    results: [
      { metric: "Inbound Calls", value: "Increased", desc: "More calls from search" },
      { metric: "Local Visibility", value: "Top Ranked", desc: "Google Maps and organic" },
      { metric: "Strategy", value: "GMB + SEO", desc: "Dual-channel approach" }
    ],
    quote: "I got a lot more calls to my website all thanks to their Google My Business and SEO strategies.",
    services: ["Google Business Profile", "Search Engine Optimization", "Review Management"],
    fullStory: [
      "Local search is a winner-take-all game. If you aren't in the 'Map Pack' (the top three results on Google Maps), you are losing 70% of the potential traffic. KC Portfolio was nowhere to be found, despite having a superior service to their competitors.",
      "We began with a comprehensive SEO audit, identifying the high-intent keywords their customers were actually using. We found that while they had a website, it wasn't optimized for the specific geographic areas they served.",
      "Our team completely overhauled their Google Business Profile. We added professional photography, optimized their service descriptions, and implemented a systematic review generation campaign to build social proof. Simultaneously, we built out local 'city pages' on their website to capture organic search traffic.",
      "The impact was immediate. Call volume began to climb as KC Portfolio ascended the rankings. By the third month, they held the #1 spot for their primary keywords. The business transformed from a quiet office to a bustling operation driven by consistent, high-intent inbound leads."
    ]
  }
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? caseStudiesData[slug as keyof typeof caseStudiesData] : null;

  if (!cs) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <SEOHead
        title={`${cs.client} Case Study | ${cs.category} | Sowa Marketing Agency`}
        description={cs.challenge.length > 155 ? cs.challenge.substring(0, 155) + "..." : cs.challenge.padEnd(155, " ").substring(0, 155) + "..."}
        canonical={`https://sowaagency.com/case-studies/${slug}`}
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${cs.client} Case Study | ${cs.category}`,
          "description": cs.challenge,
          "author": {
            "@type": "Organization",
            "name": "Sowa Marketing Agency"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sowa Marketing Agency",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sowaagency.com/favicon.svg"
            }
          }
        })}
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className={`absolute inset-0 bg-gradient-to-b ${cs.color} to-background z-0 opacity-50`} />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Link to="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Case Studies
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border/50 text-sm font-medium ${cs.accentColor}`}>
                <cs.icon className="w-4 h-4" />
                {cs.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              How We Helped {cs.client} Scale
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {cs.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Story */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
<h2 className="text-3xl font-bold mb-8">The Deep Dive</h2>
                <div className="space-y-6">
                  <div className="my-8 relative overflow-hidden rounded-2xl border border-border/50">
                    <img 
                      src={cs.image} 
                      alt={`${cs.client} - Digital Marketing Case Study Results and Execution`} 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                  {cs.fullStory.map((paragraph, i) => (
                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8">Key Deliverables</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cs.services.map((service, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-white/5">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 ${cs.accentColor}`}>
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <span className="font-semibold">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* Results Card */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-card border border-border/50 rounded-3xl p-8 sticky top-32">
                <h3 className="text-xl font-bold mb-8 border-b border-white/5 pb-4">Performance Metrics</h3>
                <div className="space-y-8">
                  {cs.results.map((result, i) => (
                    <div key={i}>
                      <div className={`text-4xl font-black mb-2 ${cs.accentColor}`}>
                        {result.value}
                      </div>
                      <div className="font-bold text-lg mb-1">{result.metric}</div>
                      <div className="text-muted-foreground">{result.desc}</div>
                      {i < cs.results.length - 1 && <div className="mt-8 border-t border-white/5" />}
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <blockquote className="text-lg italic text-muted-foreground mb-6 leading-relaxed">
                    "{cs.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {cs.contact.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{cs.contact}</div>
                      <div className="text-sm text-muted-foreground">{cs.client}</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-12 rounded-2xl h-14 text-lg" asChild>
                  <Link to="/contact">
                    Get Similar Results <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join {cs.client} and dozens of other Rhode Island businesses who have transformed their digital presence with Sowa Marketing Agency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-foreground text-background hover:bg-foreground/90" asChild>
                <Link to="/contact">
                  Book Your Discovery Call
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/10" asChild>
                <Link to="/case-studies">
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
