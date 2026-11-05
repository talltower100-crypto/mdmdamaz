import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { MapPin } from "lucide-react";

const locations = [
  "Albuquerque, NM", "Atlanta, GA", "Austin, TX", "Baltimore, MD", "Boston, MA", "Charlotte, NC",
  "Chicago, IL", "Columbus, OH", "Dallas, TX", "Denver, CO", "Detroit, MI",
  "El Paso, TX", "Fort Worth, TX", "Fresno, CA", "Honolulu, HI", "Houston, TX",
  "Indianapolis, IN", "Jacksonville, FL", "Kansas City, MO", "Las Vegas, NV", "Los Altos, CA", 
  "Los Altos Hills, CA", "Los Angeles, CA", "Louisville, KY", "Memphis, TN", 
  "Miami, FL", "Milwaukee, WI", "Nashville, TN", "New York, NY", "Newport Beach, CA", 
  "North Kingstown, RI", "Oklahoma City, OK", "Philadelphia, PA", "Phoenix, AZ", 
  "Portland, OR", "Providence, RI", "Sacramento, CA", "San Antonio, TX", "San Diego, CA", 
  "San Francisco, CA", "San Jose, CA", "Seattle, WA", "Tucson, AZ", "Washington, DC", "Mesa, AZ"
];

export default function Locations() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-20">
      <SEOHead 
        title="Service Locations | Sowa Marketing Agency - US Digital Marketing"
        description="View all the locations where Sowa Marketing Agency provides top-tier digital marketing, SEO, and web design services across the United States to grow brands."
        canonical="https://sowaagency.com/locations"
        ogImage="https://vibe.filesafe.space/1778622835347500334/assets/71a8dced-27cc-4c72-a93b-aa845ef00c57.png"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sowa Marketing Agency Locations",
          "url": "https://sowaagency.com/locations"
        })}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Service Locations</h1>
            <p className="text-xl text-muted-foreground mb-8">
              While headquartered in Rhode Island, we provide enterprise-level digital marketing, SEO, and AI automation to businesses across the nation.
            </p>
            <div className="mt-10 relative overflow-hidden rounded-2xl border border-border/50">
              <img 
                src="https://vibe.filesafe.space/1778622835347500334/assets/71a8dced-27cc-4c72-a93b-aa845ef00c57.png" 
                alt="Map of the United States with glowing nodes indicating nationwide digital marketing service locations" 
                className="w-full aspect-video object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="bg-card border border-border/50 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{location}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
