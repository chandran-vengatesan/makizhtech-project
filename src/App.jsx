import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; // 🚀 1. Import Footer
import Home from "./pages/Home";
import RD from "./pages/RD";
import Cart from "./pages/cart"; 
import Contact from "./pages/contact";
import AllProducts from "./pages/AllProducts"; 
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext"; 
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar /> 
        <main className="min-h-[80vh]"> {/* Footer-a bottom-la thalla min-h add pannuvom */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/rd" element={<RD />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer /> {/* 🚀 2. Place Footer here */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;