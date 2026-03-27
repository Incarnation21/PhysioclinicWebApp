
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import config from "../config";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${config.apiBaseUrl}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon.",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-clinic-primary text-white pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Get in touch with us for appointments, inquiries, or any other information.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-clinic-accent p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-clinic-primary" />
              </div>
              <h3 className="text-xl font-bold text-clinic-primary mb-2">Phone</h3>
              <p className="text-gray-700 mb-2">Call us for appointments or inquiries</p>
              <a href="tel:8252482702" className="text-clinic-secondary hover:underline text-lg font-medium">
                8252482702
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-clinic-accent p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-clinic-primary" />
              </div>
              <h3 className="text-xl font-bold text-clinic-primary mb-2">Email</h3>
              <p className="text-gray-700 mb-2">Send us an email anytime</p>
              <a href="mailto:drriddhikapt@gmail.com" className="text-clinic-secondary hover:underline text-lg font-medium">
                drriddhikapt@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-clinic-accent p-4 rounded-full inline-flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-clinic-primary" />
              </div>
              <h3 className="text-xl font-bold text-clinic-primary mb-2">Location</h3>
              <p className="text-gray-700 mb-2">Visit our clinic</p>
              <p className="text-clinic-secondary text-lg font-medium">
                J-39, PC Colony, Kankarbagh, <br />
                Patna, Bihar 800020, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-6">Send Us a Message</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-clinic-highlight hover:bg-green-600 text-white"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-clinic-primary mb-6">Our Location</h2>
              <div className="bg-white rounded-lg shadow-lg p-4 h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.3651343872634!2d85.15102363735677!3d25.591237680397732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59791d4b2539%3A0xca5b248617d00acb!2sDr.%20Riddhika&#39;s%20Physiotherapy%20Clinic!5e1!3m2!1sen!2sin!4v1774207994918!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                ></iframe>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-clinic-primary mb-4">Business Hours</h3>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Saturday</span>
                      <span>7:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>7:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-clinic-primary mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/786795397847596/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/dr_riddhika_physio_clinic?igsh=emE2YnczZ2s3NTVl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
