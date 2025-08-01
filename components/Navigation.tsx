import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Check if we're on the home page (which has dark hero background)
  const isHomePage = window.location.hash === '' || window.location.hash === '#';

  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Company', href: '#company' },
    { name: 'Newsroom', href: '#newsroom' }
  ];

  const handleNavigation = (href: string) => {
    window.location.hash = href.substring(1); // Remove the # prefix
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    // Scroll will be handled by the useEffect in App.tsx
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            onClick={() => handleNavigation("#")}
          >
            <div className="text-white text-xl font-semibold tracking-subtitle">
              PhnyX Lab
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item, index) => (
                <motion.button 
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white/80 hover:text-white transition-colors font-medium tracking-body bg-transparent border-none cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Desktop CTA Button */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button 
              className="bg-white text-black hover:bg-white/90 transition-colors font-semibold tracking-subtitle px-8 py-3 rounded-full"
              onClick={() => handleNavigation("#request-demo")}
            >
              Request a Demo
            </Button>
          </motion.div>

          {/* Mobile: Request Demo + Hamburger Menu */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Request Demo Button */}
            <motion.div
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                size="sm"
                className="bg-white text-black hover:bg-white/90 transition-colors font-semibold tracking-subtitle px-5 py-2.5 text-sm rounded-full"
                onClick={() => handleNavigation("#request-demo")}
              >
                Demo
              </Button>
            </motion.div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left text-white/80 hover:text-white py-3 px-4 text-lg font-medium tracking-body bg-transparent border-none cursor-pointer rounded-lg hover:bg-white/10 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}