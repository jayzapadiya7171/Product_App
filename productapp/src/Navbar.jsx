import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>MyStore</div>
      <div style={styles.links}>
        <Link to="/product" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.link}>🛒 Cart ({cartCount})</Link>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#1976d2',
    color: 'white',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '24px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  logoutBtn: {
    padding: '5px 15px',
    backgroundColor: '#f44336',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
  },
};

export default Navbar;
