import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-3 lg:space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <span className="text-lg lg:text-xl font-bold text-white">
                Revita<span className="text-primary-light">Carpet</span>
              </span>
            </a>
            <p className="text-xs lg:text-sm leading-relaxed hidden sm:block">
              Professional carpet cleaning that brings your floors back to life. Eco-friendly, effective, and guaranteed.
            </p>
            <div className="flex gap-2 lg:gap-3">
              <a href="#" className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors text-xs font-bold">FB</a>
              <a href="#" className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors text-xs font-bold">IG</a>
              <a href="#" className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors text-xs font-bold">X</a>
            </div>
          </div>

          {/* Services */}
          <div className="hidden sm:block">
            <h4 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Services</h4>
            <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
              <li><a href="#services" className="hover:text-primary-light transition-colors">Deep Steam Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary-light transition-colors">Stain Removal</a></li>
              <li><a href="#services" className="hover:text-primary-light transition-colors">Upholstery Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary-light transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary-light transition-colors">Protection Treatment</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden sm:block">
            <h4 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Company</h4>
            <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
              <li><a href="#" className="hover:text-primary-light transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-primary-light transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-primary-light transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-light transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 lg:mb-4 text-sm lg:text-base">Contact</h4>
            <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4 text-primary-light" />
                <a href="tel:+10000000000" className="hover:text-primary-light transition-colors">(000) 000-0000</a>
              </li>
              <li className="flex items-center gap-2 hidden sm:flex">
                <Mail className="w-3 h-3 lg:w-4 lg:h-4 text-primary-light" />
                <a href="mailto:hello@revitacarpet.com" className="hover:text-primary-light transition-colors">hello@revitacarpet.com</a>
              </li>
              <li className="flex items-start gap-2 hidden sm:flex">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-primary-light mt-0.5" />
                <span>123 Clean Street, Suite 100<br />Your City, ST 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 lg:gap-4 text-xs lg:text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RevitaCarpet. All rights reserved.</p>
          <div className="flex gap-4 lg:gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
