import React from "react";

const Cart = ({
  cart,
  total,
  updateQuantity,
  removeItem,
  onClose,
  onCheckout,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1 ml-3">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 border rounded-md text-center"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-right mb-4">
              Total: ₹{total}
            </h3>

            <button
              onClick={onCheckout}
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 transition"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
