import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <SEOHead 
        title="Privacy Policy | Sowa Marketing Agency"
        description="Read the Sowa Marketing Agency Privacy Policy to understand how we collect, use, and protect your personal data while providing top digital marketing services."
        canonical="https://sowaagency.com/privacy-policy"
        ogImage="https://vibe.filesafe.space/1778622835347500334/assets/16814af3-c2d6-4b5b-a61e-f24db430eca0.png"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy - Sowa Marketing Agency",
          "url": "https://sowaagency.com/privacy-policy"
        })}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="mb-12 relative overflow-hidden rounded-2xl border border-border/50">
            <img 
              src="https://vibe.filesafe.space/1778622835347500334/assets/16814af3-c2d6-4b5b-a61e-f24db430eca0.png" 
              alt="Data Security Concept" 
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>
                Welcome to Sowa Marketing Agency. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (sowaagency.com) or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p>We may collect several types of information from and about users of our website, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and business details provided through our contact forms or surveys.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited, collected via cookies and analytics tools like Google Analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Communicate with you, respond to inquiries, and provide customer support.</li>
                <li>Analyze website usage to improve our digital experiences and marketing strategies.</li>
                <li>Send promotional materials and updates (you may opt out at any time).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Disclosure of Your Information</h2>
              <p>
                We do not sell or rent your personal data to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <div className="mb-8 relative overflow-hidden rounded-2xl border border-border/50">
                <img 
                  src="https://vibe.filesafe.space/1778622835347500334/assets/6c60faff-7e0e-4237-8fed-d9c6546f1929.png" 
                  alt="Digital shield over server rack representing data security" 
                  className="w-full aspect-video object-cover"
                />
              </div>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those third-party sites. We encourage you to read the privacy policies of any website you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information. If you wish to exercise any of these rights, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-card border border-border/50 rounded-xl">
                <p className="font-semibold text-foreground">Sowa Marketing Agency</p>
                <p>131 Chimney Rock Dr</p>
                <p>North Kingstown, RI 02852</p>
                <p>Phone: 401-219-4207</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
