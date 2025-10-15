import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Logout from "./pages/Logout";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} cart={cart} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/product"
          element={isLoggedIn ? <Product cart={cart} setCart={setCart} /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/login" />}
        />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
