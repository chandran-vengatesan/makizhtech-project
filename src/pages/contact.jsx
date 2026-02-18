import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting MakizhTech! We will get back to you soon.");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our sensors or R&D services? Our team is here to help you with the best technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          
          {/* Left Side: Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                  required
                ></textarea>
              </div>
              
              {/* Fixing the line that caused the error */}
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-all active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600">📍</div>
                  <div>
                    <h3 className="font-bold">Our Office</h3>
                    <p className="text-gray-600 text-sm">123, Tech Park Road, Chennai, Tamil Nadu - 600001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">📞</div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg text-green-600">✉️</div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600 text-sm">support@makizhtech.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dummy Map Placeholder */}
            <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden relative flex items-center justify-center border border-gray-300">
               <span className="text-gray-500 font-medium italic text-center px-4">
                 [ Google Map Integration - Coming Soon ]
               </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;