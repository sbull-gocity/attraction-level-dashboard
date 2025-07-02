import { Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ratingsData = [
  { rating: '1', count: 5 },
  { rating: '2', count: 12 },
  { rating: '3', count: 28 },
  { rating: '4', count: 165 },
  { rating: '5', count: 190 },
];

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

        {/* Chart 4 - Ratings for The Shard from Go City customers */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center justify-between mb-4">
            <div className="w-4 h-4 border border-black rounded-full"></div>
            <span className="text-xs font-mono text-gray-400">CHART 4</span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Ratings for The Shard from Go City customers</h3>
          </div>
          
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratingsData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="rating" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <YAxis type="number" hide />
                <Bar 
                  dataKey="count" 
                  fill="#000000"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 5 - AI summary of reviews spanning 2 columns */}
        <div className="lg:col-span-2 bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center justify-between mb-4">
            <div className="w-4 h-4 border border-black rounded-full"></div>
            <span className="text-xs font-mono text-gray-400">CHART 5</span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">AI summary of reviews from Go City customers</h3>
          </div>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              Visitors consistently praise The Shard for its breathtaking panoramic views of London, 
              with many describing the experience as "unforgettable" and highlighting the spectacular 
              sunset and night-time city views from the observation deck.
            </p>
            <p>
              Many customers appreciate the smooth booking process and fast elevator system, though 
              some mention that the experience can feel rushed during peak times and would prefer 
              more time to fully enjoy the views without feeling pressured to move along.
            </p>
          </div>
        </div>

        {/* Chart 6 - Go City visitors to The Shard with an advance reservation */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center justify-between mb-4">
            <div className="w-4 h-4 border border-black rounded-full"></div>
            <span className="text-xs font-mono text-gray-400">CHART 6</span>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Go City visitors to The Shard with an advance reservation</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-black">86%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
