import "./Header.css";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <header>
      <TopBar />
      <nav className="navbar">
        <div className="navbar__logo">
          Timbu<span>Med</span>
        </div>
        <ul className="nav__links">
          <li>
            <Link to="#">Categories</Link>
          </li>
          <li>
            <Link to="#">Vendors</Link>
          </li>
          <li>
            <Link to="#">New Arrivals</Link>
          </li>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
        </ul>
        <div className="search__bar">
          <input type="text" placeholder="Search for products..." />
          <IoIosSearch className="search__icon" />
        </div>
        <div className="user__links">
          <div className="nav__list">
            <FaRegUserCircle className="User__icon" />
            <span>Hi John</span>
          </div>
          <div className="nav__list">

              <IoHelpCircleOutline className="help__icon" />
            <Link to="#">
              <span>Help</span>
            </Link>
          </div>
          <div className="nav__list">
            <Link to="#">
              <FiShoppingCart className="cart__icon" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
