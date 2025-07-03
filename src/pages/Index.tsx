
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { CustomerInsights } from "@/components/CustomerInsights";
import { TripInsights } from "@/components/TripInsights";
import { AttractionInsights } from "@/components/AttractionInsights";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "customer":
        return <CustomerInsights />;
      case "trip":
        return <TripInsights />;
      case "attraction":
        return <AttractionInsights />;
      default:
        return <CustomerInsights />;
    }
  };

  return (
    <SidebarProvider>
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <SidebarInset>
        <DashboardHeader />
        
        <main className="flex-1 p-6 bg-gray-50/30">
          {renderActiveTab()}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Index;
