import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="callback" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div className="absolute inset-0 pattern-dots opacity-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-white/90 text-sm font-medium">Limited Time: 20% Off First Cleaning</span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Your carpets deserve a{' '}
              <span className="text-amber-300">second life.</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
              Do not wait until the stains set in. Book your professional cleaning today and experience the RevitaCarpet difference.
            </p>
          </div>

          {/* Trust Row */}
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Same-Day Appointments</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+10000000000"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-primary font-bold rounded-2xl transition-all hover:shadow-xl hover:-translate-y-0.5 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (000) 000-0000
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Thank you for your interest! Our team will call you within 15 minutes.');
              }}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border-2 border-white/30 hover:border-white/50 transition-all"
            >
              Request Callback
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Urgency */}
          <p className="text-white/60 text-sm">
            Over 50 bookings this week. Schedule now to secure your preferred time slot.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
