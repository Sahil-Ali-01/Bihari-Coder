
import { useEffect } from 'react';
import NavbarMain from '@/components/NavbarMain';
import HeroMain from '@/components/HeroMain';
import TemplateCard from '@/components/TemplateCard';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import FooterMain from '@/components/FooterMain';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const templates = [
    {
      title: "Modern Dashboard",
      description: "A responsive admin dashboard template with dark/light mode built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Tailwind", "Dashboard"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "E-commerce Starter",
      description: "A complete e-commerce template with product listings, cart, and checkout flow.",
      image: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
      tags: ["Next.js", "Stripe", "MongoDB"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Portfolio Template",
      description: "A clean, modern portfolio template for developers and designers showcasing their work.",
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1974&auto=format&fit=crop",
      tags: ["React", "Framer Motion", "Portfolio"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ];

  const projects = [
    {
      title: "Task Manager API",
      description: "A RESTful API for task management with user authentication and task CRUD operations. Perfect for beginners to understand backend development.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2080&auto=format&fit=crop",
      difficulty: "Beginner" as const,
      tags: ["Node.js", "Express", "MongoDB"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Real-time Chat Application",
      description: "An intermediate-level project featuring real-time messaging using Socket.io with message history and user presence indicators.",
      image: "https://images.unsplash.com/photo-1604537466158-719b1972feb8?q=80&w=2069&auto=format&fit=crop",
      difficulty: "Intermediate" as const,
      tags: ["React", "Socket.io", "Node.js"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ];

  const blogs = [
    {
      title: "How to Build a RESTful API with Node.js and Express",
      excerpt: "Learn how to create a robust RESTful API from scratch using Node.js and Express with proper error handling and authentication.",
      date: "April 5, 2025",
      readTime: "8 min read",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      slug: "build-restful-api-nodejs-express"
    },
    {
      title: "Mastering React Hooks: useEffect Deep Dive",
      excerpt: "An in-depth exploration of the useEffect hook, covering dependencies, cleanup functions, and common pitfalls to avoid.",
      date: "March 28, 2025",
      readTime: "10 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      slug: "mastering-react-hooks-useeffect"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />
      
      <main className="flex-grow">
        <HeroMain />

        {/* Projects Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">From beginner to advanced: hands-on coding projects</p>
              </div>
              <Link to="/projects">
                <Button variant="ghost" className="text-coder-purple hover:text-coder-purple/80">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Templates Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Templates</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Ready-to-use UI templates to kickstart your projects</p>
              </div>
              <Link to="/templates">
                <Button variant="ghost" className="text-coder-purple hover:text-coder-purple/80">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <TemplateCard key={index} {...template} />
              ))}
            </div>
          </div>
        </section>
        
        
        {/* Blogs Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Blogs</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">In-depth articles and tutorials for developers</p>
              </div>
              <Link to="/blog">
                <Button variant="ghost" className="text-coder-purple hover:text-coder-purple/80">
                  View All <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-coder-purple to-coder-blue text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take your development skills to the next level?</h2>
            <p className="text-xl mb-8 text-white/80">Join our community of developers building amazing projects</p>
            <Button size="lg" className="bg-white text-coder-purple hover:bg-white/90 px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      
      <FooterMain />
    </div>
  );
};

export default Home;
