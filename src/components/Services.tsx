import { motion } from 'framer-motion';
import { Droplets, Sofa, Home, Building2, Sparkles, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Deep Steam Cleaning',
    description: 'Hot water extraction reaches the base of every fibre, removing 99% of bacteria, allergens, and deep-seated dirt.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Sparkles,
    title: 'Stain Removal',
    description: 'Advanced treatments for wine, coffee, pet stains, and more. We tackle spots you thought were permanent.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Sofa,
    title: 'Upholstery Cleaning',
    description: 'Revitalize your sofas, chairs, and mattresses with our gentle yet effective cleaning process.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Home,
    title: 'Residential',
    description: 'Complete home carpet care from living rooms to bedrooms. Family-safe, pet-friendly solutions.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Keep your office or retail space looking professional. Flexible scheduling to minimize disruption.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Protection Treatment',
    description: 'Apply protective coating to repel future stains and extend the life of your carpets.',
    color: 'bg-violet-50 text-violet-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-12 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 lg:mb-16"
        >
          <span className="inline-block px-3 py-1 lg:px-4 lg:py-1.5 bg-primary/10 text-primary text-xs lg:text-sm font-semibold rounded-full mb-3 lg:mb-4">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
            Premium Services
          </h2>
          <p className="text-sm lg:text-lg text-gray-600">
            Our expert technicians use state-of-the-art equipment to deliver unmatched results for every room in your home or office.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-4 lg:p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${service.color} flex items-center justify-center mb-3 lg:mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">{service.title}</h3>
              <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
