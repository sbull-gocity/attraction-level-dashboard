
export function NearestAttractionsChart() {
  const attractions = [
    { name: "1. London Bridge Experience", distance: "(0.2 miles)" },
    { name: "2. Southwark Cathedral", distance: "(0.3 miles)" },
    { name: "3. The Bermondsey Bierkeller", distance: "(0.5 miles)" },
    { name: "4. Golden Hinde", distance: "(0.4 miles)" },
    { name: "5. The Monument to the Great Fire of London", distance: "(0.6 miles)" }
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
      <h3 className="text-lg font-semibold text-slate-800 mb-8">Nearest Go City attractions</h3>
      
      <div className="space-y-4">
        {attractions.map((attraction, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-slate-700 font-medium">{attraction.name}</span>
            <span className="text-xs text-slate-500 font-medium">{attraction.distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
