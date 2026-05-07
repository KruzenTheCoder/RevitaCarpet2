import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Downtown',
    rating: 5,
    text: 'Absolutely incredible! They removed a red wine stain I thought was permanent. The carpets look brand new and smell amazing. Highly recommend!',
    avatar: 'SJ',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    name: 'Michael Torres',
    location: 'Westside',
    rating: 5,
    text: 'Professional, punctual, and thorough. My allergies have improved dramatically since the cleaning. Worth every penny and then some.',
    avatar: 'MT',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Emily Chen',
    location: 'Uptown',
    rating: 5,
    text: 'We have two dogs and a toddler. I was skeptical anything could save our carpets. RevitaCarpet proved me wrong. They look better than when we moved in!',
    avatar: 'EC',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'David Park',
    location: 'Midtown',
    rating: 5,
    text: 'The team was courteous, efficient, and left zero mess behind. Our office carpets haven\'t looked this good in years. Already booked our next appointment.',
    avatar: 'DP',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    name: 'Lisa Rodriguez',
    location: 'Eastside',
    rating: 5,
    text: 'Best carpet cleaning service I have ever used. The eco-friendly products were important to us, and the results exceeded expectations. Five stars!',
    avatar: 'LR',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    name: 'James Wilson',
    location: 'North Hills',
    rating: 5,
    text: 'Fast booking, fair pricing, and outstanding results. They even gave me tips on maintaining the carpets between cleanings. True professionals.',
    avatar: 'JW',
    color: 'bg-cyan-100 text-cyan-600',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 lg:py-28 bg-surface">
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
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
            Loved by Homeowners
          </h2>
          <p className="text-sm lg:text-lg text-gray-600">
            See what our community is saying about our service.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-4 lg:p-8 border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 lg:top-6 right-4 lg:right-6 w-6 h-6 lg:w-8 lg:h-8 text-gray-100 group-hover:text-primary/10 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-3 lg:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-4 lg:mb-6 text-xs lg:text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 lg:gap-3 pt-3 lg:pt-4 border-t border-gray-100">
                <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${testimonial.color} flex items-center justify-center text-xs lg:text-sm font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-xs lg:text-sm">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 text-gray-500 text-[10px] lg:text-xs">
                    <MapPin className="w-2 h-2 lg:w-3 lg:h-3" />
                    {testimonial.location}
                  </div>
                </div>
                <span className="ml-auto text-[10px] lg:text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 lg:py-1 rounded-full">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
