import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavbarMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMenuOpen(false); // also close mobile menu if open
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md dark:bg-coder-darkgray/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" onClick={handleHomeClick} className="flex items-center">
              <span className="text-coder-blue font-bold text-2xl">&lt;/</span>
              <span className="text-coder-purple font-bold text-2xl">Bihari</span>
              <span className="text-coder-blue font-bold text-2xl">Coder</span>
              <span className="text-coder-purple font-bold text-2xl">&gt;</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              onClick={handleHomeClick}
              className="text-gray-600 hover:text-coder-purple font-medium flex items-center"
            >
              <Home size={18} className="mr-1" />
              Home
            </a>
            <Link to="/projects" className="text-gray-600 hover:text-coder-purple font-medium">
              Projects
            </Link>
            <Link to="/templates" className="text-gray-600 hover:text-coder-purple font-medium">
              Templates
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-coder-purple font-medium">
              Blog
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-coder-purple font-medium">
              About
            </Link>
            <Link to="/contact">
              <Button className="bg-coder-orange hover:bg-coder-orange/90 text-white">
                Contact
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-coder-purple"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white dark:bg-coder-darkgray shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1 sm:px-3 animate-fade-in">
            <a
              href="/"
              onClick={handleHomeClick}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coder-purple hover:bg-gray-50 flex items-center"
            >
              <Home size={18} className="mr-1" />
              Home
            </a>
            <Link
              to="/projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coder-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/templates"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coder-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Templates
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coder-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-coder-purple hover:bg-gray-50"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-coder-orange text-white text-center"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
