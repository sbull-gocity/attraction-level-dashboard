import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { Info, Eye, Building, MapPin, Clock } from "lucide-react";

const tripLengthData = [
  { duration: "1-2 days", value: 32 },
  { duration: "3-4 days", value: 28 },
  { duration: "5-6 days", value: 22 },
  { duration: "6-7 days", value: 12 },
  { duration: "8+ days", value: 6 }
];

const chartConfig = {
  value: { label: "Percentage" }
};

export function TripInsights() {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Trip Insights</h2>
          <div className="text-xs text-gray-500 font-mono">SECTION 02</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Chart 1 - Trip Length for Customers who Visit The Shard */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 1</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-4">Trip Length for Customers who Visit The Shard</h3>
            
            <ChartContainer config={chartConfig} className="h-32">
              <BarChart data={tripLengthData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <XAxis 
                  type="category" 
                  dataKey="duration" 
                  tick={{ fontSize: 8, fill: "#666" }}
                  axisLine={false}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={40}
                />
                <YAxis type="number" hide />
                <Bar dataKey="value" fill="#404040" stroke="#000000" strokeWidth={1} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </div>

          {/* Chart 2 - Customers usually visit The Shard on */}
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

          {/* Chart 3 - Customers who visit The Shard go to */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 3</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-8">Customers who visit The Shard go to</h3>
            
            <div className="flex items-center justify-center h-20">
              <span className="text-4xl font-bold text-black">5</span>
            </div>
            
            <div className="flex items-center justify-center mt-8">
              <span className="text-sm text-gray-600">other Go City attractions</span>
            </div>
          </div>

          {/* Chart 4 - What attractions are customers visiting before and after The Shard? */}
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

          {/* Chart 5 - How many Go City customers walk past The Shard? */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 5</span>
            </div>
            
            <div className="flex items-center gap-2 mb-8">
              <h3 className="text-sm font-bold text-black">How many Go City customers walk past The Shard?</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-500 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>This shows how many Go City customers were within 0.5 miles of The Shard over the last 30 days but didn't visit</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="flex items-center justify-center h-20">
              <span className="text-4xl font-bold text-black">1,078</span>
            </div>
          </div>

          {/* Chart 6 - Nearest Go City attractions */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 6</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-6">Nearest Go City attractions</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800">1. London Bridge Experience</span>
                <span className="text-xs text-gray-500">(0.2 miles)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800">2. Southwark Cathedral</span>
                <span className="text-xs text-gray-500">(0.3 miles)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800">3. The Bermondsey Bierkeller</span>
                <span className="text-xs text-gray-500">(0.5 miles)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800">4. Golden Hinde</span>
                <span className="text-xs text-gray-500">(0.4 miles)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-800">5. The Monument to the Great Fire of London</span>
                <span className="text-xs text-gray-500">(0.6 miles)</span>
              </div>
            </div>
          </div>

          {/* Chart 7 - Most popular categories for customers who visit The Shard */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 7</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-6">Most popular categories for customers who visit The Shard</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-800">Observation decks</span>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-800">Museums</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-sm text-gray-800">Landmarks</span>
              </div>
            </div>
          </div>

          {/* Chart 8 - Top 3 itineraries which include The Shard */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 col-span-full">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 8</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-6">Top 3 itineraries which include The Shard</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 2-Day Trip */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="font-semibold text-black">2-Day Trip</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-black">Day 1:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• The Shard</li>
                    <li>• Tower of London</li>
                    <li>• Tower Bridge</li>
                  </ul>
                  <div className="font-medium text-black mt-3">Day 2:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• London Eye</li>
                    <li>• Westminster Abbey</li>
                    <li>• Big Ben</li>
                  </ul>
                </div>
              </div>

              {/* 3-Day Trip */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="font-semibold text-black">3-Day Trip</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-black">Day 1:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• The Shard</li>
                    <li>• Borough Market</li>
                    <li>• Southwark Cathedral</li>
                  </ul>
                  <div className="font-medium text-black mt-3">Day 2:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• St Paul's Cathedral</li>
                    <li>• Tate Modern</li>
                    <li>• Shakespeare's Globe</li>
                  </ul>
                  <div className="font-medium text-black mt-3">Day 3:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• British Museum</li>
                    <li>• Covent Garden</li>
                  </ul>
                </div>
              </div>

              {/* 4-Day Trip */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <span className="font-semibold text-black">4-Day Trip</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="font-medium text-black">Day 1:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• The Shard</li>
                    <li>• London Bridge Experience</li>
                    <li>• HMS Belfast</li>
                  </ul>
                  <div className="font-medium text-black mt-3">Day 2:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• Tower of London</li>
                    <li>• Tower Bridge</li>
                    <li>• St Katharine Docks</li>
                  </ul>
                  <div className="font-medium text-black mt-3">Day 3:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• Westminster Abbey</li>
                    <li>• Houses of Parliament</li>
                    <li>• Churchill War Rooms</li>
                  </ul>
                  <div className="font-medium text-black mt-3">Day 4:</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    <li>• Kensington Palace</li>
                    <li>• Natural History Museum</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
