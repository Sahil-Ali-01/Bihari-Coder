import { useState, useEffect } from "react";
import NavbarMain from "@/components/NavbarMain";
import ProjectCard from "@/components/ProjectCard";
import FooterMain from "@/components/FooterMain";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    {
      name: "HTML + CSS Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      name: "HTML + CSS + JavaScript Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      name: "MERN Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },
    {
      name: "Full Stack Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919831.png",
    },
    {
      name: "Portfolio Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      name: "Java Full Stack Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
    {
      name: "DSA + Java Projects",
      icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    },
  ];

  const projects = [
    {
      title: "Task Manager API",
      description:
        "A RESTful API for task management with user authentication and task CRUD operations.",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2080&auto=format&fit=crop",
      difficulty: "Beginner" as const,
      tags: ["Node.js", "Express", "MongoDB"],
      category: "MERN Projects",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Real-time messaging using Socket.io with user presence indicators.",
      image:
        "https://images.unsplash.com/photo-1604537466158-719b1972feb8?q=80&w=2069&auto=format&fit=crop",
      difficulty: "Intermediate" as const,
      tags: ["React", "Socket.io", "Node.js"],
      category: "MERN Projects",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce app with shopping cart and payment processing.",
      image:
        "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?q=80&w=2070&auto=format&fit=crop",
      difficulty: "Advanced" as const,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack Projects",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description: "Displays weather from an external API based on location.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
      difficulty: "Beginner" as const,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      category: "HTML + CSS + JavaScript Projects",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Blog CMS",
      description: "A blog CMS with markdown editing and image uploads.",
      image:
        "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop",
      difficulty: "Intermediate" as const,
      tags: ["Next.js", "MongoDB", "Cloudinary"],
      category: "Full Stack Projects",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Social dashboard with real-time analytics and visualization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      difficulty: "Advanced" as const,
      tags: ["React", "D3.js", "Firebase", "Redux"],
      category: "Portfolio Projects",
      demoLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesDifficulty =
      difficultyFilter.length === 0 ||
      difficultyFilter.includes(project.difficulty);

    const matchesCategory =
      selectedCategory === "" || project.category === selectedCategory;

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const toggleDifficulty = (difficulty: string) => {
    setDifficultyFilter((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold mb-4">Projects</h1>
          </div>
        </div>

        {/* Category Cards */}
        <div className="bg-white dark:bg-gray-900 py-6 border-b dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`relative cursor-pointer rounded-lg border px-6 py-8 flex flex-col items-center justify-center text-center transition-all shadow-sm hover:shadow-lg hover:scale-105 ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                }`}
              >
                {/* Before pseudo-element */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 hover:opacity-20"></div>

                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-12 h-12 mb-4 relative z-10"
                />
                <h3 className="text-lg font-semibold relative z-10">
                  {category.name}
                </h3>

                {/* After pseudo-element */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-500 transition-all duration-300 hover:w-10"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => setSelectedCategory("")}
              className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Show All Projects
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-64">
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
                  difficultyFilter.includes("Beginner")
                    ? "bg-green-600 text-white"
                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 hover:bg-green-200"
                }`}
                onClick={() => toggleDifficulty("Beginner")}
              >
                Beginner
              </Badge>
              <Badge
                className={`cursor-pointer ${
                  difficultyFilter.includes("Intermediate")
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-200"
                }`}
                onClick={() => toggleDifficulty("Intermediate")}
              >
                Intermediate
              </Badge>
              <Badge
                className={`cursor-pointer ${
                  difficultyFilter.includes("Advanced")
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 hover:bg-purple-200"
                }`}
                onClick={() => toggleDifficulty("Advanced")}
              >
                Advanced
              </Badge>
            </div>
          </div>
        </div>

        {/* Project Cards */}
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
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
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
