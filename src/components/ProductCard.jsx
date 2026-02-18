import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // 1. Indha product cart-la munnadiye irukka nu check pannuvom
  const isItemInCart = cartItems.some((item) => item.id === product.id);

  const handleCartAction = () => {
    if (isItemInCart) {
      removeFromCart(product.id); // Cart-la irundha remove pannu
    } else {
      addToCart(product); // Cart-la illai na add pannu
    }
  };

  return (
    <div className="group border border-gray-200 rounded-md p-4 bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Product Image Section */}
      <div className="bg-gray-50 rounded-md p-4 mb-3 flex items-center justify-center h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="grow">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight hover:text-blue-600 mb-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center text-yellow-400 text-xs mb-2">
          <span>★★★★☆</span>
          <span className="text-gray-400 ml-1">(4.5)</span>
        </div>

        <p className="text-gray-500 text-xs line-clamp-2 mb-2">
          {product.description}
        </p>

        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-gray-400 line-through">₹{product.price + 1000}</span>
        </div>
      </div>

      {/* 2. Dynamic Button - Text matrum color state-ku yethamari maarum */}
      <button 
        onClick={handleCartAction}
        className={`mt-4 w-full text-sm font-medium py-2 rounded-full shadow-sm active:scale-95 transition-all ${
          isItemInCart 
          ? "bg-red-500 text-white hover:bg-red-600" 
          : "bg-[#FFD814] text-black hover:bg-[#F7CA00]"
        }`}
      >
        {isItemInCart ? "Remove from Cart" : "Add to Cart"}
      </button>

    </div>
  );
}

export default ProductCard;