import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does the carpet cleaning process take?',
    answer: 'Most residential rooms take 20-30 minutes to clean. A typical 3-bedroom home takes about 2-3 hours total. Drying time is usually 4-6 hours with our quick-dry technology.',
  },
  {
    question: 'Are your cleaning products safe for pets and children?',
    answer: 'Absolutely. We use 100% eco-friendly, non-toxic cleaning solutions that are completely safe for your entire family, including pets and young children. No harsh chemicals are ever used.',
  },
  {
    question: 'How often should I have my carpets professionally cleaned?',
    answer: 'We recommend professional cleaning every 6-12 months for most households. Homes with pets, children, or allergy sufferers may benefit from cleaning every 3-6 months.',
  },
  {
    question: 'Can you remove all types of stains?',
    answer: 'While we successfully remove the vast majority of stains including wine, coffee, pet accidents, and grease, some very old or set-in stains may be permanent. We will always be honest about expected results before we begin.',
  },
  {
    question: 'Do I need to move my furniture before you arrive?',
    answer: 'We ask that you clear small items and breakables. Our team will carefully move light furniture like chairs and side tables as part of the service. We do not move heavy items like beds or dressers for safety reasons.',
  },
  {
    question: 'What is your satisfaction guarantee?',
    answer: 'We offer a 100% satisfaction guarantee. If you are not completely happy with any area we cleaned, we will return and re-clean it at no additional charge. Your satisfaction is our priority.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-200 transition-colors">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our carpet cleaning service.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-surface rounded-2xl border border-gray-100">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-gray-600">Still have questions?</span>
            <a href="tel:+10000000000" className="font-semibold text-primary hover:text-primary-dark transition-colors">
              Call us anytime
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
