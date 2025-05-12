import { useEffect, useState } from "react";
import NavbarMain from "@/components/NavbarMain";
import HeroMain from "@/components/HeroMain";
import ProjectCard from "@/components/ProjectCard";
import FooterMain from "@/components/FooterMain";
import { Link } from "react-router-dom";
import projects from "@/components/data/projectsdata"; // Importing centralized projects data
import ReactGA from "react-ga4";

const Home = () => {
  const [isHidden, setIsHidden] = useState(false); // State to track arrow visibility

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

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

  const handleButtonClick = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked Button",
      label: "Home Page Button",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />

      <main className="flex-grow">
        <HeroMain />

        <div className="text-center my-8">
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Click Me
          </button>
        </div>

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
              {projects
                .slice() // Create a shallow copy of the array
                .reverse() // Reverse the array to show the latest projects first
                .slice(0, 3) // Take only the first 3 projects
                .map((project, index) => (
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