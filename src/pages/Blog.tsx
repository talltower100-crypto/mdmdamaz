import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, User, Search } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { useState, useMemo } from "react";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const allPosts = Object.values(blogPosts);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return allPosts;
    }
    const query = searchQuery.toLowerCase();
    
    return allPosts.filter(post => 
      post.title.toLowerCase().includes(query) || 
      (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
      post.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allPosts]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEOHead 
        title="Digital Marketing, SEO & AI Blog | Sowa Marketing Agency"
        description="Read the latest insights on SEO, Website Design, AI Agents, and digital marketing strategies from the experts at Sowa Marketing Agency to scale your business."
        canonical="https://sowaagency.com/blog"
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Sowa Marketing Agency Blog",
          "url": "https://sowaagency.com/blog"
        })}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Master-Class <span className="text-primary">Marketing Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert strategies on SEO, AI Engine Optimization (AEO), and high-converting design to scale your business in 2026.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto mb-16 relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search blogs by title, category, or keyword..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-12 py-6 rounded-full bg-card border-border/50 text-lg shadow-sm focus-visible:ring-primary"
            />
          </div>
          {searchQuery && (
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Found {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-3xl border border-border/50">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-2">No blogs found</h3>
            <p className="text-muted-foreground">
              We couldn't find any articles matching "{searchQuery}". Try a different keyword.
            </p>
            <Button 
              variant="outline" 
              className="mt-6 rounded-full"
              onClick={() => {
                setSearchQuery("");
              }}
            >
              Clear Search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredPosts.map((post, index) => (
            <motion.div
              key={post.metadata.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col h-full"
            >
              <Link to={`/blog/${post.metadata.slug}`} className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={`Blog post: ${post.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-background/90 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {post.metadata.metaDescription}
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="p-0 h-auto font-bold group/btn" asChild>
                    <Link to={`/blog/${post.metadata.slug}`} className="flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}
