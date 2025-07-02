
export function AttractionFlowChart() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64 col-span-full">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 4</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-6">What attractions are customers visiting before and after The Shard?</h3>
      
      <div className="flex items-center justify-between h-32">
        {/* Left side attractions */}
        <div className="flex flex-col space-y-3 w-1/4">
          <div className="flex items-center">
            <span className="text-xs text-gray-700">Tower of London</span>
            <div className="ml-2 flex-1 h-px bg-gray-400"></div>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-700">Hop-on Hop-off Bus</span>
            <div className="ml-2 flex-1 h-px bg-gray-400"></div>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-700">Tower Bridge</span>
            <div className="ml-2 flex-1 h-px bg-gray-400"></div>
          </div>
        </div>
        
        {/* Center - The Shard with box */}
        <div className="flex flex-col items-center flex-1 mx-4">
          <div className="border-2 border-gray-400 rounded-lg p-4 bg-gray-50 w-full max-w-32">
            <div className="w-full h-12 bg-gray-200 border border-gray-300 rounded mb-2 flex items-center justify-center">
              <span className="text-xs text-gray-500">IMG</span>
            </div>
            <div className="text-center">
              <span className="text-lg font-bold text-black">The Shard</span>
            </div>
          </div>
        </div>
        
        {/* Right side attractions */}
        <div className="flex flex-col space-y-3 w-1/4">
          <div className="flex items-center justify-end">
            <div className="mr-2 flex-1 h-px bg-gray-400"></div>
            <span className="text-xs text-gray-700">London Zoo</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-2 flex-1 h-px bg-gray-400"></div>
            <span className="text-xs text-gray-700">St Paul's Cathedral</span>
          </div>
          <div className="flex items-center justify-end">
            <div className="mr-2 flex-1 h-px bg-gray-400"></div>
            <span className="text-xs text-gray-700">Cutty Sark</span>
          </div>
        </div>
      </div>
    </div>
  );
}
