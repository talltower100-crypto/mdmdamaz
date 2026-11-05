import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "@leadconnector/vibe-tagger";

function generateSitemap() {
  const blogs: string[] = [];
  try {
    const blogPostsContent = fs.readFileSync(path.resolve(__dirname, './src/data/blogPosts.tsx'), 'utf-8');
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    let match;
    while ((match = slugRegex.exec(blogPostsContent)) !== null) {
      if (!blogs.includes(match[1])) blogs.push(match[1]);
    }
  } catch(e) { console.error("Error reading blogs", e); }

  const services: string[] = [];
  try {
    const servicesContent = fs.readFileSync(path.resolve(__dirname, './src/pages/ServicePage.tsx'), 'utf-8');
    const serviceRegex = /"([^"]+)":\s*\{\s*title:/g;
    let srvMatch;
    while ((srvMatch = serviceRegex.exec(servicesContent)) !== null) {
      if (!services.includes(srvMatch[1])) services.push(srvMatch[1]);
    }
  } catch(e) { console.error("Error reading services", e); }

  const caseStudies: string[] = [];
  try {
    const caseStudiesContent = fs.readFileSync(path.resolve(__dirname, './src/pages/CaseStudies.tsx'), 'utf-8');
    const csRegex = /slug:\s*["']([^"']+)["']/g;
    let csMatch;
    while ((csMatch = csRegex.exec(caseStudiesContent)) !== null) {
      if (!caseStudies.includes(csMatch[1])) caseStudies.push(csMatch[1]);
    }
  } catch(e) { console.error("Error reading case studies", e); }

  const staticPages: string[] = [];
  try {
    const appContent = fs.readFileSync(path.resolve(__dirname, './src/App.tsx'), 'utf-8');
    const routeRegex = /<Route\s+path="([^"]+)"\s+element=/g;
    let routeMatch;
    while ((routeMatch = routeRegex.exec(appContent)) !== null) {
      const p = routeMatch[1];
      if (!p.includes(':') && p !== '*') {
        const cleanPath = p === '/' ? '' : p.replace(/^\//, '');
        if (!staticPages.includes(cleanPath)) staticPages.push(cleanPath);
      }
    }
  } catch(e) { console.error("Error reading routes", e); }

  const domain = "https://sowaagency.com";
  const allUrls: { loc: string, priority: string, changefreq: string }[] = [];

  staticPages.forEach(page => {
    allUrls.push({
      loc: `${domain}${page ? '/' + page : '/'}`,
      priority: page === '' ? '1.0' : '0.8',
      changefreq: page === '' || page === 'blog' ? 'daily' : 'weekly'
    });
  });

  services.forEach(service => {
    allUrls.push({
      loc: `${domain}/services/${service}`,
      priority: '0.9',
      changefreq: 'monthly'
    });
  });

  caseStudies.forEach(study => {
    allUrls.push({
      loc: `${domain}/case-studies/${study}`,
      priority: '0.8',
      changefreq: 'monthly'
    });
  });

  blogs.forEach(blog => {
    allUrls.push({
      loc: `${domain}/blog/${blog}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });

  const outDir = path.resolve(process.cwd(), process.env.NODE_ENV === 'production' ? 'dist' : 'public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  allUrls.forEach(url => {
    xml += `  <url>\n    <loc>${url.loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n`;
  });
  xml += `</urlset>`;
  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);

  let txt = '';
  allUrls.forEach(url => txt += `${url.loc}\n`);
  fs.writeFileSync(path.join(outDir, 'sitemap.txt'), txt);

  let redirectsContent = `/sitemap.xml /sitemap.xml 200\n/sitemap.txt /sitemap.txt 200\n/robots.txt /robots.txt 200\n/* /index.html 200\n`;
  fs.writeFileSync(path.join(outDir, '_redirects'), redirectsContent);
}

// sitemap generated automatically
// removed tsc out generation
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [".modal.host"],
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger({ tailwindConfig: true }),
    {
      name: 'generate-sitemap',
      buildStart() {
        try {
          generateSitemap();
        } catch (e) {
          console.error('Failed to generate sitemaps on start:', e);
        }
      },
      handleHotUpdate({ file }) {
        if (file.includes('blogPosts.tsx') || file.includes('pages/')) {
          try {
            generateSitemap();
          } catch (e) {}
        }
      },
      closeBundle() {
        try {
          generateSitemap();
        } catch (e) {
          console.error('Failed to generate sitemaps:', e);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', 'lucide-react']
        }
      }
    }
  }
}));
