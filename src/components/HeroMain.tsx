import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroMain = () => {
  const [email, setEmail] = useState(""); // State to store the email
  const [error, setError] = useState(""); // State to store error messages

  const handleSubscribe = () => {
    // Regular expression to validate email format and ensure it ends with @gmail.com
    const emailRegex = /^[^\s@]+@gmail\.com$/;

    if (!email) {
      setError("Please enter an email address.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address ending with @gmail.com.");
      return;
    }

    // Replace YOUR_CHANNEL_ID with your actual YouTube channel ID
    const youtubeSubscribeLink =
      "https://www.youtube.com/@biharicoder01?sub_confirmation=1";
    window.open(youtubeSubscribeLink, "_blank");
    setError(""); // Clear the error after successful subscription
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-coder-lightPurple dark:from-gray-900 dark:to-coder-purple/20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-coder-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 -left-10 w-72 h-72 bg-coder-blue/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-5 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-coder-purple">Bihari</span>{" "}
              <span className="text-coder-blue">Coder</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl text-justify">
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
              <span className="font-semibold text-coder-purple">awesome.</span>
            </p>

            <div>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-6 mb-4 text-justify">
                🎀Subscribe to get the latest
                <span className="font-semibold text-coder-orange">
                  {" "}
                  Projects
                </span>
                , and
                <span className="font-semibold text-coder-orange">
                  {" "}
                  Tutorials.🎀
                </span>
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission behavior
                  handleSubscribe(); // Call the subscription handler
                }}
                className="flex flex-col gap-2 md:justify-start"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md py-2 px-4 w-full max-w-md text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-coder-blue focus:border-transparent"
                  />
                  <Button
                    type="submit" // Set the button type to "submit"
                    className="bg-coder-blue hover:bg-coder-blue/90"
                  >
                    Subscribe
                  </Button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-10">
              <Button
                variant="outline"
                className="border-coder-purple text-coder-purple hover:bg-coder-purple/10 font-medium py-2 px-6 rounded-md text-lg"
              >
                <a
                  href="https://sahil-portfolio-iota.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Portfolio
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
