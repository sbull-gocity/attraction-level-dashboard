
import { Eye, Building, MapPin } from "lucide-react";

export function PopularCategoriesChart() {
  const categories = [
    { icon: Eye, label: "Observation decks" },
    { icon: Building, label: "Museums" },
    { icon: MapPin, label: "Landmarks" }
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
      <h3 className="text-lg font-semibold text-slate-800 mb-8">Most popular categories for customers who visit The Shard</h3>
      
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-4">
            <category.icon className="h-6 w-6 text-slate-600" />
            <span className="text-base text-slate-700 font-medium">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
