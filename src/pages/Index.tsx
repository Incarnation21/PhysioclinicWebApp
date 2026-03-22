import { Link } from "react-router-dom";
import { Home as HomeIcon, User, Calendar, Activity, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import ServiceCard from "@/components/ServiceCard";
import Testimonial from "@/components/Testimonial";
import SessionOption from "@/components/SessionOption";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

const Index = () => {
  // Sample service data
  const services = [
    {
      title: "Orthopedic Physiotherapy",
      description: "Specialized treatment for muscle, bone, and joint conditions to improve mobility and reduce pain.",
      icon: <Activity size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },

    {
      title: "Sports Physiotherapy",
      description: "Treatment and prevention of injuries related to sports and exercise to enhance performance.",
      icon: <Activity size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },

    {
      title: "Post-Operative Rehabilitation",
      description: "Customized recovery programs after surgery to restore function and mobility.",
      icon: <Activity size={24} />,
      imageUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "I had severe back pain for years. After just 10 sessions with Dr. Riddhika, I'm almost pain-free and have learned exercises to prevent recurrence.",
      condition: "Chronic Back Pain"
    },
    {
      name: "Meera Singh",
      text: "Post knee surgery, I was struggling to walk. The rehabilitation program designed by Dr. Riddhika helped me regain full mobility faster than expected.",
      condition: "Post Knee Surgery"
    },
    {
      name: "Amit Sharma",
      text: "The Doc.Door service was excellent. Professional treatment in the comfort of my home. Highly recommend for elderly patients.",
      condition: "Parkinson's Disease"
    },
    {
      name: "Priya Joshi",
      text: "Dr. Riddhika's approach is holistic and patient-centered. The exercises helped me recover from my shoulder injury and improve my overall posture.",
      condition: "Frozen Shoulder"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-clinic-primary to-teal-800 text-white overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-clinic-secondary font-medium text-sm tracking-wide">
                Welcome to Premium Care
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Restoring Health, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-secondary to-yellow-200">
                  Revitalizing Life
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
                Experience world-class physiotherapy with Dr. Riddhika. Personalized rehabilitation plans designed to help you recover faster and live better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-clinic-secondary hover:bg-yellow-500 text-clinic-dark font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105">
                  <Link to="/book-session">Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block relative perspective-1000"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5 backdrop-blur-sm transform rotate-y-12 transition-transform duration-500 hover:rotate-0">
                <img
                  src="/lovable-uploads/7cd4e83a-2083-4a21-847d-a34695d3827d.png"
                  alt="Physiotherapy Session"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-float border border-white/40">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">100% Success Rate</p>
                    <p className="text-sm text-gray-500">In patient satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-clinic-primary">Start Your Recovery Today</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Take the first step towards a pain-free life. Fill out the form, and our team will get in touch with you shortly to schedule your personalized assessment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  "Personalized treatment plans",
                  "State-of-the-art equipment",
                  "Convenient scheduling options",
                  "Doc.Door home visit services available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-clinic-accent/30 rounded-xl border border-clinic-accent/50 hover:bg-clinic-accent/50 transition-colors">
                    <div className="h-8 w-8 rounded-full bg-clinic-secondary/20 flex items-center justify-center text-clinic-primary">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-1 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
            >
              <AppointmentForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-clinic-accent/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-clinic-secondary/20 rounded-2xl blur-lg transition-all group-hover:bg-clinic-secondary/30"></div>
                <img
                  src="/clinic-exterior.png.jpeg"
                  alt="Dr.Riddhika's Physiotherapy Clinic Exterior"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
                />
              </div>
            </motion.div>

            <div className="space-y-6">
              <span className="text-clinic-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
              <h2 className="text-4xl font-bold text-gray-900">World-Class Facility in Patna</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dr.Riddhika's Physiotherapy Clinic is a state-of-the-art physiotherapy facility located at J-39, PC Colony, Kankarbagh, Patna, Bihar 800020, India. Our clinic is equipped with modern rehabilitation equipment to provide comprehensive care for all physiotherapy needs.
              </p>
              <div className="pt-4">
                <Button asChild className="bg-clinic-primary hover:bg-clinic-dark text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More About Us <ArrowRight size={20} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-clinic-secondary font-bold tracking-wider uppercase text-sm">What We Do</span>
            <h2 className="text-4xl font-bold text-clinic-dark">Our Specialized Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer a wide range of physiotherapy services to address various conditions and help you on your path to recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                  <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-gray-100">
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="w-12 h-12 bg-clinic-accent rounded-full flex items-center justify-center text-clinic-primary mb-4 group-hover:bg-clinic-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-clinic-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" className="border-clinic-primary text-clinic-primary hover:bg-clinic-primary hover:text-white rounded-full px-8 py-6 text-lg">
              <Link to="/services" className="flex items-center gap-2">
                View All Services <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Session Options Section */}
      <section className="py-20 bg-clinic-accent/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-clinic-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clinic-dark">Book Your Physiotherapy Session</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
              Choose the option that best suits your needs and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SessionOption
              title="In-Clinic Sessions"
              description="Visit our clinic for a comprehensive assessment and treatment using our specialized equipment."
              icon={<HomeIcon size={32} />}
              link="/book-session?type=clinic"
            />
            <SessionOption
              title="Doc.Door Home Visits"
              description="Our physiotherapist will visit your home with all necessary equipment for your convenience."
              icon={<User size={32} />}
              link="/book-session?type=home"
            />

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clinic-dark">Success Stories</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
              Real patients, real recoveries. See how we've helped others get back to their best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                condition={testimonial.condition}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-clinic-primary to-clinic-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Take the first step towards a pain-free life. Book your appointment with Dr. Riddhika today.
          </p>
          <Button asChild size="lg" className="bg-clinic-secondary hover:bg-yellow-500 text-clinic-dark font-bold text-xl px-10 py-8 rounded-full shadow-2xl transition-transform hover:scale-105">
            <Link to="/book-session">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
