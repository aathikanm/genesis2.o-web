import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-blue-900/80 backdrop-blur-lg py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">
              Genesis <span className="text-accent">2.0</span>
            </h3>
            <p className="text-blue-200">IEEE-HKN Nu Eta Chapter</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/company/nu-eta/" className="text-blue-200 hover:text-accent transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.facebook.com/share/1AeNz8MuXw/" className="text-blue-200 hover:text-accent transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.instagram.com/sec_hkn?igsh=ZGFmY25hbWE3eHo3" className="text-blue-200 hover:text-accent transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} IEEE-HKN Nu Eta Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
