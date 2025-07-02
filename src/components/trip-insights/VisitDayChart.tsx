
export function VisitDayChart() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 2</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-8">Customers usually visit The Shard on</h3>
      
      <div className="flex items-center justify-center h-20">
        <span className="text-4xl font-bold text-black">Day 2</span>
      </div>
      
      <div className="flex items-center justify-center mt-8">
        <span className="text-sm text-gray-600">of their trip to London</span>
      </div>
    </div>
  );
}
