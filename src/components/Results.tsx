import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';
import { CheckCircle2 } from 'lucide-react';

const results = [
  'Removes 99% of bacteria & allergens',
  'Eliminates stubborn stains & odors',
  'Extends carpet lifespan by years',
  'Safe for kids, pets & the environment',
];

export default function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Slider */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <BeforeAfterSlider
              beforeImage="/images/clean-carpet.jpg"
              afterImage="/images/clean-carpet.jpg"
              className="w-full aspect-[4/3]"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Drag the slider to see the transformation
            </p>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Real Results
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                See the <span className="text-gradient">Difference</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vacuuming only skims the surface. Our advanced hot-water extraction process reaches the base of every fibre, removing 99% of bacteria, allergens, and stubborn stains you thought were permanent.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {results.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl bg-surface border border-gray-100">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-gray-500 mt-1">Homes Cleaned</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface border border-gray-100">
                <p className="text-3xl font-bold text-primary">4.9</p>
                <p className="text-sm text-gray-500 mt-1">Star Rating</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-surface border border-gray-100">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-500 mt-1">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
