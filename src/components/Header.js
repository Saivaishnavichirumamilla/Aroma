import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogInUser from "./LogInUser";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null); // Stores logged-in username
  const [showDropdown, setShowDropdown] = useState(false); // Show logout option

  const handleLogin = (username) => {
    console.log("logged in successfully" + username);
    setUser(username);
    setShowLogin(false); // Close login modal after success
  };
  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setShowDropdown(false); // Hide dropdown after logout
  };

  return (
    <div className="header ">
      <div className="logo">
        <img className="logo-img " src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./about">About us</Link>
          </li>
          <li>
            <Link to="./contactUs">Contact us</Link>
          </li>
          <li>
            <Link to="./cart">Cart({cartItems.length})</Link>
          </li>
          <li>
            {user ? (
              <div>
                <button onClick={() => setShowDropdown(!showDropdown)}>
                  {user}
                </button>
                {showDropdown && <button onClick={handleLogout}>LogOut</button>}
              </div>
            ) : (
              <button className="log-btn " onClick={() => setShowLogin(true)}>
                LogIn
              </button>
            )}
            {showLogin && (
              <LogInUser
                onLogin={handleLogin}
                onClose={() => setShowLogin(false)}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
