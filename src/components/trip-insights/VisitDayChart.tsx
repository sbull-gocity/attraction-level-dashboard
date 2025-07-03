
export function VisitDayChart() {
  return (
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-12">Customers usually visit The Shard on</h3>
      
      <div className="flex items-center justify-center h-24">
        <span className="text-5xl font-bold text-teal-600">Day 2</span>
      </div>
      
      <div className="flex items-center justify-center mt-12">
        <span className="text-base text-slate-700 font-semibold">of their trip to London</span>
      </div>
    </div>
  );
}
