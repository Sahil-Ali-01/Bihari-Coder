import { useEffect, useState } from "react";
import NavbarMain from "@/components/NavbarMain";
import HeroMain from "@/components/HeroMain";
import ProjectCard from "@/components/ProjectCard";
import FooterMain from "@/components/FooterMain";
import { Link } from "react-router-dom";

const Home = () => {
  const [isHidden, setIsHidden] = useState(false); // State to track arrow visibility

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />

      <main className="flex-grow">
        <HeroMain />

        {/* Scroll Down Arrow */}
        <a href="#projects-section">
          <div id="mouse-scroll" className={`mouse-scroll ${isHidden ? "hidden" : ""}`}>
            <div className="mouse">
              <div className="mouse-in"></div>
            </div>
            <div className="arrows">
              <span className="down-arrow-1"></span>
              <span className="down-arrow-2"></span>
              <span className="down-arrow-3"></span>
            </div>
          </div>
        </a>

        {/* Projects Section */}
        <section
          id="projects-section"
          className="py-16 bg-gray-50 dark:bg-gray-800"
        >
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
                <button className="text-coder-purple hover:text-coder-purple/80">
                  View All
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterMain />
    </div>
  );
};

export default Home;