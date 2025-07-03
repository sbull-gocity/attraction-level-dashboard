
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

export function TripLengthChart() {
  return (
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-8">Trip Length for Customers who Visit The Shard</h3>
      
      <ChartContainer config={chartConfig} className="h-40">
        <BarChart data={tripLengthData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
          <XAxis 
            type="category" 
            dataKey="duration" 
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
  );
}
