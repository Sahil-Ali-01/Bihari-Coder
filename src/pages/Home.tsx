import { useEffect } from "react";
import NavbarMain from "@/components/NavbarMain";
import HeroMain from "@/components/HeroMain";
import TemplateCard from "@/components/TemplateCard";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import FooterMain from "@/components/FooterMain";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const templates = [
    {
      title: "Modern Dashboard",
      description:
        "A responsive admin dashboard template with dark/light mode built with React and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Tailwind", "Dashboard"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "E-commerce Starter",
      description:
        "A complete e-commerce template with product listings, cart, and checkout flow.",
      image:
        "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop",
      tags: ["Next.js", "Stripe", "MongoDB"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Portfolio Template",
      description:
        "A clean, modern portfolio template for developers and designers showcasing their work.",
      image:
        "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1974&auto=format&fit=crop",
      tags: ["React", "Framer Motion", "Portfolio"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  const projects = [
    {
      title: "Task Manager API",
      description:
        "A RESTful API for task management with user authentication and task CRUD operations. Perfect for beginners to understand backend development.",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2080&auto=format&fit=crop",
      difficulty: "Beginner" as const,
      tags: ["Node.js", "Express", "MongoDB"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "An intermediate-level project featuring real-time messaging using Socket.io with message history and user presence indicators.",
      image:
        "https://images.unsplash.com/photo-1604537466158-719b1972feb8?q=80&w=2069&auto=format&fit=crop",
      difficulty: "Intermediate" as const,
      tags: ["React", "Socket.io", "Node.js"],
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  const blogs = [
    {
      title: "How to Build a RESTful API with Node.js and Express",
      excerpt:
        "Learn how to create a robust RESTful API from scratch using Node.js and Express with proper error handling and authentication.",
      date: "April 5, 2025",
      readTime: "8 min read",
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      slug: "build-restful-api-nodejs-express",
    },
    {
      title: "Mastering React Hooks: useEffect Deep Dive",
      excerpt:
        "An in-depth exploration of the useEffect hook, covering dependencies, cleanup functions, and common pitfalls to avoid.",
      date: "March 28, 2025",
      readTime: "10 min read",
      category: "React",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      slug: "mastering-react-hooks-useeffect",
    },
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Featured Projects
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  From beginner to advanced: hands-on coding projects
                </p>
              </div>
              <Link to="/projects">
                <Button
                  variant="ghost"
                  className="text-coder-purple hover:text-coder-purple/80"
                >
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Featured Templates
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Ready-to-use UI templates to kickstart your projects
                </p>
              </div>
              <Link to="/templates">
                <Button
                  variant="ghost"
                  className="text-coder-purple hover:text-coder-purple/80"
                >
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
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Latest Blogs
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  In-depth articles and tutorials for developers
                </p>
              </div>
              <Link to="/blog">
                <Button
                  variant="ghost"
                  className="text-coder-purple hover:text-coder-purple/80"
                >
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
        <section className="py-20 bg-gray-500 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to take your development skills to the next level?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Join our community of developers building amazing projects
            </p>
            <div className="flex space-x-4 flex items-center justify-center">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-coder-purple hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-1.09-.818-3.635-1.184-7.615-1.184s-6.525.366-7.615 1.184c-1.09.818-1.385 2.59-1.385 5.816v6c0 3.226.295 4.998 1.385 5.816 1.09.818 3.635 1.184 7.615 1.184s6.525-.366 7.615-1.184c1.09-.818 1.385-2.59 1.385-5.816v-6c0-3.226-.295-4.998-1.385-5.816zm-10.615 12.816v-8l6 4-6 4z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-coder-purple hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-coder-orange hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterMain />
    </div>
  );
};

export default Home;
