// src/pages/cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Price-a quantity-oda multiply panni total calculate pannuvom
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg shadow-sm border">
          <h2 className="text-xl text-gray-600 mb-4">Your cart is empty!</h2>
          <Link to="/products" className="bg-yellow-400 px-6 py-2 rounded-md font-medium hover:bg-yellow-500">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm border items-center">
                <img src={item.image} alt={item.name} className="h-24 w-24 object-contain" />
                
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-lg font-bold">₹{item.price.toLocaleString('en-IN')}</p>
                  
                  {/* +/- Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button 
                      onClick={() => updateQuantity(item.id, 'dec')}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold hover:bg-gray-300 transition"
                    >-</button>
                    <span className="font-semibold w-5 text-center">{item.quantity || 1}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 'inc')}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold hover:bg-gray-300 transition"
                    >+</button>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 text-sm hover:underline"
                    >Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="bg-white p-6 rounded-lg shadow-sm border h-fit">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">Order Summary</h2>
            <div className="flex justify-between mb-4 text-xl font-bold">
              <span>Total:</span>
              <span>₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
            <button className="w-full bg-yellow-400 py-3 rounded-md font-bold hover:bg-yellow-500 shadow-sm transition-all active:scale-95">
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;