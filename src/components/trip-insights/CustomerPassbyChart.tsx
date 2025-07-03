import { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function CustomerPassbyChart() {
    const [passbyCount, setPassbyCount] = useState<string>("Loading...");

    useEffect(() => {
        const fetchPassbyCount = async () => {
            try {
                const response = await fetch("https://api.dev.gocity.tech/sell-more/passes/visited-attractions-count?destination=London");

                if (!response.ok) {
                    throw new Error('Failed to fetch passby count data');
                }

                // Parse the response as text since it's just a number
                const count = await response.text();
                setPassbyCount(count);
            } catch (error) {
                console.error("Error fetching passby count data:", error);
                setPassbyCount("N/A");
            }
        };

        fetchPassbyCount();
    }, []);

    return (
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-12">
                <h3 className="text-xl font-bold text-slate-900">How many Go City customers walk past The Shard?</h3>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Info className="h-5 w-5 text-teal-500 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>This shows how many Go City customers were within 0.5 miles of The Shard over the last 30 days but didn't visit</p>
                    </TooltipContent>
                </Tooltip>
            </div>

            <div className="flex items-center justify-center h-24">
                <span className="text-5xl font-bold text-teal-600">{passbyCount}</span>
            </div>
        </div>
    );
}