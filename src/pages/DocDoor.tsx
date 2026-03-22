import { Link } from "react-router-dom";
import { Home, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DocDoor = () => {
  const features = [
    "Expert physiotherapist at your doorstep",
    "Tailored treatment plans in the comfort of your home",
    "Post-surgery rehabilitation and elderly care",
    "All portable physiotherapy equipment brought to you",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-clinic-primary to-teal-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-clinic-secondary font-medium tracking-wide">
              Introducing Doc.Door
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Premium Physiotherapy <br />
              <span className="text-clinic-secondary">At Your Doorstep</span>
            </h1>
            <p className="text-lg text-gray-200">
              Skip the clinic visit. Our dedicated Doc.Door service brings expert care, specialized equipment, and personalized recovery plans directly to your home.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-clinic-secondary hover:bg-yellow-500 text-clinic-dark text-lg px-8 py-6 rounded-full shadow-lg">
                <Link to="/book-session?type=home">Book Doc.Door Visit</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-2xl relative">
            <img 
              src="/homevisit.png" 
              alt="Home Physiotherapy"
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Doc.Door Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Doc.Door?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand that traveling to a clinic can be challenging, especially when you are in pain or recovering from surgery. Doc.Door makes recovery easier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-clinic-accent/30 p-8 rounded-2xl border border-clinic-accent/50 text-center hover:shadow-lg transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-clinic-primary">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded CTA */}
      <section className="py-24 bg-clinic-accent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Home size={64} className="mx-auto text-clinic-primary mb-6" />
          <h2 className="text-4xl font-bold text-clinic-primary mb-6">Ready for your home session?</h2>
          <Button asChild size="lg" className="bg-clinic-primary hover:bg-clinic-dark text-white rounded-full px-8 py-6 text-lg">
            <Link to="/book-session?type=home" className="flex items-center gap-2">
              Schedule Doc.Door Appointment <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocDoor;
