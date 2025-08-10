import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Brand */}
          <h3 className="font-heading text-2xl font-bold mb-4">
            Oussama <span className="text-primary">Bouquonta</span>
          </h3>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Creative UGC Content Creator helping brands connect with their audience 
            through authentic, engaging videos.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => window.open('https://instagram.com/oussama.bouquonta', '_blank')}
              className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/+212123456789', '_blank')}
              className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={() => window.location.href = 'mailto:oussama@example.com'}
              className="p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-neutral-800">
            <p className="text-neutral-500 text-sm">
              © 2025 Oussama Bouquonta — UGC Creator. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;