
export function NearestAttractionsChart() {
  const attractions = [
    { name: "1. London Bridge Experience", distance: "(0.2 miles)" },
    { name: "2. Southwark Cathedral", distance: "(0.3 miles)" },
    { name: "3. The Bermondsey Bierkeller", distance: "(0.5 miles)" },
    { name: "4. Golden Hinde", distance: "(0.4 miles)" },
    { name: "5. The Monument to the Great Fire of London", distance: "(0.6 miles)" }
  ];

  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-80">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 6</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-6">Nearest Go City attractions</h3>
      
      <div className="space-y-3">
        {attractions.map((attraction, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-800">{attraction.name}</span>
            <span className="text-xs text-gray-500">{attraction.distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
