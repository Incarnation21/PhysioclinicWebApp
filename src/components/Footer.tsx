
import { Facebook, Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-clinic-primary to-teal-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Clinic Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Dr. Riddhika's</h3>
              <p className="text-clinic-secondary font-medium tracking-wide text-sm opacity-90">PHYSIOTHERAPY CLINIC</p>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Providing expert physiotherapeutic care to restore mobility and improve quality of life.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="bg-white/10 p-2 rounded-full text-clinic-secondary group-hover:bg-clinic-secondary group-hover:text-clinic-primary transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">J-39, PC Colony, Kankarbagh,<br />Patna, Bihar 800020, India</p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="bg-white/10 p-2 rounded-full text-clinic-secondary group-hover:bg-clinic-secondary group-hover:text-clinic-primary transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="text-gray-200 text-sm">8252482702</p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors">
                <div className="bg-white/10 p-2 rounded-full text-clinic-secondary group-hover:bg-clinic-secondary group-hover:text-clinic-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-gray-200 text-sm">contact@drriddhikaphysio.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-clinic-secondary rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Book a Session", path: "/book-session" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-300 hover:text-clinic-secondary transition-all hover:translate-x-1"
                  >
                    <span className="h-1 w-1 rounded-full bg-clinic-secondary"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-clinic-secondary rounded-full"></span>
                Opening Hours
              </h3>
              <div className="space-y-3 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Mon - Fri</span>
                  <span className="font-semibold text-clinic-secondary">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-300">Saturday</span>
                  <span className="font-semibold text-clinic-secondary">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="font-semibold text-clinic-secondary">10:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/786795397847596/" },
                { Icon: Instagram, url: "https://www.instagram.com/dr_riddhika_physio_clinic?igsh=emE2YnczZ2s3NTVl" }
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-clinic-secondary hover:text-clinic-primary transition-all hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dr.Riddhika's Physiotherapy Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <Button
              size="icon"
              className="rounded-full bg-clinic-secondary hover:bg-yellow-500 text-clinic-dark shadow-lg"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
