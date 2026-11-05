import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Globe, LineChart, MessageSquare, Star, Zap } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead 
        title="Sowa Marketing Agency | RI's Top Web Design, SEO & AI Experts"
        description="Sowa Marketing Agency specializes in high-converting website design, SEO, Voice AI Agents, and CRM hosting in North Kingstown, RI. Scale your business today."
        canonical="https://sowaagency.com/"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sowa Marketing Agency",
          "image": "https://vibe.filesafe.space/1778622835347500334/assets/ef57a78f-62da-421d-9dd8-02e59737e140.png",
          "@id": "https://sowaagency.com",
          "url": "https://sowaagency.com",
          "telephone": "401-219-4207",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "131 Chimney Rock Dr",
            "addressLocality": "North Kingstown",
            "addressRegion": "RI",
            "postalCode": "02852",
            "addressCountry": "US"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778622835347500334/assets/62cefc72-9013-4f18-9964-aa16d56fcee2.png")' }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-[2px] bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm font-medium">Rhode Island's Top Web Team . 1,500+ Clients Helped</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              We Build Great Websites That Sell
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Sowa Marketing Agency helps you grow. We make great sites, boost your search rank, and add smart AI bots. Build your brand and get more leads today.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-gray-200" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Get a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-white/20 hover:bg-white/10" asChild>
                <Link to="/case-studies">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "1,500+", label: "Clients Helped" },
              { number: "10+", label: "Years of Work" },
              { number: "98%", label: "Stay with Us" },
              { number: "3x", label: "More Leads" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{stat.number}</span>
                <span className="text-muted-foreground mt-2 text-sm font-medium uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Services Overview Section */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">All the Web Tools You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              To win online, you need a smart plan. We mix good looks with real facts so your brand stands out and does well in a tough market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LineChart, title: "AI Search Engine Optimization", desc: "Top the search results with AI plans that guess rules and tweak text for more views and real growth.", path: "/services/ai-seo" },
              { icon: Globe, title: "Website Design", desc: "We build nice, fast websites made to turn guests into true fans. Our designs look fresh, load fast, and fit your brand.", path: "/services/website-design" },
              { icon: Bot, title: "Voice AI Agents", desc: "Change how you help folks with smart Voice AI Bots. They take calls, book times, and give help all day and night.", path: "/services/voice-ai-agents" },
              { icon: MessageSquare, title: "Chat AI Agents", desc: "Talk to site guests right away with smart Chat AI Bots. From quick facts to sales steps, our chats boost sales.", path: "/services/chat-ai-agents" },
              { icon: Star, title: "Review Management", desc: "Your web fame means a lot. We help you get good reviews, watch your web name, and build deep trust with new clients.", path: "/services/review-management" },
              { icon: Zap, title: "CRM and Hosting", desc: "Speed up your work with strong sales tools and fast, safe web hosts. Keep your facts neat and your site fast at all times.", path: "/services/crm-and-hosting" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <service.icon className="w-10 h-10 text-primary mb-4 relative z-10" />
                <h3 className="text-xl font-semibold mb-3 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 relative z-10">{service.desc}</p>
                <Link to={service.path} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors relative z-10">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Heavy Section for SEO */}
      <section className="py-24 bg-muted/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Pick Sowa Marketing Agency?</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
<p>
                  Just having a website is not enough. You need a full, strong plan that works hard to grow your brand. Based in North Kingstown, RI, Sowa Marketing Agency has helped more than 1,500 clients with top web marketing, site design, and AI tools.
                </p>
                <p>
                  Our way rests on facts and gets real wins. When you team up with us, you get a strong team of web pros who care about your growth. We build neat websites that show your brand well and use smart rules to get more sales on each page.
                </p>
                
                <div className="my-8 relative overflow-hidden rounded-2xl border border-border/50">
                  <img 
                    src="https://vibe.filesafe.space/1778622835347500334/assets/441934a8-1612-412e-825d-587d4fbf0ce9.png" 
                    alt="Digital marketing dashboard showing analytics and growth metrics for Sowa Marketing Agency clients" 
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <p>
                  Past normal ads, we lead with new AI tech for local and big brands. Our Voice AI Bots and Chat AI Bots do the work, screen leads, and book times all day and night. Think of a top sales pro who does not sleep and talks to scores of folks at once.
                </p>
                <p>
                  Our Review Help and Google Tools make sure new clients find a top-rated, safe brand when they look for your work. Mixed with safe hosts and strong sales links, we give a full web space that turns quick looks into long-term fans.
                </p>
                <p>
                  We think clear talk is best. We give clear, simple reports so you always know how your ad funds work. If you want to rule local search in RI or grow big, we have the tools, skill, and tech to help you reach your goals.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl absolute inset-0"></div>
              <div className="relative bg-card border border-border/50 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Our Pledge to You</h3>
                <ul className="space-y-4">
                  {[
                    "Fact-based plans made just for your field.",
                    "Clear reports and real cash back.",
                    "New tech tools like custom AI bots.",
                    "Fast, local help from our RI base.",
                    "Constant tweaks to keep you ahead of the pack.",
                    "A full team focused on your long-term growth."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Star className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "Sowa Marketing Agency changed our web space. Our lead count went up three times since they built our new site and used their search plan. They are the best in RI."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery / Past Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Top Past Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Look at some of our fresh, strong websites and web plans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://vibe.filesafe.space/1778622835347500334/assets/1a8ba274-e32b-4928-846f-92e5077123e7.png", title: "Advanced Realty", cat: "Web Design & SEO", slug: "advanced-realty" },
              { img: "https://vibe.filesafe.space/1778622835347500334/assets/0d761af6-642c-408e-979c-2721615f8dcf.png", title: "Degrees of Success", cat: "PR & Media Placement", slug: "degrees-of-success" },
              { img: "https://vibe.filesafe.space/1778622835347500334/assets/187578ba-d2f3-4e0c-832c-0879df369638.png", title: "KC Portfolio Capital", cat: "Local SEO & GMB", slug: "kc-portfolio-capital" }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
                }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl mb-4 border border-border/50 relative">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <Button variant="secondary" className="rounded-full" asChild>
                      <Link to={`/case-studies/${project.slug}`}>View the Work</Link>
                    </Button>
                  </div>
                  <img 
                    src={project.img} 
                    alt={`${project.title} - Website Design and SEO Case Study`} 
                    className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground">{project.cat}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link to="/case-studies">View All Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Happy Client Words</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Do not just take our word for it. See what our clients have to say about working with Sowa Marketing Agency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Donald Hardy", role: "Advanced Realty", text: "The team moved fast. We had a rough draft within a few days and clear communication the whole way." },
              { name: "Genevieve Dobson", role: "Degrees of Success", text: "The experience was great and fast! I got featured in Yahoo, Bloomberg and Business Insider. I would highly recommend them." },
              { name: "Nam Le", role: "KC Portfolio Capital", text: "I got a lot more calls to my website all thanks to their Google My Business and SEO strategies." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2 } }
                }}
                className="bg-card border border-border/50 p-8 rounded-2xl relative"
              >
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We have honed our steps to make sure things go fast and work well for each client we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Learn", desc: "We dig deep into your goals, your crowd, and your foes to build a strong base for wins." },
              { step: "02", title: "Plan", desc: "Our team writes a custom web map made just for your growth goals and your funds." },
              { step: "03", title: "Do", desc: "We build, tune, and set up your strong tools using fresh tech and proven steps." },
              { step: "04", title: "Grow", desc: "Constant checks and tweaks make sure your brand stays ahead of the curve and your foes." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } }
                }}
                className="relative p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="text-4xl font-black text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Rule Your Space?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Team up with Sowa Marketing Agency and let us build the web tools your brand needs to thrive.
            </p>
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-gray-200" asChild>
              <Link to="/contact" className="inline-flex items-center">
                Start Your Work Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
