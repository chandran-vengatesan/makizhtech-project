import { createContext, useState, useContext } from "react";

// 1. Context create pannuvom
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Product-a cart-la add panna
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Quantity-a increase/decrease panna (+/-)
  const updateQuantity = (id, type) => {
    setCartItems((prev) => 
      prev.map(item => {
        if (item.id === id) {
          const newQty = type === 'inc' ? (item.quantity || 1) + 1 : (item.quantity || 1) - 1;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  // Product-a cart-la irundhu thookka
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// 🚀 MUKKIYAM: Indha line dhaan Navbar-la error vara kaaranam. 
// 'export' keyword irukkunu confirm pannikonga.
export const useCart = () => useContext(CartContext);