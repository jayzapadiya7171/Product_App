import React from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "₹79999",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Headphones",
    price: "₹8999",
    image: "https://t4.ftcdn.net/jpg/03/28/37/93/360_F_328379347_xEKgEB2wkjAJmcqSTmrg4uKxfWrlL7D9.jpg"
  },
  {
    id: 3,
    name: "Smartphone",
    price: "₹69499",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Airpods",
    price: "₹10999",
    image: "https://t4.ftcdn.net/jpg/06/13/99/69/360_F_613996948_6QAvSUlvGShescKNrzRopkI5pcbbovuQ.jpg   "
  },
  
];

const Product = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product without refreshing
  };

  return (
    <div className="product-page">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img 
              src={p.image} 
              alt={p.name} 
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}
            />
            <h3 style={{ marginTop: "10px" }}>{p.name}</h3>
            <p>{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
