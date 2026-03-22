
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQs = () => {
  const generalFaqs = [
    {
      question: "What is physiotherapy?",
      answer: "Physiotherapy is a healthcare profession that focuses on treating physical impairments, disabilities, and promoting mobility, function, and quality of life through physical examination, diagnosis, patient education, and therapy using physical methods such as exercise, manual therapy, and various modalities."
    },
    {
      question: "What conditions can physiotherapy treat?",
      answer: "Physiotherapy can treat a wide range of conditions including musculoskeletal issues (back/neck pain, arthritis, sports injuries), neurological conditions (stroke, Parkinson's), cardiorespiratory problems, post-surgical rehabilitation, and more. It is effective for both acute injuries and chronic conditions."
    },
    {
      question: "Do I need a doctor's referral to see a physiotherapist?",
      answer: "No, you do not need a doctor's referral to see a physiotherapist. You can directly book an appointment with our clinic. However, if you are seeking treatment under insurance coverage, a referral might be required depending on your insurance policy."
    },
    {
      question: "Is physiotherapy painful?",
      answer: "Physiotherapy should not be excessively painful. Some techniques may cause mild discomfort, especially when treating injured tissues, but your physiotherapist will always work within your comfort levels. Communication is important - always inform your therapist if any technique causes more than mild discomfort."
    }
  ];

  const treatmentFaqs = [
    {
      question: "How long does a physiotherapy session typically last?",
      answer: "Most physiotherapy sessions last between 45 minutes to 1 hour. The first session may be longer (60-90 minutes) as it includes a comprehensive assessment of your condition, medical history review, and initial treatment planning."
    },
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions varies greatly depending on your condition, its severity, and how your body responds to treatment. Some acute conditions may improve in 3-6 sessions, while chronic or complex conditions might require longer-term management. Your physiotherapist will provide an estimated treatment plan after your initial assessment."
    },
    {
      question: "How soon can I start physiotherapy after an injury?",
      answer: "You can start physiotherapy immediately after certain injuries, especially for conditions like sprains, strains, or minor trauma. For more severe injuries or post-surgery, it's best to consult with your doctor first. Early intervention often leads to better outcomes and faster recovery."
    },
    {
      question: "What should I wear to a physiotherapy session?",
      answer: "Wear comfortable, loose-fitting clothes that allow easy movement and access to the area being treated. For lower body issues, shorts or loose pants are recommended. For upper body issues, a tank top or loose t-shirt works well. Appropriate footwear like sneakers may be needed for certain exercises."
    }
  ];

  const serviceFaqs = [
    {
      question: "Do you offer home physiotherapy services?",
      answer: "Yes, we offer home physiotherapy services where our qualified physiotherapist will visit your home with all the necessary equipment. This is especially beneficial for patients with mobility issues, the elderly, or those who find it difficult to travel to our clinic."
    },
    {
      question: "Do you offer online consultations for physiotherapy?",
      answer: "Yes, we offer online consultations where our physiotherapist can assess your condition, provide advice, demonstrate exercises, and monitor your progress remotely. This is especially helpful for follow-up sessions, patients in remote areas, or those who cannot visit the clinic due to various reasons."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit/debit cards, UPI payments, and bank transfers. Payment is typically collected at the end of each session unless you've purchased a package in advance."
    },
    {
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment. We request at least 24 hours' notice for cancellations or rescheduling to avoid any cancellation fees and to allow us to offer the slot to other patients."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-clinic-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Find answers to common questions about physiotherapy and our services.
          </p>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-clinic-primary mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-clinic-primary mb-6">Treatment & Recovery</h2>
              <Accordion type="single" collapsible className="w-full">
                {treatmentFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`treatment-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-clinic-primary mb-6">Our Services</h2>
              <Accordion type="single" collapsible className="w-full">
                {serviceFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`service-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center mt-8">
            <h3 className="text-xl font-bold text-clinic-primary mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              If you couldn't find an answer to your question, please feel free to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-clinic-secondary hover:bg-blue-600 text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild className="bg-clinic-highlight hover:bg-green-600 text-white">
                <Link to="/book-session">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQs;
