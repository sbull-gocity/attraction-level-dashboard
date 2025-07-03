
import { Users, MapPin, Star, MessageCircle } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
  {
    id: "ask",
    title: "Ask us anything",
    icon: MessageCircle,
  },
];

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  return (
    <Sidebar className="border-r-2 border-black/20 bg-white">
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4 px-4">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveTab(item.id)}
                    className={`
                      h-16 px-6 w-full justify-start font-medium text-base rounded-full
                      border-2 transition-all duration-200
                      ${item.id === 'ask' 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent' 
                        : activeTab === item.id 
                          ? 'bg-[#1e293b] text-white border-[#1e293b]'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    <item.icon className="w-8 h-8 mr-4" strokeWidth={1.5} />
                    <span>{item.title}</span>
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
