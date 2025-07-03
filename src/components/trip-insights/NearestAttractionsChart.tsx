
export function NearestAttractionsChart() {
  const attractions = [
    { name: "1. London Bridge Experience", distance: "(0.2 miles)" },
    { name: "2. Southwark Cathedral", distance: "(0.3 miles)" },
    { name: "3. The Bermondsey Bierkeller", distance: "(0.5 miles)" },
    { name: "4. Golden Hinde", distance: "(0.4 miles)" },
    { name: "5. The Monument to the Great Fire of London", distance: "(0.6 miles)" }
  ];

  return (
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-12">Nearest Go City attractions</h3>
      
      <div className="space-y-6">
        {attractions.map((attraction, index) => (
          <div key={index} className="flex items-center justify-between py-1">
            <span className="text-base text-slate-800 font-semibold">{attraction.name}</span>
            <span className="text-sm text-teal-600 font-semibold">{attraction.distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
