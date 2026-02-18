import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Innovating the Future with <span className="text-yellow-400">MakizhTech</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Your one-stop destination for cutting-edge electronics, custom R&D solutions, and high-quality sensor technology. We don't just sell parts; we build innovations.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/products" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg">
            Shop Products
          </Link>
          <Link to="/rd" className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
            Explore R&D
          </Link>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Premium Shopping</h3>
            <p className="text-gray-600">
              Top-tier electronics and sensors. From hobbyist kits to industrial-grade components, we've got you covered.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Bulk Orders</h3>
            <p className="text-gray-600">
              Need items in large quantities? We specialize in bulk supplies with competitive pricing and fast delivery across India.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Not on the Website?</h3>
            <p className="text-gray-600">
              Looking for a rare component? Contact us, and we will source and deliver any electronic part directly to you.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Innovation Highlight */}
      <section className="bg-gray-50 py-20 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneering R&D</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At MakizhTech, we solve real-world problems. Our R&D lab focuses on custom hardware solutions, IoT integrations, and prototype development.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-yellow-500">✔</span> Custom Circuit Design (PCB)
              </div>
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-yellow-500">✔</span> Embedded System Engineering
              </div>
              <div className="flex items-center gap-3 font-medium text-gray-800">
                <span className="text-yellow-500">✔</span> Industrial IoT Prototypes
              </div>
            </div>
          </div>
          
          {/* Section where the error occurred is fixed here */}
          <div className="flex-1 bg-black rounded-3xl p-12 text-center shadow-2xl">
             <div className="text-6xl mb-4">🔬</div>
             <h3 className="text-3xl font-bold text-white mb-2">Lab Innovation</h3>
             <p className="text-gray-400 italic">Where ideas turn into hardware reality.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;