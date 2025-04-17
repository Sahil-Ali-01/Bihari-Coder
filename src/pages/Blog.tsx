
import { useState, useEffect } from 'react';
import NavbarMain from '@/components/NavbarMain';
import BlogCard from '@/components/BlogCard';
import FooterMain from '@/components/FooterMain';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

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
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox with practical examples to help you choose the right layout system for your projects.",
      date: "March 15, 2025",
      readTime: "6 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&w=2066&auto=format&fit=crop",
      slug: "css-grid-vs-flexbox"
    },
    {
      title: "Authentication Best Practices for Web Applications",
      excerpt: "Learn the security best practices for implementing user authentication in your web applications, including JWT, OAuth, and session management.",
      date: "March 5, 2025",
      readTime: "12 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      slug: "authentication-best-practices"
    },
    {
      title: "Getting Started with TypeScript in React Projects",
      excerpt: "A beginner-friendly guide to setting up and using TypeScript in your React projects for better code quality and developer experience.",
      date: "February 20, 2025",
      readTime: "9 min read",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=80&w=1770&auto=format&fit=crop",
      slug: "typescript-react-getting-started"
    },
    {
      title: "Responsive Design Patterns for Modern Web Applications",
      excerpt: "Explore effective design patterns and techniques for building responsive web applications that work seamlessly across all device sizes.",
      date: "February 10, 2025",
      readTime: "7 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1551522355-b5c85a8891f9?q=80&w=2070&auto=format&fit=crop",
      slug: "responsive-design-patterns"
    }
  ];

  // Get all unique categories
  const categories = Array.from(new Set(blogs.map(blog => blog.category)));

  // Filter blogs based on search term and category
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = 
      categoryFilter.length === 0 || 
      categoryFilter.includes(blog.category);
    
    return matchesSearch && matchesCategory;
  });

  const toggleCategory = (category: string) => {
    if (categoryFilter.includes(category)) {
      setCategoryFilter(categoryFilter.filter(c => c !== category));
    } else {
      setCategoryFilter([...categoryFilter, category]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />
      
      <main className="flex-grow">
       {/* Header */}
       <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Blogs</h1>
          </div>
        </div>
        
        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="md:flex justify-between items-center">
              <div className="relative w-full md:w-64 mb-4 md:mb-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge
                    key={category}
                    className={`cursor-pointer ${
                      categoryFilter.includes(category)
                        ? 'bg-coder-blue text-white'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200'
                    }`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <BlogCard key={index} {...blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <FooterMain />
    </div>
  );
};

export default Blog;
