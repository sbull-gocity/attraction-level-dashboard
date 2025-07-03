
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function CustomerPassbyChart() {
  return (
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-12">
        <h3 className="text-xl font-bold text-slate-900">How many Go City customers walk past The Shard?</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-5 w-5 text-teal-500 cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p>This shows how many Go City customers were within 0.5 miles of The Shard over the last 30 days but didn't visit</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex items-center justify-center h-24">
        <span className="text-5xl font-bold text-teal-600">1,078</span>
      </div>
    </div>
  );
}
