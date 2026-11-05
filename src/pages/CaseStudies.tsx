import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Phone, Star, TrendingUp } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const caseStudies = [
  {
    slug: "advanced-realty",
    client: "Advanced Realty",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/1a8ba274-e32b-4928-846f-92e5077123e7.png",
    contact: "Donald Hardy",
    category: "Website Design and Branding",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/10",
    accentColor: "text-blue-400",
    challenge:
      "Advanced Realty needed a fresh, strong website to rule a tough real estate market. Their old web space looked old, was mixed up, and failed to get good leads from folks looking to buy or sell in RI.",
    solution:
      "Sowa Marketing Agency gave them a full web redesign and a fresh brand look. We built a fast, phone-first site with great listing pages, clear calls to act, and a strong search plan. Fast drafts and clear talk kept the work on track from day one.",
    results: [
      { metric: "Days to Draft", value: "< 5", desc: "From kickoff to rough draft" },
      { metric: "Communication", value: "100%", desc: "Transparent throughout" },
      { metric: "Outcome", value: "Launched", desc: "On time, on budget" }
    ],
    quote: "The team moved fast. We had a rough draft within a few days and clear communication the whole way.",
    services: ["Website Design", "Logo and Branding", "SEO"]
  },
  {
    slug: "degrees-of-success",
    client: "Degrees of Success",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/0d761af6-642c-408e-979c-2721615f8dcf.png",
    contact: "Genevieve Dobson",
    category: "Press Release and Media Placement",
    icon: TrendingUp,
    color: "from-purple-500/20 to-pink-500/10",
    accentColor: "text-purple-400",
    challenge:
      "Degrees of Success needed to build trust and a known brand name fast. Genevieve had a strong story and a good goal, but lacked the press reach needed to find a wide crowd and draw in top partners and clients.",
    solution:
      "We wrote a strong, pro press release and sent it out through our top news network. The push was timed right to get the most reads. In a short time, Degrees of Success got spots in some of the most known finance and business news sites in the world.",
    results: [
      { metric: "Publications", value: "3 Major", desc: "Yahoo, Bloomberg, Business Insider" },
      { metric: "Turnaround", value: "Fast", desc: "Publication within days" },
      { metric: "Authority", value: "National", desc: "Instant brand credibility" }
    ],
    quote: "The experience was great and fast! I got featured in Yahoo, Bloomberg and Business Insider. I would highly recommend them.",
    services: ["Press Release", "Content Assistance", "Brand Strategy"]
  },
  {
    slug: "kc-portfolio-capital",
    client: "KC Portfolio Capital",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/187578ba-d2f3-4e0c-832c-0879df369638.png",
    contact: "Nam Le",
    category: "Google Business Profile and SEO",
    icon: Phone,
    color: "from-green-500/20 to-emerald-500/10",
    accentColor: "text-green-400",
    challenge:
      "KC Portfolio was a solid brand with good work but a small web space. Calls were low and the brand was hard to find in local search. Folks looking for their work in the area found other brands instead.",
    solution:
      "Sowa Marketing Agency ran a two-part growth plan mixing a fully tuned Google Business Profile with strong on-page and off-page search boosts. We built keyword-rich pages, got good local links, and tuned the GBP spot with photos, posts, and review plans that pushed the profile to the top in local map search.",
    results: [
      { metric: "Inbound Calls", value: "Increased", desc: "More calls from search" },
      { metric: "Local Visibility", value: "Top Ranked", desc: "Google Maps and organic" },
      { metric: "Strategy", value: "GMB + SEO", desc: "Dual-channel approach" }
    ],
    quote: "I got a lot more calls to my website all thanks to their Google My Business and SEO strategies.",
    services: ["Google Business Profile", "Search Engine Optimization", "Review Management"]
  }
];

