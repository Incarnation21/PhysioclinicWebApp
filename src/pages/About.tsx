
import { Award, BookOpen, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-clinic-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Learn more about Dr.Riddhika's Physiotherapy Clinic and our commitment to providing excellent physiotherapy care.
          </p>
        </div>
      </section>

      {/* Clinic Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/aboutus.png"
                alt="Physiotherapy Session"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-clinic-primary">Dr.Riddhika's Physiotherapy Clinic</h2>
              <p className="text-gray-700">
                Established with a vision to provide top-quality physiotherapy services, Dr.Riddhika's Physiotherapy Clinic is a state-of-the-art facility located at J-39, PC Colony, Kankarbagh, Patna, Bihar 800020, India.
              </p>
              <p className="text-gray-700">
                Our clinic is equipped with modern rehabilitation equipment and technology to provide comprehensive care for all physiotherapy needs. We offer a wide range of services including orthopedic, neurological, sports, cardiopulmonary, and post-operative rehabilitation.
              </p>
              <p className="text-gray-700">
                At Dr.Riddhika's Physiotherapy Clinic, we believe in a patient-centered approach where each treatment plan is customized according to the individual's specific needs and conditions. Our goal is not just to treat symptoms but to address the root cause and promote long-term well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Riddhika */}
      <section className="py-16 bg-clinic-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-3xl font-bold text-clinic-primary">Meet Dr. Laxmi Riddhika</h2>
              <p className="text-gray-700">
                Dr. Laxmi Riddhika is a highly qualified and experienced physiotherapist with expertise in various rehabilitation techniques and methodologies. She completed her Master of Physiotherapy (MPT) from ABMU and Bachelor of Physiotherapy (BPT) from CCSU.
              </p>
              <p className="text-gray-700">
                With years of clinical experience, Dr. Riddhika specializes in treating a wide range of conditions including musculoskeletal disorders, neurological conditions, sports injuries, cardiopulmonary issues, and post-surgical rehabilitation.
              </p>
              <p className="text-gray-700">
                Dr. Riddhika is committed to continuous learning and stays updated with the latest advancements in physiotherapy to provide the best possible care to her patients. She believes in a holistic approach to treatment, considering not just the physical symptoms but also the patient's overall well-being.
              </p>
              <p className="text-gray-700">
                Her compassionate nature and dedication to helping patients recover have earned her the trust and respect of both patients and colleagues alike.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/lovable-uploads/e156839d-22eb-42f6-9555-b8871c8d7aa8.png"
                alt="Dr. Laxmi Riddhika"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-clinic-primary">Our Core Values</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              The principles that guide our practice and ensure the highest quality of care for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-clinic-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-clinic-secondary" />
              </div>
              <h3 className="text-xl font-bold text-clinic-primary mb-2">Patient-Centered Care</h3>
              <p className="text-gray-700">
                We prioritize our patients' needs and preferences, ensuring personalized treatment plans that address their specific conditions and goals.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-clinic-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-clinic-secondary" />
              </div>
              <h3 className="text-xl font-bold text-clinic-primary mb-2">Excellence in Service</h3>
              <p className="text-gray-700">
                We strive for excellence in every aspect of our service, from clinical expertise to patient communication and facility management.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-16 w-16 bg-clinic-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-clinic-secondary" />
              </div>
              <h3 className="text-xl font-bold text-clinic-primary mb-2">Continuous Learning</h3>
              <p className="text-gray-700">
                We are committed to continuous education and staying updated with the latest advancements in physiotherapy to provide cutting-edge care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-clinic-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-clinic-primary">Visit Our Clinic</h2>
              <p className="text-gray-700">
                We are conveniently located in Kankarbagh, Patna. Our modern facility is equipped with the latest physiotherapy equipment to provide you with the best care possible.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Address:</strong> J-39, PC Colony, Kankarbagh, Patna, Bihar 800020, India</p>
                <p className="text-gray-700"><strong>Phone:</strong> 8252482702</p>
                <p className="text-gray-700"><strong>Email:</strong> contact@drriddhikaphysio.com</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Clinic Hours:</strong></p>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div>
              <div className="h-full w-full rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.3651343872634!2d85.15102363735677!3d25.591237680397732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59791d4b2539%3A0xca5b248617d00acb!2sDr.%20Riddhika&#39;s%20Physiotherapy%20Clinic!5e1!3m2!1sen!2sin!4v1774207994918!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
