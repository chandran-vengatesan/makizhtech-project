import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-yellow-400">MakizhTech</Link>
      
      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/products" className="hover:text-yellow-400 transition">Products</Link>
        <Link to="/rd" className="hover:text-yellow-400 transition">R&D</Link>
        <Link to="/partners" className="hover:text-yellow-400 transition text-yellow-400">Our Partners</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
      </div>

      <Link to="/cart" className="relative bg-yellow-400 text-black px-4 py-2 rounded-md font-bold">
        Cart ({cartItems.length})
      </Link>
      {/* Navbar.jsx-la link add pannunga */}
<div className="flex items-center gap-6">
  <Link to="/login" className="hover:text-yellow-400 text-sm font-medium">Login</Link>
  
</div>
    </nav>
  );
}

export default Navbar;