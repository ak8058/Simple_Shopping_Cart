import React from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ products, addToCart, cart, updateQuantity }) => {
  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          cart={cart}
          updateQuantity={updateQuantity}
        />
      ))}
    </main>
  );
};

export default Home;
