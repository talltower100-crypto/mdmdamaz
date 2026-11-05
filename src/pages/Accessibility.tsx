import { SEOHead } from "@/components/SEOHead";

export default function Accessibility() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-16">
      <SEOHead 
        title="Accessibility Statement | Sowa Marketing Agency"
        description="Read Sowa Marketing Agency's commitment to digital accessibility and our efforts to ensure an inclusive, user-friendly experience for all website visitors."
        canonical="https://sowaagency.com/accessibility"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Accessibility Statement - Sowa Marketing Agency",
          "url": "https://sowaagency.com/accessibility"
        })}
      />
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Accessibility Statement</h1>
          <p className="text-xl text-muted-foreground">
            Our commitment to an inclusive digital experience.
          </p>
        </div>

        <div className="mb-12 relative overflow-hidden rounded-2xl border border-border/50">
          <img 
            src="https://vibe.filesafe.space/1778622835347500334/assets/900cc137-9262-4613-a9f2-6c38ca3269b7.png" 
            alt="Digital Accessibility and Inclusion" 
            className="w-full aspect-video object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">General Commitment</h2>
          <p className="mb-6">
            Sowa Marketing Agency is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all of our users.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Conformance Status</h2>
          <p className="mb-6">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Sowa Marketing Agency strives to be conformant with WCAG 2.1 level AA.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Feedback</h2>
          <p className="mb-6">
            We welcome your feedback on the accessibility of Sowa Marketing Agency. Please let us know if you encounter accessibility barriers on our website. We aim to respond to accessibility feedback within 2 business days.
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Phone: 401-219-4207</li>
            <li>E-mail: talltower100@gmail.com</li>
            <li>Visitor Address: 131 Chimney Rock Dr, North Kingstown, RI 02852</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Technical Specifications</h2>
          <p className="mb-6">
            Accessibility of Sowa Marketing Agency relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p className="mb-6">
            These technologies are relied upon for conformance with the accessibility standards used.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Assessment Approach</h2>
          <p className="mb-6">
            Sowa Marketing Agency assessed the accessibility of our website by self-evaluation and continuous monitoring using automated testing tools and manual audits.
          </p>
        </div>
      </div>
    </div>
  );
}
