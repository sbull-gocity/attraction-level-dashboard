
import { Eye, Building, MapPin } from "lucide-react";

export function PopularCategoriesChart() {
  const categories = [
    { icon: Eye, label: "Observation decks" },
    { icon: Building, label: "Museums" },
    { icon: MapPin, label: "Landmarks" }
  ];

  return (
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-12">Most popular categories for customers who visit The Shard</h3>
      
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center gap-6">
            <category.icon className="h-8 w-8 text-teal-500" />
            <span className="text-lg text-slate-800 font-semibold">{category.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
