import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";
import { Info, ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const sourceMarkets = [
  { rank: 1, country: "USA" },
  { rank: 2, country: "UK" },
  { rank: 3, country: "Germany" },
  { rank: 4, country: "France" },
  { rank: 5, country: "Spain" }
];

const partySizeData = [
  { name: "Solos", value: 25, fill: "#000000" },
  { name: "Couples", value: 45, fill: "#404040" },
  { name: "Families", value: 20, fill: "#808080" },
  { name: "Groups", value: 10, fill: "#c0c0c0" }
];

const purchaseToUsageData = [
  { timeframe: "Less than 1 day", value: 35 },
  { timeframe: "1-7 days", value: 28 },
  { timeframe: "7-30 days", value: 22 },
  { timeframe: "30+ days", value: 15 }
];

const chartConfig = {
  solos: { label: "Solos" },
  couples: { label: "Couples" },  
  families: { label: "Families" },
  groups: { label: "Groups" }
};

export function CustomerInsights() {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Customer Insights</h2>
          <div className="text-xs text-gray-500 font-mono">SECTION 01</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top 5 Source Markets */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 1</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-4">Top 5 Source Markets</h3>
            
            <div className="space-y-3">
              {sourceMarkets.map((market) => (
                <div key={market.rank} className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-b-0">
                  <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs font-mono">
                    {market.rank}
                  </div>
                  <span className="text-sm font-medium text-black">{market.country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Party Size Pie Chart */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 2</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-2">Party Size</h3>
            
            <ChartContainer config={chartConfig} className="h-32">
              <PieChart>
                <Pie
                  data={partySizeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  dataKey="value"
                  stroke="#000000"
                  strokeWidth={1}
                >
                  {partySizeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {partySizeData.map((item) => (
                <div key={item.name} className="flex items-center gap-1">
                  <div 
                    className="w-2 h-2 border border-black" 
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NPS Chart */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 3</span>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-sm font-bold text-black">NPS of Customers Visiting The Shard</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Net Promoter Score measures customer loyalty and satisfaction on a scale from -100 to 100</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl font-bold text-black">65</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>This is</span>
              <span className="font-bold">higher</span>
              <span>than the overall NPS for London - 64</span>
              <ArrowUp className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* Pass Purchase to Usage Chart */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 4</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-sm font-bold text-black">Pass Purchase to Usage for Customers Visiting The Shard</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">This tells you how much time has lapsed between a customer buying a pass and using it at The Shard</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <ChartContainer config={chartConfig} className="h-32">
              <BarChart data={purchaseToUsageData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <XAxis 
                  type="category" 
                  dataKey="timeframe" 
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

          {/* Chart 5 - A Go City customer last visited The Shard */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 5</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-8">A Go City customer last visited The Shard</h3>
            
            <div className="flex items-center justify-center h-32">
              <span className="text-4xl font-bold text-black">12 minutes ago</span>
            </div>
          </div>

          {/* Chart 6 - Placeholder */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 6</span>
            </div>
            
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              <div className="h-2 bg-gray-200 rounded w-1/2"></div>
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
        </div>
      </div>
    </TooltipProvider>
  );
}
