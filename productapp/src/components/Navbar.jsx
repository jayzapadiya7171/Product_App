import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, cart }) => {
  return (
    <nav className="navbar">
      <div className="logo">MyStore</div>
      <div>
        {isLoggedIn ? (
          <>
            <Link to="/product">Product</Link>
            <Link to="/cart" style={{ marginLeft: "10px" }}>Cart ({cart.length})</Link>
            <Link to="/logout" style={{ marginLeft: "10px" }}>Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
