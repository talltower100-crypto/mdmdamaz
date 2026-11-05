import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { getPostBySlug } from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <SEOHead title="Post Not Found" description="The blog post you're looking for could not be found." />
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  const getOptimizedDescription = (excerpt: string) => {
    let desc = excerpt || "Read the latest insights from Sowa Marketing Agency.";
    if (desc.length < 150) {
      desc += " Discover expert strategies and actionable tips to scale your business and dominate your market today.";
    }
    return desc.length > 155 ? desc.substring(0, 155) + "..." : desc;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      <SEOHead
        title={post.title.length > 60 ? post.title.substring(0, 57) + "..." : post.title}
        description={getOptimizedDescription(post.excerpt)}
        canonical={`https://sowaagency.com/blog/${post.metadata.slug}`}
        ogImage={post.image}
        schemaJson={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sowa Marketing Agency",
            "logo": {
              "@type": "ImageObject",
              "url": "https://sowaagency.com/favicon.svg"
            }
          },
          "datePublished": post.date,
          "description": post.excerpt
        })}
      />
      {/* Article Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" /> {post.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="w-4 h-4 mr-1" /> {post.author}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" /> 15 min read
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
        >
          <img 
            src={post.image} 
            alt={`${post.title} - Sowa Marketing Agency Blog`} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-12 mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-3xl"
            >
              <div className="blog-content">
                {post.content}
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-white/10 hover:bg-white/5">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-white/10 hover:bg-white/5">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-white/10 hover:bg-white/5">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-white/10 hover:bg-white/5">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-12">
              <div className="p-6 rounded-2xl bg-card border border-border/50 sticky top-32">
                <h3 className="text-xl font-bold mb-4">Ready to Scale?</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Join 1,500+ clients who have transformed their business with Sowa Marketing Agency.
                </p>
                <Button className="w-full rounded-full bg-white text-black hover:bg-gray-200 mb-4" asChild>
                  <Link to="/contact">
                    Book Free Audit
                  </Link>
                </Button>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                  No obligation • 15 minute call
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-bold">AEO Questions Answered</h3>
                <div className="space-y-3">
                  {post.metadata?.aeoTargetQuestions?.map((q: string, i: number) => (
                    <div key={i} className="p-3 rounded-xl bg-muted/30 text-xs text-muted-foreground border border-white/5">
                      {q}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
