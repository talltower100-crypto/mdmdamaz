import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778622835347500334/assets/6eac3e48-0e79-4bfc-a874-e4abb9bf8095.png")' }}
      ></div>
      <SEOHead 
        title="Page Not Found | Sowa Marketing Agency"
        description="Oops! The page you are looking for could not be found. Return to Sowa Marketing Agency's homepage to explore our web design, SEO, and AI automation services."
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "404 Not Found - Sowa Marketing Agency"
        })}
      />
      <div className="text-center relative z-10 bg-background/80 backdrop-blur-md p-12 rounded-3xl border border-border/50 shadow-2xl">
        <h1 className="mb-4 text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">404</h1>
        <p className="mb-8 text-xl md:text-2xl font-medium text-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-full">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
