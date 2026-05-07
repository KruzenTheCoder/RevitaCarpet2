import { motion } from 'framer-motion';
import { CalendarCheck, Truck, PartyPopper, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: CalendarCheck,
    title: 'Book Online',
    description: 'Request a callback or book a time that fits your schedule in seconds. No phone calls required. Choose your preferred date and service.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
  },
  {
    number: '02',
    icon: Truck,
    title: 'We Arrive',
    description: 'Our vetted experts arrive on time, fully equipped with eco-friendly solutions and professional-grade tools. We respect your home.',
    color: 'from-primary to-primary-light',
    bgColor: 'bg-emerald-50',
  },
  {
    number: '03',
    icon: PartyPopper,
    title: 'Enjoy Freshness',
    description: 'Step onto revitalized, spotless, and quick-drying carpets guaranteed to impress your guests. Breathe cleaner air today.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Three simple steps to transform your home from tired to revitalized.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full">
                  <div className="flex items-center gap-1">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-gray-200 to-gray-300" />
                    <ChevronRight className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                {/* Step Number */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
