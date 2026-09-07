import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/userOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2 className="logo">🛒 ShopZone</h2>
        </Link>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            Online Status:{" "}
            {onlineStatus ? (
              <span style={{ color: "green" }}>●</span>
            ) : (
              <span style={{ color: "red" }}>●</span>
            )}
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" style={{ textDecoration: "none" }}>
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
