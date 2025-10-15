import React from 'react';
import Navbar from './Navbar';

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => {
    // Remove $ and convert to number
    return acc + Number(item.price.replace('$', ''));
  }, 0);

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div style={styles.container}>
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div style={styles.cartGrid}>
            {cart.map((item, index) => (
              <div key={index} style={styles.card}>
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                <p>Category: {item.category}</p>
                <button style={styles.removeBtn} onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && <h2>Total: ${totalPrice}</h2>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px 50px',
    textAlign: 'center',
  },
  cartGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  removeBtn: {
    marginTop: '10px',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#f44336',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Cart;
