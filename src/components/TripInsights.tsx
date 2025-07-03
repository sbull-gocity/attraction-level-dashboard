
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
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900">Trip Insights</h2>
          <div className="text-xs text-teal-600 font-bold tracking-wider uppercase">SECTION 02</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
