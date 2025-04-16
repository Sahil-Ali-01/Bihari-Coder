
import { useState, useEffect } from 'react';
import NavbarMain from '@/components/NavbarMain';
import ProjectCard from '@/components/ProjectCard';
import FooterMain from '@/components/FooterMain';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string[]>([]);

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
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce application with product catalog, shopping cart, payment processing, and order management.",
      image: "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=2070&auto=format&fit=crop",
      difficulty: "Advanced" as const,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that fetches and displays weather data from an external API based on user location or search.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      difficulty: "Beginner" as const,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Blog Content Management System",
      description: "A CMS for managing blog content with features like markdown editing, image uploads, and category management.",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop",
      difficulty: "Intermediate" as const,
      tags: ["Next.js", "MongoDB", "Cloudinary"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Social Media Dashboard",
      description: "An advanced project implementing a social media dashboard with real-time analytics, user engagement metrics, and data visualization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      difficulty: "Advanced" as const,
      tags: ["React", "D3.js", "Firebase", "Redux"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ];

  // Filter projects based on search term and difficulty
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = 
      difficultyFilter.length === 0 || 
      difficultyFilter.includes(project.difficulty);
    
    return matchesSearch && matchesDifficulty;
  });

  const toggleDifficulty = (difficulty: string) => {
    if (difficultyFilter.includes(difficulty)) {
      setDifficultyFilter(difficultyFilter.filter(d => d !== difficulty));
    } else {
      setDifficultyFilter([...difficultyFilter, difficulty]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-coder-blue/10 to-coder-purple/10 dark:from-coder-blue/20 dark:to-coder-purple/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              Browse through hands-on projects ranging from beginner to advanced difficulty. Each project includes code, live demo, and detailed explanations.
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
                  placeholder="Search projects..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Badge
                  className={`cursor-pointer ${
                    difficultyFilter.includes('Beginner')
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200'
                  }`}
                  onClick={() => toggleDifficulty('Beginner')}
                >
                  Beginner
                </Badge>
                <Badge
                  className={`cursor-pointer ${
                    difficultyFilter.includes('Intermediate')
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-200'
                  }`}
                  onClick={() => toggleDifficulty('Intermediate')}
                >
                  Intermediate
                </Badge>
                <Badge
                  className={`cursor-pointer ${
                    difficultyFilter.includes('Advanced')
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 hover:bg-purple-200'
                  }`}
                  onClick={() => toggleDifficulty('Advanced')}
                >
                  Advanced
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Projects List */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
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

export default Projects;
