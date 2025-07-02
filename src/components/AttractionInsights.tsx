import { Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function AttractionInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Attraction Insights</h2>
        <div className="text-xs text-gray-500 font-mono">SECTION 03</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chart 1 - The Shard Ranks */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center justify-between mb-4">
            <div className="w-4 h-4 border border-black rounded-full"></div>
            <span className="text-xs font-mono text-gray-400">CHART 1</span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">The Shard ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-gray-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-black mb-2">2nd</div>
            <div className="text-sm text-gray-600 text-center">
              out of all Go City attractions in London
            </div>
          </div>
        </div>

        {/* Chart 2 - The Shard Ranks in Observation Deck Category */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center justify-between mb-4">
            <div className="w-4 h-4 border border-black rounded-full"></div>
            <span className="text-xs font-mono text-gray-400">CHART 2</span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">The Shard ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-gray-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-black mb-2">1st</div>
            <div className="text-sm text-gray-600 text-center">
              out of all attractions in the Observation Deck category
            </div>
          </div>
        </div>

        {/* Chart 3 - Average Dwell Time at The Shard */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center justify-between mb-4">
            <div className="w-4 h-4 border border-black rounded-full"></div>
            <span className="text-xs font-mono text-gray-400">CHART 3</span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Average dwell time at The Shard</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-gray-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Dwell time based on anonymous geolocation data from Go City app</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-black">98 minutes</div>
          </div>
        </div>

        {/* Charts 4-6 remain unchanged */}
        {[4, 5, 6].map((i) => (
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
