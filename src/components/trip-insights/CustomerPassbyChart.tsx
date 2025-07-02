
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function CustomerPassbyChart() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-80">
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
  );
}
