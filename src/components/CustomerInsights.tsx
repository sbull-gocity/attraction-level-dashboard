
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
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">Customer Insights</h2>
          <div className="text-sm text-slate-500 font-medium">SECTION 01</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top 5 Source Markets */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Top 5 Source Markets</h3>
            
            <div className="space-y-3">
              {sourceMarkets.map((market) => (
                <div key={market.rank} className="flex items-center gap-4 py-1">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-semibold text-slate-700">
                    {market.rank}
                  </div>
                  <span className="text-base font-medium text-slate-700">{market.country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Party Size Pie Chart */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Party Size</h3>
            
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
            
            <div className="flex flex-wrap gap-3 mt-3">
              {partySizeData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-sm" 
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-sm text-slate-600 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NPS Chart */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-lg font-semibold text-slate-800">NPS of Customers Visiting The Shard</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-slate-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Net Promoter Score measures customer loyalty and satisfaction on a scale from -100 to 100</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl font-bold text-slate-800">65</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-slate-600">
              <span>This is</span>
              <span className="font-semibold text-slate-800">higher</span>
              <span>than the overall NPS for London - 64</span>
              <ArrowUp className="w-4 h-4 text-green-600" />
            </div>
          </div>

          {/* Pass Purchase to Usage Chart */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold text-slate-800">Pass Purchase to Usage for Customers Visiting The Shard</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-slate-400 cursor-help" />
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
                  tick={{ fontSize: 8, fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={40}
                />
                <YAxis type="number" hide />
                <Bar dataKey="value" fill="#64748b" stroke="#334155" strokeWidth={1} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </div>

          {/* Chart 5 - A Go City customer last visited The Shard */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
            <h3 className="text-lg font-semibold text-slate-800 mb-8">A Go City customer last visited The Shard</h3>
            
            <div className="flex items-center justify-center h-32">
              <span className="text-4xl font-bold text-slate-800">12 minutes ago</span>
            </div>
          </div>

          {/* Chart 6 - Go City app usage */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
            <h3 className="text-lg font-semibold text-slate-800 mb-8">On average, Go City customers who visit the Shard open the Go City app</h3>
            
            <div className="flex items-center justify-center h-32">
              <span className="text-6xl font-bold text-slate-800">5 times per day</span>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
