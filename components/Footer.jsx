import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "animate.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-16">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="text-center md:text-left animate__animated animate__fadeInUp">
            <h3 className="text-3xl font-semibold mb-4">PJ Tech Hub</h3>
            <p className="mb-4">
              Learn and grow with PJ Tech Hub - Your one-stop platform for IT learning, resources, and mentorship.
            </p>
            <p>&copy; {new Date().getFullYear()} PJ Tech Hub. All rights reserved.</p>
          </div>
          
          <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-1s">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link href="#features" className="hover:text-gray-200">Features</Link></li>
              <li><Link href="#benefits" className="hover:text-gray-200">Benefits</Link></li>
              <li><Link href="#subscribe" className="hover:text-gray-200">Subscribe</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left animate__animated animate__fadeInUp animate__delay-2s">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-pink-400 transition">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/pj-tech-hub/" target="_blank" className="text-white hover:text-blue-600 transition">
                <FaLinkedinIn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
