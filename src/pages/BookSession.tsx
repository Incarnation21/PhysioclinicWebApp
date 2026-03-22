
import { useEffect, useState } from "react";
import config from "../config";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, User, Video } from "lucide-react";

const BookSession = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sessionType, setSessionType] = useState<string>("clinic");
  
  useEffect(() => {
    // Extract session type from URL query parameters if present
    const searchParams = new URLSearchParams(location.search);
    const typeParam = searchParams.get("type");
    if (typeParam && ["clinic", "home"].includes(typeParam)) {
      setSessionType(typeParam);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    address: "",
    condition: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
      const notesArray = [];
      if (formData.condition) notesArray.push(`Condition: ${formData.condition}`);
      if (formData.address) notesArray.push(`Address: ${formData.address}`);
      if (formData.message) notesArray.push(`Message: ${formData.message}`);
      
      const response = await fetch(`${config.apiBaseUrl}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientName: formData.name,
          contactNumber: formData.phone,
          service: sessionType === 'home' ? 'Doc.Door (Home Visit)' : 'In-Clinic Session',
          appointmentDate: formData.date,
          appointmentTime: formData.time,
          notes: notesArray.join('\n')
        }),
      });

      if (response.ok) {
        toast({
          title: "Booking Request Received",
          description: "We'll contact you shortly to confirm your appointment.",
          duration: 5000,
        });
        
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          address: "",
          condition: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
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
      <section className="bg-clinic-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Physiotherapy Session</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Schedule an appointment at your convenience - in our clinic, at your home, or via online consultation.
          </p>
        </div>
      </section>
      
      {/* Session Options */}
      <section className="py-12 bg-clinic-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-clinic-primary mb-6 text-center">Select Session Type</h2>
            
            <RadioGroup 
              value={sessionType} 
              onValueChange={setSessionType}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
            >
              <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                sessionType === "clinic" ? "border-clinic-secondary bg-blue-50" : "border-gray-200 hover:border-gray-300"
              }`}>
                <RadioGroupItem value="clinic" id="clinic" className="sr-only" />
                <Label htmlFor="clinic" className="cursor-pointer flex flex-col items-center text-center">
                  <User size={32} className="text-clinic-primary mb-2" />
                  <span className="text-lg font-medium text-clinic-primary">In-Clinic Session</span>
                  <p className="text-sm text-gray-600 mt-2">
                    Visit our clinic for a comprehensive assessment and treatment using our specialized equipment.
                  </p>
                </Label>
              </div>
              
              <div className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                sessionType === "home" ? "border-clinic-secondary bg-blue-50" : "border-gray-200 hover:border-gray-300"
              }`}>
                <RadioGroupItem value="home" id="home" className="sr-only" />
                <Label htmlFor="home" className="cursor-pointer flex flex-col items-center text-center">
                  <Home size={32} className="text-clinic-primary mb-2" />
                  <span className="text-lg font-medium text-clinic-primary">Doc.Door (Home Visit)</span>
                  <p className="text-sm text-gray-600 mt-2">
                    Our physiotherapist will visit you at home with all necessary equipment for your convenience.
                  </p>
                </Label>
              </div>
              

            </RadioGroup>
          </div>
        </div>
      </section>
      
      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-clinic-primary mb-6">Personal Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name*</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number*</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Mobile Number"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition/Problem</Label>
                  <Input
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    placeholder="e.g., Back Pain, Knee Injury"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date*</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time*</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              {sessionType === "home" && (
                <div className="space-y-2">
                  <Label htmlFor="address">Address for Doc.Door Visit*</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your Complete Address for Doc.Door Visit"
                    rows={3}
                    required={sessionType === "home"}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide any additional information about your condition or requirements"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-clinic-highlight hover:bg-green-600 text-white"
              >
                {loading ? "Submitting..." : "Book Appointment"}
              </Button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                * Required fields. We'll contact you shortly to confirm your appointment.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* Session Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-clinic-primary mb-6 text-center">What to Expect</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-clinic-primary mb-2">First Session</h3>
                  <p className="text-gray-700">
                    Your first session will include a thorough assessment of your condition, medical history review, and initial treatment. Please bring any relevant medical reports, scans, or doctor's prescriptions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-clinic-primary mb-2">Session Duration</h3>
                  <p className="text-gray-700">
                    Most physiotherapy sessions last between 45 minutes to 1 hour. The first session may be longer due to the comprehensive assessment involved.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-clinic-primary mb-2">What to Wear</h3>
                  <p className="text-gray-700">
                    Please wear comfortable, loose-fitting clothes that allow easy access to the area requiring treatment. For lower limb issues, shorts are recommended.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-clinic-primary mb-2">Payment</h3>
                  <p className="text-gray-700">
                    We accept cash, UPI payments, and bank transfers. Payment is expected at the end of each session unless a package is booked in advance.
                  </p>
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

export default BookSession;
