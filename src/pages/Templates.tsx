
import { useState, useEffect } from 'react';
import NavbarMain from '@/components/NavbarMain';
import TemplateCard from '@/components/TemplateCard';
import FooterMain from '@/components/FooterMain';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const Templates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, categories and responsive design.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      tags: ["Next.js", "Tailwind", "Blog"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A kanban-style task management application with drag and drop interface.",
      image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?q=80&w=1974&auto=format&fit=crop",
      tags: ["React", "Redux", "DnD"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Authentication System",
      description: "Complete user authentication system with login, signup, password reset, and profile management.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
      tags: ["Node.js", "Express", "JWT"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(templates.flatMap(template => template.tags)));

  // Filter templates based on search term and selected tags
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = 
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.some(tag => template.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-coder-purple/10 to-coder-blue/10 dark:from-coder-purple/20 dark:to-coder-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Templates</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Discover ready-to-use, high-quality templates to jumpstart your projects. All templates are well-documented and easily customizable.
            </p>
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
                  placeholder="Search templates..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Badge
                    key={tag}
                    className={`cursor-pointer ${
                      selectedTags.includes(tag)
                        ? 'bg-coder-purple text-white'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200'
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Templates Grid */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTemplates.map((template, index) => (
                  <TemplateCard key={index} {...template} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No templates found</h3>
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

export default Templates;
