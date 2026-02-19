import React from 'react';

function Partners() {
  const partners = [
    { name: "TechNova Electronics", type: "Component Partner", logo: "🔌" },
    { name: "Global Sensors Ltd", type: "Manufacturing Partner", logo: "📡" },
    { name: "SwiftLogistics", type: "Delivery Partner", logo: "🚚" },
    { name: "Innovate Labs", type: "R&D Collaborator", logo: "🧪" },
    { name: "MicroSystems India", type: "Supply Chain", logo: "📟" },
    { name: "EcoEnergy Tech", type: "Sustainability Partner", logo: "🔋" }
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Strategic Partners</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          MakizhTech collaborates with industry leaders to ensure high-quality sensor production and seamless global distribution.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="p-8 border border-gray-100 rounded-2xl bg-gray-50 hover:shadow-lg transition-all duration-300 flex flex-col items-center">
              <div className="text-5xl mb-4">{partner.logo}</div>
              <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
              <p className="text-sm text-yellow-600 font-medium mt-1">{partner.type}</p>
              <p className="text-gray-500 text-xs mt-4 leading-relaxed text-center">
                Providing specialized technical support and resources to scale innovation globally.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black text-white p-12 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Interested in Partnering with Us?</h2>
          <p className="text-gray-400 mb-8">We are always looking for reliable suppliers and R&D collaborators.</p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
  );
}


export default Partners;
