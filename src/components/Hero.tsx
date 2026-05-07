import { motion } from 'framer-motion';
import { Phone, Star, Shield, Leaf, ArrowRight, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-screen hero-gradient overflow-hidden pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-[0.04]" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 lg:space-y-8"
          >
            {/* Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-md shadow-black/5 border border-gray-100 text-xs sm:text-sm"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">4.9/5</span>
              <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">from 500+ happy customers</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Bring Your Carpets{' '}
                <span className="text-gradient">Back to Life</span>
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                Deep cleaning that restores freshness, removes stubborn stains, and transforms your home into a healthier, more beautiful space.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                </div>
                <span className="font-medium text-xs sm:text-sm">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                </div>
                <span className="font-medium text-xs sm:text-sm">100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                </div>
                <span className="font-medium text-xs sm:text-sm">Same-Day</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#callback"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 text-base sm:text-lg"
              >
                Book a Cleaning
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+10000000000"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all text-base sm:text-lg"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                Call Now
              </a>
            </div>

            {/* Mini Trust Bar */}
            <p className="text-xs sm:text-sm text-gray-500">
              Free estimate &middot; No hidden fees &middot; Licensed & insured
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="/images/tech-cleaning.jpg"
                alt="Professional carpet cleaning"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl shadow-xl shadow-black/10 p-3 lg:p-5 border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">99%</p>
                  <p className="text-xs lg:text-sm text-gray-500">Bacteria Removed</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 bg-accent text-white rounded-xl lg:rounded-2xl shadow-lg shadow-amber-500/20 px-3 py-2 lg:px-4 lg:py-3"
            >
              <p className="text-[10px] lg:text-xs font-semibold uppercase tracking-wider">Limited Time</p>
              <p className="text-base lg:text-lg font-bold">20% OFF</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
