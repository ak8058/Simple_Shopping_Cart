import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import LoadingScreen from "./pages/LoadingScreen";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartLoading, setCartLoading] = useState(false);

  // 1. Fetch Products
  useEffect(() => {
    axios.get("http://localhost:2000/api/products").then((res) => {
      setProducts(res.data.products);
      setLoading(false);
    });
  }, []);

  // 2. Save Cart to LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 3. Add to Cart Logic
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 4. Update Quantity
  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
    }
  };

  // 5. Remove Item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 6. Calculate Total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 7. Checkout
  const handleCheckout = async () => {
    setCartLoading(true);
    const order = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
    await axios.post("http://localhost:2000/api/checkout", { order });
    alert("Checkout successful!");
    setCart([]);
    setCartLoading(false);
    setShowCart(false);
  };
  if (loading) return <LoadingScreen />;
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">🛒 Simple Shopping</h1>
        <button
          className="bg-white text-indigo-600 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          onClick={() => setShowCart(true)}
        >
          Cart ({cart.length})
        </button>
      </header>

      {/* Products */}
      <Home
        products={products}
        addToCart={addToCart}
        cart={cart}
        updateQuantity={updateQuantity}
      />

      {/* Cart Modal */}
      {showCart && (
        <Cart
          cart={cart}
          total={total}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          onClose={() => setShowCart(false)}
          onCheckout={handleCheckout}
        />
      )}
      {cartLoading && <LoadingScreen />}
    </div>
  );
};

export default App;
