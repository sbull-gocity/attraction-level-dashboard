
import { Building2 } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-20 flex items-center justify-between px-6 bg-white border-b-2 border-black/20">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center">
          <Building2 className="w-8 h-8 text-black" strokeWidth={1.5} />
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-black tracking-wide">
            THE SHARD
          </h1>
          <p className="text-sm text-gray-600 font-mono">
            Performance Dashboard
          </p>
        </div>
      </div>
      
      <div className="w-32 h-16 border-2 border-dashed border-black/40 flex items-center justify-center">
        <span className="text-xs text-gray-500 font-mono">LOGO</span>
      </div>
    </header>
  );
}
