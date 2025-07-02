
import { TooltipProvider } from "@/components/ui/tooltip";
import { TripLengthChart } from "./trip-insights/TripLengthChart";
import { VisitDayChart } from "./trip-insights/VisitDayChart";
import { AttractionsCountChart } from "./trip-insights/AttractionsCountChart";
import { AttractionFlowChart } from "./trip-insights/AttractionFlowChart";
import { CustomerPassbyChart } from "./trip-insights/CustomerPassbyChart";
import { NearestAttractionsChart } from "./trip-insights/NearestAttractionsChart";
import { PopularCategoriesChart } from "./trip-insights/PopularCategoriesChart";
import { TopItinerariesChart } from "./trip-insights/TopItinerariesChart";

export function TripInsights() {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Trip Insights</h2>
          <div className="text-xs text-gray-500 font-mono">SECTION 02</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TripLengthChart />
          <VisitDayChart />
          <AttractionsCountChart />
          <AttractionFlowChart />
          <CustomerPassbyChart />
          <NearestAttractionsChart />
          <PopularCategoriesChart />
          <TopItinerariesChart />
        </div>
      </div>
    </TooltipProvider>
  );
}
