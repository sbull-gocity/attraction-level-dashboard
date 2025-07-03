
import { ArrowRight } from "lucide-react";

export function AttractionFlowChart() {
  const flowData = [
    { from: "The Shard", to: "London Bridge", percentage: "15%" },
    { from: "The Shard", to: "Tower Bridge", percentage: "12%" },
    { from: "The Shard", to: "Borough Market", percentage: "8%" }
  ];

  return (
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-8">Where customers go after visiting The Shard</h3>
      
      <div className="space-y-6">
        {flowData.map((flow, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-base text-slate-800 font-semibold">{flow.from}</span>
              <ArrowRight className="h-5 w-5 text-teal-500" />
              <span className="text-base text-slate-800 font-semibold">{flow.to}</span>
            </div>
            <span className="text-sm text-teal-600 font-semibold">{flow.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
