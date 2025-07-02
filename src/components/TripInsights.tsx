
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

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
                <div className="ml-2 w-16 h-px bg-gray-400"></div>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-700">Hop-on Hop-off Bus</span>
                <div className="ml-2 w-16 h-px bg-gray-400"></div>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-700">Tower Bridge</span>
                <div className="ml-2 w-16 h-px bg-gray-400"></div>
              </div>
            </div>
            
            {/* Center - The Shard with box */}
            <div className="flex flex-col items-center w-1/2">
              <div className="border-2 border-gray-400 rounded-lg p-4 bg-gray-50">
                <div className="w-16 h-12 bg-gray-200 border border-gray-300 rounded mb-2 flex items-center justify-center">
                  <span className="text-xs text-gray-500">IMG</span>
                </div>
                <span className="text-lg font-bold text-black">The Shard</span>
              </div>
            </div>
            
            {/* Right side attractions */}
            <div className="flex flex-col space-y-3 w-1/4">
              <div className="flex items-center justify-end">
                <div className="mr-2 w-16 h-px bg-gray-400"></div>
                <span className="text-xs text-gray-700">London Zoo</span>
              </div>
              <div className="flex items-center justify-end">
                <div className="mr-2 w-16 h-px bg-gray-400"></div>
                <span className="text-xs text-gray-700">St Paul's Cathedral</span>
              </div>
              <div className="flex items-center justify-end">
                <div className="mr-2 w-16 h-px bg-gray-400"></div>
                <span className="text-xs text-gray-700">Cutty Sark</span>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining placeholder charts */}
        {[5, 6].map((i) => (
          <div key={i} className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART {i}</span>
            </div>
            
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded w-2/3"></div>
              <div className="h-2 bg-gray-200 rounded w-4/5"></div>
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
