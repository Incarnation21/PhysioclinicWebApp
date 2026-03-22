
import { useState } from "react";
import config from "../config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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
      const response = await fetch(`${config.apiBaseUrl}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName: formData.name,
          contactNumber: formData.phone,
          appointmentDate: formData.date,
          // Extract time or default
          appointmentTime: "10:00 AM",
          service: "General Consultation",
          notes: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Appointment Request Sent",
          description: "We have received your request and will contact you shortly.",
          duration: 5000,
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          date: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly via phone/WhatsApp.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4 text-clinic-primary">Book an Appointment</h3>
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

        <div className="space-y-2">
          <Label htmlFor="phone">Mobile Number</Label>
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
          <Label htmlFor="date">Preferred Date</Label>
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
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your condition or problem briefly"
            rows={4}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-clinic-highlight hover:bg-green-600 text-white"
          disabled={loading}
        >
          {loading ? "Sending Request..." : "Request Appointment"}
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
