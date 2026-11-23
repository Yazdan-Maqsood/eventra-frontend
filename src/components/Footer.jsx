import { FaCalendarAlt } from 'react-icons/fa';
import '../css/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1: Brand Info */}
        <div className="footer-col">
          <h3 className="brand-name">Eventra <FaCalendarAlt/></h3>
          <p className="brand-desc">
            Crafting unforgettable experiences through professional event planning and seamless execution.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Our Events</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col">
          <h4>CONTACT</h4>
          <p>Email: support@eventra.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Location: Sahiwal, Pakistan</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eventra. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
