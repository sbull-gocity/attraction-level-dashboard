
import { Users, MapPin, Star } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  {
    id: "customer",
    title: "Customer Insights",
    icon: Users,
  },
  {
    id: "trip",
    title: "Trip Insights", 
    icon: MapPin,
  },
  {
    id: "attraction",
    title: "Attraction Insights",
    icon: Star,
  },
];

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  return (
    <Sidebar className="w-64 border-r-2 border-black/20 bg-white">
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-mono text-gray-500 mb-4 px-4">
            ANALYTICS SECTIONS
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveTab(item.id)}
                    className={`
                      h-12 px-4 w-full justify-start font-medium
                      border-l-4 transition-all duration-200
                      ${activeTab === item.id 
                        ? 'border-l-black bg-gray-100 text-black' 
                        : 'border-l-transparent hover:border-l-gray-300 hover:bg-gray-50 text-gray-700'
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5 mr-3" strokeWidth={1.5} />
                    <span className="text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
