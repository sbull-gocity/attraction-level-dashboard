
import { Users, MapPin, Star } from "lucide-react";

interface TopNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  {
    id: "customer",
    title: "Customer insights",
    icon: Users,
  },
  {
    id: "trip",
    title: "Trip insights", 
    icon: MapPin,
  },
  {
    id: "attraction",
    title: "Attraction insights",
    icon: Star,
  },
];

export function TopNavigation({ activeTab, setActiveTab }: TopNavigationProps) {
  return (
    <nav className="w-full bg-white border-b-2 border-black/20 px-6 py-4">
      <div className="flex gap-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              flex items-center gap-3 px-6 py-3 rounded-full font-medium text-base
              border-2 transition-all duration-200
              ${activeTab === item.id 
                ? 'bg-[#1e293b] text-white border-[#1e293b]' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }
            `}
          >
            <item.icon className="w-6 h-6" strokeWidth={1.5} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
