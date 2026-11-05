import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { Menu, X, ChevronDown, MapPin, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const services = [
  { name: "AI Search Engine Optimization", path: "/services/ai-seo" },
  { name: "Voice AI Agents", path: "/services/voice-ai-agents" },
  { name: "Chat AI Agents", path: "/services/chat-ai-agents" },
  { name: "Conversational AI Agents", path: "/services/conversational-ai-agents" },
  { name: "Review Management", path: "/services/review-management" },
  { name: "CRM and Hosting", path: "/services/crm-and-hosting" },
  { name: "Google Business Profile", path: "/services/google-business-profile" },
  { name: "Website Design", path: "/services/website-design" },
  { name: "Logo & Branding", path: "/services/logo-branding" },
  { name: "Public Relations", path: "/services/public-relations" },
  { name: "Press Release", path: "/services/press-release" },
  { name: "Social Media Management", path: "/services/social-media-management" },
  { name: "AI Mass Social Media Posting", path: "/services/ai-mass-social-media-posting" },
  { name: "LinkedIn Ghostwriting", path: "/services/linkedin-ghostwriting" },
  { name: "Email Marketing Campaigns", path: "/services/email-marketing" },
  { name: "Content Assistance", path: "/services/content-assistance" },
  { name: "Ad Management", path: "/services/ad-management" },
  { name: "Search Engine Optimization", path: "/services/seo" },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force dark mode for that sexy 21st.dev feel
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col font-sans">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border/50 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="z-50">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Services <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border/50 rounded-xl shadow-2xl overflow-hidden grid grid-cols-2 p-4 gap-2 animate-in fade-in slide-in-from-top-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="px-4 py-3 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
            <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="/locations" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Locations</Link>
            <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="default" className="rounded-full px-6">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 bg-background z-40 md:hidden flex flex-col h-screen"
            >
              <div className="flex-1 overflow-y-auto pt-24 px-6 pb-20">
                <nav className="flex flex-col gap-4">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight">Home</Link>
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight">About</Link>
                  
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between text-2xl font-bold tracking-tight text-muted-foreground w-full text-left"
                    >
                      Services <ChevronDown className={`w-6 h-6 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20 overflow-hidden mt-2"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="text-base text-muted-foreground hover:text-foreground py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight">Case Studies</Link>
                  <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight">Blog</Link>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold tracking-tight text-primary">Contact Us</Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 flex flex-col w-full pt-16">
        <Suspense fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>

      <footer className="border-t border-border/50 bg-card py-12 mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="mb-4 block">
                <Logo />
              </Link>
              <p className="text-muted-foreground text-sm mb-6">
                High-converting website design, SEO, and AI agents tailored to scale your business.
              </p>
              <div className="text-sm text-muted-foreground">
                <p>131 Chimney Rock Dr</p>
                <p>North Kingstown, RI 02852</p>
                <p className="mt-2">401-219-4207</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/case-studies" className="hover:text-foreground transition-colors">Case Studies</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link to="/locations" className="hover:text-foreground transition-colors">Locations</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/accessibility" className="hover:text-foreground transition-colors">Accessibility Statement</Link></li>
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2">
              <h4 className="font-semibold mb-4">Core Services</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                {services.map(s => (
                  <li key={s.path}><Link to={s.path} className="hover:text-foreground transition-colors">{s.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Sowa Marketing Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
