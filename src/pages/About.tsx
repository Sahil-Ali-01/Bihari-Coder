import { useEffect } from "react";
import NavbarMain from "@/components/NavbarMain";
import FooterMain from "@/components/FooterMain";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarMain />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold mb-4">About Bihari Coder</h1>
            <p className="text-lg font-medium text-gray-200">
              Explore a variety of projects ranging from beginner to advanced
              levels. Find inspiration and start building today!
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Bihari Coder, we're on a mission to empower developers of
                  all skill levels to build amazing projects and advance their
                  careers. We believe in learning by doing, and our resources
                  are designed to help you gain practical experience.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Whether you're just starting your coding journey or you're an
                  experienced developer looking to sharpen your skills, we're
                  here to support you with high-quality templates, step-by-step
                  projects, and in-depth tutorials.
                </p>
              </div>

              <div className="md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team collaborating"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-coder-purple/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 16L4 8L20 8L12 16Z" fill="#6E59A5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Quality First
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize quality over quantity. Every template, project,
                  and article we publish undergoes rigorous testing and review
                  to ensure it meets our high standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-coder-blue/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11L12 14L15 11M12 4L12 14"
                      stroke="#0EA5E9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18L20 18"
                      stroke="#0EA5E9"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Practical Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in learning by doing. Our resources are designed to
                  provide hands-on experience and practical skills that you can
                  apply to real-world projects.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-coder-orange/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12H15M9 8H15M9 16H15M5 22H19C20.1046 22 21 21.1046 21 20V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22Z"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Community Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We foster a supportive community where developers can share
                  ideas, ask questions, and collaborate. We believe in the power
                  of learning together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Meet the Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Jane Doe
                </h3>
                <p className="text-coder-purple font-medium mb-4">
                  Founder & Lead Developer
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full-stack developer with 8+ years of experience specializing
                  in React and Node.js.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-coder-purple">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-coder-blue">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-coder-blue">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2134&auto=format&fit=crop"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  John Smith
                </h3>
                <p className="text-coder-purple font-medium mb-4">
                  Content Creator
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Technical writer and educator with a passion for making
                  complex topics accessible to everyone.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-coder-purple">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-coder-blue">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-coder-blue">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop"
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Michael Johnson
                </h3>
                <p className="text-coder-purple font-medium mb-4">
                  UI/UX Designer
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designer with a focus on creating beautiful, intuitive user
                  interfaces for web and mobile applications.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-coder-purple">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-coder-blue">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-coder-blue">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-coder-purple to-coder-blue text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to join our community?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Connect with fellow developers and access our latest resources
            </p>
            <Button
              size="lg"
              className="bg-white text-coder-purple hover:bg-white/90 px-8 py-6 text-lg"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <FooterMain />
    </div>
  );
};

export default About;
