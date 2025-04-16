import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroMain = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-coder-lightPurple dark:from-gray-900 dark:to-coder-purple/20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-coder-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 -left-10 w-72 h-72 bg-coder-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                <span className="text-coder-purple">Bihari</span>{" "}
                <span className="text-coder-blue">Coder</span>
              </h1>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              Kickstart your journey with{" "}
              <span className="font-semibold text-coder-blue">
                real-world projects
              </span>
              ,
              <span className="font-semibold text-coder-orange">
                {" "}
                stunning templates
              </span>
              , and
              <span className="font-semibold text-coder-purple">
                {" "}
                powerful blogs
              </span>
              .
              <br />
              <br />
              Want to build your own dream project? Let’s make it user-friendly
              and{" "}
              <span className="font-semibold text-coder-purple">awesome</span>
              <br />
              <br />
              <a
                href="/contact"
                className="text-coder-blue underline hover:text-coder-purple"
              >
                {" "}
                contact me
              </a>{" "}
              anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-10">
              <Button className="bg-coder-orange hover:bg-coder-orange/90 text-white font-medium py-2 px-6 rounded-md text-lg">
                <Link to="/projects" className="flex items-center">
                  Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-coder-purple text-coder-purple hover:bg-coder-purple/10 font-medium py-2 px-6 rounded-md text-lg"
              >
                <a
                  href="https://sahil-portfolio-iota.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Portfolio
                </a>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-80 h-80 animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-coder-blue/80 to-coder-purple/80 shadow-xl transform scale-110 animate-spin-slow"></div>
                <div className="absolute top-4 left-0 w-full h-full p-6">
                  <img
                    src="/images/m-pic.jpg"
                    alt="Preview Banner"
                    className="w-60 h-60 rounded-full shadow-lg mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
