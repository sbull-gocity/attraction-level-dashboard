
export function AttractionFlowChart() {
  return (
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 col-span-full hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-12">What attractions are customers visiting before and after The Shard?</h3>
      
      <div className="flex items-center justify-between h-40">
        {/* Left side attractions */}
        <div className="flex flex-col space-y-4 w-1/4">
          <div className="flex items-center">
            <span className="text-base text-slate-800 font-semibold">Tower of London</span>
            <div className="ml-3 flex-1 h-0.5 bg-teal-500"></div>
          </div>
          <div className="flex items-center">
            <span className="text-base text-slate-800 font-semibold">Hop-on Hop-off Bus</span>
            <div className="ml-3 flex-1 h-0.5 bg-teal-500"></div>
          </div>
          <div className="flex items-center">
            <span className="text-base text-slate-800 font-semibold">Tower Bridge</span>
            <div className="ml-3 flex-1 h-0.5 bg-teal-500"></div>
          </div>
        </div>
        
        {/* Center - The Shard with image */}
        <div className="flex flex-col items-center flex-1 mx-6">
          <div className="border-2 border-stone-200 rounded-2xl p-6 w-full max-w-40 shadow-md" style={{ backgroundColor: '#F5F4F0' }}>
            <div className="w-full h-16 border border-stone-300 rounded-lg mb-3 overflow-hidden">
              <img 
                src="/lovable-uploads/4c13f1f4-bdc6-4255-8e4f-a8017c9b52a8.png" 
                alt="The Shard London" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <span className="text-xl font-bold text-slate-900">The Shard</span>
            </div>
          </div>
        </div>
        
        {/* Right side attractions */}
        <div className="flex flex-col space-y-4 w-1/4">
          <div className="flex items-center justify-end">
            <div className="mr-3 flex-1 h-0.5 bg-teal-500"></div>
            <span className="text-base text-slate-800 font-semibold">London Zoo</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-3 flex-1 h-0.5 bg-teal-500"></div>
            <span className="text-base text-slate-800 font-semibold">St Paul's Cathedral</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-3 flex-1 h-0.5 bg-teal-500"></div>
            <span className="text-base text-slate-800 font-semibold">Cutty Sark</span>
          </div>
        </div>
      </div>
    </div>
  );
}
