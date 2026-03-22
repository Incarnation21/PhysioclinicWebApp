
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
    const phoneNumber = "918252482702";
    const message = encodeURIComponent("Hello Dr. Riddhika, I would like to inquire about physiotherapy sessions.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            title="Chat on WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
        </motion.a>
    );
};

export default WhatsAppButton;
