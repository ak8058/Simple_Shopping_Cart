import React from "react";

const ProductCard = ({ product, addToCart, cart, updateQuantity }) => {
  const itemInCart = cart.find((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-contain mb-3"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 font-medium mb-3">₹{product.price}</p>

      {itemInCart ? (
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              updateQuantity(product.id, itemInCart.quantity - 1)
            }
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
          >
            -
          </button>
          <span className="text-lg font-semibold">{itemInCart.quantity}</span>
          <button
            onClick={() =>
              updateQuantity(product.id, itemInCart.quantity + 1)
            }
            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
