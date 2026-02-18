import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isItemInCart = cartItems.some((item) => item.id === product.id);

  const handleCartAction = () => {
    if (isItemInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="group border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      
     {/* 🖼️ Product Image Section - Fixed Zoom Issue */}
<div className="relative h-52 w-full overflow-hidden bg-[#f8f8f8] p-4 flex items-center justify-center">
  <img
    src={product.image}
    alt={product.name}
    // 'object-contain' image-a crop pannaadhu, full-ah kaattum
    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
    onError={(e) => {
      e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
    }}
  />
  
  {/* Discount Badge */}
  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
    SAVE 20%
  </div>
</div>

      {/* Product Info Padding added */}
      <div className="p-4 flex flex-col grow">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-tight hover:text-blue-600 mb-2 min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center text-yellow-400 text-xs mb-2">
          <span>★★★★☆</span>
          <span className="text-gray-400 ml-1">(4.5)</span>
        </div>

        <p className="text-gray-500 text-xs line-clamp-2 mb-3 grow">
          {product.description}
        </p>

        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xl font-extrabold text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-gray-400 line-through">₹{(product.price * 1.25).toFixed(0)}</span>
        </div>
        
        <p className="text-[10px] text-green-600 font-semibold mb-4">FREE Delivery</p>

        {/* Dynamic Action Button */}
        <button 
          onClick={handleCartAction}
          className={`w-full text-sm font-bold py-2.5 rounded-lg shadow-sm active:scale-95 transition-all duration-300 ${
            isItemInCart 
            ? "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white" 
            : "bg-yellow-400 text-black hover:bg-yellow-500 border border-yellow-500"
          }`}
        >
          {isItemInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
