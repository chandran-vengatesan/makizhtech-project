import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Mission */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-bold flex mb-4">
            <span className="text-yellow-400">Makizh</span>
            <span>Tech</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Innovating the future of sensor technology and electronics. 
            We provide custom R&D and bulk supplies for industrial excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-yellow-400 w-fit pb-1">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-yellow-400 transition">Products</Link></li>
            <li><Link to="/rd" className="hover:text-yellow-400 transition">R&D Section</Link></li>
            <li><Link to="/partners" className="hover:text-yellow-400 transition">Our Partners</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-yellow-400 w-fit pb-1">Our Expertise</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Bulk Electronic Supply</li>
            <li>Custom Sensor Design</li>
            <li>IoT Solutions</li>
            <li>Prototype Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-4 border-b border-yellow-400 w-fit pb-1">Stay Connected</h4>
          <p className="text-gray-400 text-sm mb-2">Chennai, Tamil Nadu, India</p>
          <p className="text-gray-400 text-sm mb-4">Email: support@makizhtech.com</p>
          <div className="flex gap-4">
             <span className="cursor-pointer hover:text-yellow-400 text-xs">LinkedIn</span>
             <span className="cursor-pointer hover:text-yellow-400 text-xs">Twitter</span>
             <span className="cursor-pointer hover:text-yellow-400 text-xs">Instagram</span>
          </div>
        </div>
      </div>

      {/* Bottom Section with Your Name */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs mb-2">
          © 2026 <span className="text-yellow-400 font-bold">MakizhTech</span>. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-[10px] tracking-widest uppercase">
          Designed & Developed by <span className="text-white font-medium hover:text-yellow-400 cursor-pointer transition">Chandran P V</span>
        </p>
      </div>
      
    </footer>
  );
}

export default Footer;