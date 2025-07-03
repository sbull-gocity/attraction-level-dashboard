
export function AttractionFlowChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64 col-span-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-8">What attractions are customers visiting before and after The Shard?</h3>
      
      <div className="flex items-center justify-between h-32">
        {/* Left side attractions */}
        <div className="flex flex-col space-y-3 w-1/4">
          <div className="flex items-center">
            <span className="text-sm text-slate-700 font-medium">Tower of London</span>
            <div className="ml-2 flex-1 h-px bg-slate-300"></div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-slate-700 font-medium">Hop-on Hop-off Bus</span>
            <div className="ml-2 flex-1 h-px bg-slate-300"></div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-slate-700 font-medium">Tower Bridge</span>
            <div className="ml-2 flex-1 h-px bg-slate-300"></div>
          </div>
        </div>
        
        {/* Center - The Shard with box */}
        <div className="flex flex-col items-center flex-1 mx-4">
          <div className="border-2 border-slate-200 rounded-xl p-4 bg-slate-50 w-full max-w-32">
            <div className="w-full h-12 bg-slate-200 border border-slate-300 rounded-lg mb-2 flex items-center justify-center">
              <span className="text-xs text-slate-500 font-medium">IMG</span>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold text-slate-800">The Shard</span>
            </div>
          </div>
        </div>
        
        {/* Right side attractions */}
        <div className="flex flex-col space-y-3 w-1/4">
          <div className="flex items-center justify-end">
            <div className="mr-2 flex-1 h-px bg-slate-300"></div>
            <span className="text-sm text-slate-700 font-medium">London Zoo</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-2 flex-1 h-px bg-slate-300"></div>
            <span className="text-sm text-slate-700 font-medium">St Paul's Cathedral</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-2 flex-1 h-px bg-slate-300"></div>
            <span className="text-sm text-slate-700 font-medium">Cutty Sark</span>
          </div>
        </div>
      </div>
    </div>
  );
}
