
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      title: "Orthopedic Physiotherapy",
      description: "Specialized treatment for musculoskeletal issues affecting bones, joints, muscles, and soft tissues.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      conditions: [
        "Back and Neck Pain",
        "Arthritis Management",
        "Joint Replacement Rehabilitation",
        "Frozen Shoulder",
        "Tennis/Golfer's Elbow",
        "Fracture Rehabilitation",
        "Sprains and Strains"
      ]
    },

    {
      title: "Sports Physiotherapy",
      description: "Specialized care for athletes and sports enthusiasts to prevent injuries and enhance performance.",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      conditions: [
        "Sports Injury Assessment",
        "ACL/MCL Rehabilitation",
        "Rotator Cuff Injuries",
        "Runner's Knee Treatment",
        "Achilles Tendonitis",
        "Performance Enhancement Training",
        "Pre and Post-Event Muscle Conditioning"
      ]
    },

    {
      title: "Post-Operative Rehabilitation",
      description: "Structured recovery programs after surgical procedures to restore function and mobility.",
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      conditions: [
        "Joint Replacement Recovery",
        "Spinal Surgery Rehabilitation",
        "ACL Reconstruction Recovery",
        "Shoulder Surgery Rehabilitation",
        "Hip Replacement Therapy",
        "Knee Surgery Recovery",
        "General Post-Surgical Care"
      ]
    }
  ];

  const treatmentMethods = [
    {
      title: "Manual Therapy",
      description: "Skilled hand movements used to manipulate joints and soft tissue to decrease pain, increase range of motion, and reduce inflammation."
    },
    {
      title: "Therapeutic Exercises",
      description: "Customized exercise programs designed to improve strength, flexibility, balance, and coordination specific to the patient's condition."
    },
    {
      title: "Electrotherapy",
      description: "Use of electrical energy as a treatment to reduce pain, strengthen muscles, and promote tissue healing."
    },
    {
      title: "Heat and Cold Therapy",
      description: "Application of heat or cold to reduce pain, inflammation, and muscle spasms while promoting healing."
    },
    {
      title: "Traction Therapy",
      description: "A technique used to relieve pressure on the spine, decompress joints, and treat herniated discs or nerve compression."
    },
    {
      title: "Ultrasound Therapy",
      description: "Uses sound waves to treat deep tissue injuries, reduce inflammation, and promote blood flow to injured areas."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-clinic-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Comprehensive physiotherapy solutions tailored to your specific needs and conditions.
          </p>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-clinic-primary">Specialized Physiotherapy Services</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We offer a wide range of specialized physiotherapy services to address various conditions and help you on your path to recovery.
            </p>
          </div>
          
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'order-1 md:order-2' : 'order-1'}`}>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className={`space-y-4 ${index % 2 === 1 ? 'order-2 md:order-1' : 'order-2'}`}>
                  <h3 className="text-2xl font-bold text-clinic-primary">{category.title}</h3>
                  <p className="text-gray-700">{category.description}</p>
                  <div>
                    <h4 className="font-semibold text-clinic-secondary mb-2">Conditions We Treat:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.conditions.map((condition, condIndex) => (
                        <li key={condIndex} className="flex items-center space-x-2">
                          <span className="h-2 w-2 rounded-full bg-clinic-secondary"></span>
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Treatment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-clinic-primary">Our Treatment Methods</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              We employ various evidence-based techniques and methods to ensure effective treatment and rapid recovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-clinic-primary mb-2">{method.title}</h3>
                <p className="text-gray-700">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-clinic-primary">How We Deliver Our Services</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Choose the service option that best suits your needs and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="In-Clinic Physiotherapy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-clinic-primary mb-2">In-Clinic Sessions</h3>
                <p className="text-gray-700 mb-4">
                  Visit our modern clinic equipped with state-of-the-art physiotherapy equipment for comprehensive assessment and treatment.
                </p>
                <Button asChild className="w-full bg-clinic-secondary hover:bg-blue-600 text-white">
                  <Link to="/book-session?type=clinic">Book In-Clinic Session</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48">
                <img 
                  src="/homevisit.png" 
                  alt="Home Physiotherapy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-clinic-primary mb-2">Doc.Door (Home Visits)</h3>
                <p className="text-gray-700 mb-4">
                  Our physiotherapist will come to your home with all necessary equipment for treatments in the comfort of your home.
                </p>
                <Button asChild className="w-full bg-clinic-secondary hover:bg-blue-600 text-white">
                  <Link to="/book-session?type=home">Book Doc.Door Visit</Link>
                </Button>
              </div>
            </div>
            

          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-clinic-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Treatment?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment now and take the first step towards recovery and improved quality of life.
          </p>
          <Button asChild size="lg" className="bg-clinic-highlight hover:bg-green-600 text-white">
            <Link to="/book-session">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
