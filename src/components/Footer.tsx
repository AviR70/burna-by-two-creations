import { Heart, Instagram, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Burna By Two" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Crafting the perfect Basque cheesecakes with love, passion, and the finest ingredients. 
              Every slice tells a story of burnt perfection and creamy indulgence.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="text-primary-foreground/80">
                <div className="font-medium">Phone:</div>
                <div>+91 8657775925</div>
                <div>+91 8369192940</div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="font-medium">Instagram:</div>
                <div>@burna_by_two</div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="font-medium">Hours:</div>
                <div>Daily: 10:00 AM - 12:00 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Burna By Two. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> for cheesecake lovers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;