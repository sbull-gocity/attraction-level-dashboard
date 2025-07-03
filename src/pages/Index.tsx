
import { useState } from "react";
import { TopNavigation } from "@/components/TopNavigation";
import { DashboardHeader } from "@/components/DashboardHeader";
import { CustomerInsights } from "@/components/CustomerInsights";
import { TripInsights } from "@/components/TripInsights";
import { AttractionInsights } from "@/components/AttractionInsights";

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
    <div className="min-h-screen flex flex-col w-full bg-white">
      <DashboardHeader />
      <TopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-6 bg-gray-50/30">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default Index;
