
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function CustomerPassbyChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
      <div className="flex items-center gap-2 mb-8">
        <h3 className="text-lg font-semibold text-slate-800">How many Go City customers walk past The Shard?</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="h-4 w-4 text-slate-400 cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p>This shows how many Go City customers were within 0.5 miles of The Shard over the last 30 days but didn't visit</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex items-center justify-center h-20">
        <span className="text-4xl font-bold text-slate-800">1,078</span>
      </div>
    </div>
  );
}
