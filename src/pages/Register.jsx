import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-gray-500 text-center mb-8 text-sm">Join the MakizhTech innovation community</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-yellow-400" required />
          </div>
          <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition active:scale-95">Create Account</button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-yellow-600 font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;