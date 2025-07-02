
export function AttractionInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Attraction Insights</h2>
        <div className="text-xs text-gray-500 font-mono">SECTION 03</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART {i}</span>
            </div>
            
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded w-5/6"></div>
              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
            </div>
            
            <div className="mt-8 space-y-3">
              <div className="flex justify-between">
                <div className="w-8 h-8 border border-gray-300 rounded"></div>
                <div className="w-8 h-8 border border-gray-300 rounded"></div>
                <div className="w-8 h-8 border border-gray-300 rounded"></div>
              </div>
              
              <div className="h-20 border border-gray-300 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400 font-mono">VISUALIZATION</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
