import { useState, useEffect } from 'react';
import './App.css';
import Products from './Components/Products';
import axios from 'axios';
import Navbar from './Components/Navbar';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      alert(`${product.title} is already in the cart!`); 
      return;
    }
    const updatedProducts = products.map(item =>
      item.id === product.id ? { ...item, added: true } : item
    );
    setProducts(updatedProducts);
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId)); 
    const updatedProducts = products.map(item =>
      item.id === productId ? { ...item, added: false } : item
    );
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  if (loading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} />
      <Products products={products} addToCart={addToCart} />
    </>
  );
}

export default App;
