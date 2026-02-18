import React from 'react';

function RD() {
  const services = [
    {
      title: "Sensor Prototyping",
      description: "Custom sensor development from concept to functional prototypes using advanced microcontrollers.",
      icon: "🔬"
    },
    {
      title: "IoT Integration",
      description: "Connecting industrial sensors to cloud platforms for real-time data monitoring and analytics.",
      icon: "🌐"
    },
    {
      title: "Embedded Systems",
      description: "Designing efficient firmware and hardware architectures for specialized automation tasks.",
      icon: "📟"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Development</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Innovating the future of sensor technology through rigorous testing and cutting-edge engineering at MakizhTech.
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Expertise Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Project Pipeline / Process */}
        <div className="bg-yellow-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our R&D Process</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <div className="text-yellow-600 font-bold text-lg mb-2">01. Analysis</div>
              <p className="text-gray-700 text-sm">Identifying technical challenges and defining sensor specifications for the target application.</p>
            </div>
            <div className="flex-1 border-t md:border-t-0 md:border-l border-yellow-200 pt-6 md:pt-0 md:pl-8">
              <div className="text-yellow-600 font-bold text-lg mb-2">02. Design</div>
              <p className="text-gray-700 text-sm">Creating circuit schematics and 3D models for the prototype using industry-standard tools.</p>
            </div>
            <div className="flex-1 border-t md:border-t-0 md:border-l border-yellow-200 pt-6 md:pt-0 md:pl-8">
              <div className="text-yellow-600 font-bold text-lg mb-2">03. Testing</div>
              <p className="text-gray-700 text-sm">Rigorous stress testing and calibration to ensure high accuracy and long-term reliability.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a custom requirement?</h2>
          <p className="text-gray-600 mb-8">Let's build your next big innovation together.</p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition shadow-lg active:scale-95">
            Start a Collaboration
          </button>
        </div>
      </div>
    </div>
  );
}

export default RD;