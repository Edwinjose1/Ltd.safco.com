import { Link } from "react-router-dom";
import { MapPin, Phone, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-dark text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center font-heading text-xl font-bold">
                S
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">SAFCO</h3>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4 leading-relaxed">
              SUBHAPRABHATHAM AGRO FARMERS PRODUCER CO. LTD. (SAFCO)
            </p>
            <p className="text-sm opacity-70">
              <strong className="opacity-100">Registration Number:</strong><br />
              Reg. No.: U01100KL2020 PTC 065753
            </p>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="flex items-center gap-2 font-heading text-lg font-bold mb-6">
              <MapPin className="w-5 h-5" />
              Office Address
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Room No: 4125</li>
              <li>Floor: Second Floor</li>
              <li>Building: City Centre</li>
              <li>City: Thrissur</li>
              <li>State: Kerala</li>
              <li>PIN Code: 680001</li>
              <li>Country: India</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="flex items-center gap-2 font-heading text-lg font-bold mb-6">
              <Phone className="w-5 h-5" />
              Contact Details
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+919846627725"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  Mobile: +91 98466 27725
                </a>
              </li>
              <li>
                <a
                  href="https://www.safcoltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Globe className="w-4 h-4" />
                  www.safcoltd.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@safcoltd.com"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  admin@safcoltd.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:customercare@safcoltd.com"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  customercare@safcoltd.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#projects" className="opacity-90 hover:opacity-100 transition-opacity">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-70">
            &copy; 2024 SAFCO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
