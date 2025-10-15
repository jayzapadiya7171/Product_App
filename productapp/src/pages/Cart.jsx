// src/pages/Cart.js
import React from "react";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
  const index = cart.findIndex(item => item.id === id);
  if (index >= 0) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  }
};

  const totalPrice = cart.reduce((total, item) => {
    // Remove $ sign and convert to number
    return total + Number(item.price.replace("₹", ""));
  }, 0);

  return (
    <div className="product-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div className="product-grid">
          {cart.map((item) => (
            <div key={item.id} className="product-card">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <h3 style={{ marginTop: "10px" }}>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Total Price: ₹{totalPrice.toFixed(2)}
        </h3>
      )}
    </div>
  );
};

export default Cart;
