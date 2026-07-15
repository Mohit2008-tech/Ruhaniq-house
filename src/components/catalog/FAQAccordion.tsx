import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does hand-embroidery take?",
    answer:
      "Custom embroidery typically takes 5-7 business days depending on the complexity and size of the design. We'll provide you with an estimated timeline after reviewing your design specifications.",
  },
  {
    question: "How do I wash my embroidered items?",
    answer:
      "Hand wash gently in cold water with mild detergent. Turn the garment inside out to protect the embroidery. Lay flat to dry or hang dry away from direct sunlight. Do not wring or twist. Iron on the reverse side with low heat if needed.",
  },
  {
    question: "Can I request custom colors for ribbon bouquets?",
    answer:
      "Yes\! We can create ribbon bouquets in any color combination you desire. Simply mention your preferred colors in the order notes or message us directly on WhatsApp with color swatches or references.",
  },
  {
    question: "Are the products handmade?",
    answer:
      "Absolutely\! Every item at Ruhaniq is 100% handcrafted with love and attention to detail. From embroidery to crochet work, ribbon art to resin pieces—everything is made by hand.",
  },
  {
    question: "What is your return/exchange policy?",
    answer:
      "Since all our items are handcrafted and many are customized to your specifications, we generally do not accept returns. However, if you receive a damaged or defective product, please contact us within 48 hours with photos, and we'll make it right.",
  },
  {
    question: "Do you ship outside India?",
    answer:
      "Currently, we ship within India only. For international orders, please contact us directly on WhatsApp, and we'll try to accommodate your request on a case-by-case basis.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg border-2 border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
          >
            <span className="font-semibold text-stone-800 pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-rose-600 flex-shrink-0" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
