import { Link } from 'react-router-dom';
import { Cast as Casino, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Casino className="h-8 w-8 text-violet-500" />
              <span className="text-xl font-bold">LuxeCasino</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Experience luxury gaming at its finest. Join us for an unforgettable
              casino experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1234 Casino Boulevard</li>
              <li>Las Vegas, NV 89109</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@luxecasino.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a 
  href="https://www.linkedin.com/company/cyber-knighttips/" 
  className="text-gray-400 hover:text-white" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Linkedin size={24} />
</a>

<a 
  href="https://www.instagram.com/cyberknight.tips?igsh=MXJyeTI1d2o2OTBwNQ==" 
  className="text-gray-400 hover:text-white" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Instagram size={24} />
</a>

              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 LuxeCasino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;