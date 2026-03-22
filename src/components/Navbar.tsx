
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doc.Door", path: "/doc-door" },
    { name: "Book Session", path: "/book-session" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "glass py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src="/logo2.png" alt="Dr.Riddhika's Physiotherapy Clinic Logo" className="w-full h-full object-contain drop-shadow-md scale-110" />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-bold text-lg leading-tight transition-colors", isScrolled ? "text-clinic-dark" : "text-clinic-primary md:text-white")}>
                Dr.Riddhika's
              </span>
              <span className={cn("text-xs transition-colors font-medium", isScrolled ? "text-clinic-text" : "text-clinic-accent/90 md:text-gray-100")}>
                Physiotherapy Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-clinic-secondary relative group",
                  location.pathname === link.path
                    ? "text-clinic-secondary"
                    : (isScrolled ? "text-gray-700" : "text-white/90")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-clinic-secondary transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )} />
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className="bg-clinic-secondary hover:bg-yellow-500 text-clinic-dark font-semibold rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              8252482702
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-clinic-primary p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? "text-clinic-primary" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-2xl font-semibold transition-colors hover:text-clinic-primary",
                  location.pathname === link.path ? "text-clinic-primary" : "text-gray-800"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-4 bg-clinic-primary text-white rounded-full px-8 py-6 text-lg shadow-xl">
              <Phone className="w-5 h-5 mr-2" />
              8252482702
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
