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
  { name: "Solos", value: 25, fill: "#4FD1C7" },
  { name: "Couples", value: 45, fill: "#38B2AC" },
  { name: "Families", value: 20, fill: "#2C7A7B" },
  { name: "Groups", value: 10, fill: "#234E52" }
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
          <h2 className="text-3xl font-bold text-slate-900">Customer Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top 5 Source Markets */}
          <div className="bg-white rounded-2xl border-0 shadow-lg p-4 h-80 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Top 5 Source Markets</h3>
            
            <div className="space-y-3">
              {sourceMarkets.map((market) => (
                <div key={market.rank} className="flex items-center gap-4 py-1">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
                    {market.rank}
                  </div>
                  <span className="text-base font-semibold text-slate-800">{market.country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Party Size Pie Chart */}
          <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Party Size</h3>
            
            <ChartContainer config={chartConfig} className="h-40">
              <PieChart>
                <Pie
                  data={partySizeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  dataKey="value"
                  stroke="#ffffff"
                  strokeWidth={2}
                >
                  {partySizeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            
            <div className="flex flex-wrap gap-4 mt-4">
              {partySizeData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded-sm shadow-sm" 
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-sm text-slate-700 font-semibold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NPS Chart */}
          <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-xl font-bold text-slate-900">NPS of Customers Visiting The Shard</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-5 h-5 text-teal-500 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">Net Promoter Score measures customer loyalty and satisfaction on a scale from -100 to 100</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <span className="text-7xl font-bold text-teal-600">65</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <span>This is</span>
              <span className="font-bold text-slate-900">higher</span>
              <span>than the overall NPS for London - 64</span>
              <ArrowUp className="w-5 h-5 text-teal-500" />
            </div>
          </div>

          {/* Pass Purchase to Usage Chart */}
          <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-bold text-slate-900">Pass Purchase to Usage for Customers Visiting The Shard</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-5 h-5 text-teal-500 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">This tells you how much time has lapsed between a customer buying a pass and using it at The Shard</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <ChartContainer config={chartConfig} className="h-40">
              <BarChart data={purchaseToUsageData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <XAxis 
                  type="category" 
                  dataKey="timeframe" 
                  tick={{ fontSize: 10, fill: "#475569" }}
                  axisLine={false}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={40}
                />
                <YAxis type="number" hide />
                <Bar dataKey="value" fill="#5f9ea0" stroke="#4682b4" strokeWidth={1} radius={[6, 6, 0, 0]} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </div>

          {/* A Go City customer last visited The Shard */}
          <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-12">A Go City customer last visited The Shard</h3>
            
            <div className="flex items-center justify-center h-40">
              <span className="text-5xl font-bold text-teal-600">12 minutes ago</span>
            </div>
          </div>

          {/* Go City app usage */}
          <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-4">On average, Go City customers who visit the Shard open the Go City app</h3>
            
            <div className="flex items-center justify-center h-40">
              <span className="text-5xl font-bold text-teal-600">5 times per day</span>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
