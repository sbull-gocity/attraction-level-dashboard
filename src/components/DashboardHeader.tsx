
import { Building2 } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-40 flex items-center justify-between px-6 bg-white border-b-2 border-black/20">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center">
          <Building2 className="w-8 h-8 text-black" strokeWidth={1.5} />
        </div>
        
        <div>
          <h1 className="text-5xl font-bold text-black tracking-wide font-sans">
            Hey Luke
          </h1>
          <p className="text-xl text-gray-600 font-sans mt-1">
            Join us to unlock insights for your attraction in London
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-teal-600">FootFall</span>
        <span className="text-xl text-gray-600">by Go City</span>
      </div>
    </header>
  );
}
