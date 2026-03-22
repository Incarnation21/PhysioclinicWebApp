
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-clinic-primary">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-clinic-secondary">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How long does a physiotherapy session typically last?",
      answer: "Most physiotherapy sessions last between 45 minutes to 1 hour. The first session may be longer as it includes a comprehensive assessment of your condition."
    },
    {
      question: "How soon can I start physiotherapy after an injury?",
      answer: "You can start physiotherapy immediately after certain injuries. However, in case of severe injuries or post-surgery, it's best to consult with your doctor first. Our physiotherapist will work closely with your medical team to determine the best time to start therapy."
    },
    {
      question: "Do you offer online consultations for physiotherapy?",
      answer: "Yes, we offer online consultations where our physiotherapist can assess your condition, provide advice, demonstrate exercises, and monitor your progress remotely. This is especially helpful for follow-up sessions and patients who cannot visit the clinic."
    },
    {
      question: "Can I book physiotherapy sessions at home?",
      answer: "Yes, we offer home physiotherapy services where our qualified physiotherapist will visit your home with all the necessary equipment to provide treatment in the comfort of your home."
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-clinic-primary">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