export default function CaseStudies() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <SEOHead 
        title="Digital Marketing Case Studies & Results | Sowa Marketing Agency"
        description="Explore our portfolio of successful digital marketing campaigns. See how we've helped businesses in RI and nationwide scale with SEO, Web Design, and AI tools."
        canonical="https://sowaagency.com/case-studies"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Sowa Marketing Agency Case Studies",
          "url": "https://sowaagency.com/case-studies"
        })}
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium">Real Clients. Real Results.</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Case Studies That Speak for Themselves
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Each plan we build rests on facts, aims for real wins, and is made just for your goals. These are the tales of real clients who trusted Sowa Marketing Agency to grow their brands and won.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Case Studies */}
      {caseStudies.map((cs, i) => (
        <section
          key={i}
          className={`py-20 ${i % 2 === 1 ? "bg-muted/20 border-y border-white/5" : "bg-background"}`}
        >
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border/50 text-sm font-medium ${cs.accentColor}`}>
                  <cs.icon className="w-4 h-4" />
                  {cs.category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{cs.client}</h2>
              <p className="text-muted-foreground text-lg">Client: {cs.contact}</p>
            </motion.div>
            <div className="my-8 relative overflow-hidden rounded-2xl border border-border/50">
              <img 
                src={cs.image} 
                alt={`${cs.client} - Digital Marketing Case Study by Sowa Marketing Agency`} 
                className="w-full aspect-[21/9] object-cover"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Main content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="lg:col-span-3 space-y-8"
              >
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  <h3 className="text-sm font-bold mb-3 text-muted-foreground uppercase tracking-wider">The Challenge</h3>
                  <p className="text-foreground leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  <h3 className="text-sm font-bold mb-3 text-muted-foreground uppercase tracking-wider">Our Solution</h3>
                  <p className="text-foreground leading-relaxed">{cs.solution}</p>
                </div>

                {/* Quote */}
                <div className={`relative rounded-2xl p-8 bg-gradient-to-br ${cs.color} border border-white/10`}>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl font-medium leading-relaxed italic mb-4">
                    "{cs.quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold">{cs.contact}</p>
                    <p className={`text-sm ${cs.accentColor}`}>{cs.client}</p>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
                className="lg:col-span-2 space-y-6"
              >
                {/* Metrics */}
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Results</h3>
                  <div className="space-y-6">
                    {cs.results.map((r, j) => (
                      <div key={j}>
                        <div className={`text-2xl font-black mb-1 ${cs.accentColor}`}>{r.value}</div>
                        <div className="font-semibold text-sm mb-0.5">{r.metric}</div>
                        <div className="text-xs text-muted-foreground">{r.desc}</div>
                        {j < cs.results.length - 1 && <div className="mt-4 border-t border-border/50" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services used */}
                <div className="bg-card border border-border/50 rounded-2xl p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Services Delivered</h3>
                  <div className="flex flex-col gap-2">
                    {cs.services.map((svc, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${cs.accentColor.replace("text-", "bg-")}`} />
                        <span className="text-sm">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full rounded-xl" asChild>
                  <Link to={`/case-studies/${cs.slug}`}>
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Methodology Section */}
      <section className="py-20 bg-muted/20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Get Results</h2>
            <p className="text-muted-foreground text-lg">
              Our client wins are not luck. They come from a proven, clear system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, label: "Base", color: "text-blue-400", desc: "We build strong websites and solid search rules so your web space stands on firm ground from day one. Speed, phone fit, and sales paths are key in all we build." },
              { icon: TrendingUp, label: "Tech Work", color: "text-purple-400", desc: "With a strong base in place, we add in AI tools. Voice and Chat bots take calls all day, screen leads, and book times so your team just works on closing deals." },
              { icon: Globe, label: "Growth", color: "text-green-400", desc: "We pour fuel on the fire with smart ad runs, email blasts, press news, and strong review pushes. We make sure your brand gets seen, trusted, and picked over all others." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeIn, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } } }}
                className="bg-card border border-border/50 rounded-2xl p-8"
              >
                <item.icon className={`w-8 h-8 mb-4 ${item.color}`} />
                <h3 className="text-xl font-bold mb-3">{item.label}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Our Next Win?</h2>
            <p className="text-muted-foreground text-xl mb-10 leading-relaxed">
              If you need a great website, big press news, or a fully automated lead tool, Sowa Marketing Agency has the plan and the track record to make it happen. Let's build something great.
            </p>
            <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-foreground text-background hover:bg-foreground/90" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
