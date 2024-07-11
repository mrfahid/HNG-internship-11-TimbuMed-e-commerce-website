import './Header.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="top-bar">
      <span>Sign up and get 20% off your first order. <Link to="#">Sign Up Now</Link></span>
    </div>
  );
}

export default TopBar;
