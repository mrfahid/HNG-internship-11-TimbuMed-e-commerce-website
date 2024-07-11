import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <>
<footer>
        <div className="footer-content">
            <div className="footer__section company">
                <h3>TimbuMed</h3>
                <p>We specialize in the sales and distribution of rare medicines.</p>
            </div>
            <div className="footer__section help">
                <h3>Help</h3>
                <ul>
                    <li><Link to="#">Customer Support</Link></li>
                    <li><Link to="#">Delivery Costs</Link></li>
                    <li><Link to="#">Terms & Conditions</Link></li>
                    <li><Link to="#">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="footer__section faq">
                <h3>FAQ</h3>
                <ul>
                    <li><Link to="#">Account</Link></li>
                    <li><Link to="#">Manage Deliveries</Link></li>
                    <li><Link to="#">Orders</Link></li>
                    <li><Link to="#">Payments</Link></li>
                </ul>
            </div>
            <div className="footer__section resources">
                <h3>Resources</h3>
                <ul>
                    <li><Link to="#">Tracking Order</Link></li>
                    <li><Link to="#">How to Order</Link></li>
                    <li><Link to="#">Development Tutorial</Link></li>
                </ul>
            </div>
        </div>
        <div className="footer__bottom">
            <p>&copy; 2024 TimbuMed. All rights reserved.</p>
        </div>
    </footer>
    </>
  );
};

export default Footer;