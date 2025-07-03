
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
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/lovable-uploads/42069f51-b300-47d0-94f3-c57809b3d2dc.png')"
      }}
    >
      <SidebarProvider>
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <SidebarInset>
          <DashboardHeader />
          
          <main className="flex-1 p-6 bg-gray-50/20 backdrop-blur-sm">
            {renderActiveTab()}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Index;
