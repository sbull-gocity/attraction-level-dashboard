import { useState, useEffect } from 'react';

export function VisitDayChart() {
    const [visitDay, setVisitDay] = useState<string>("Loading...");

    useEffect(() => {
        const fetchVisitDay = async () => {
            try {
                const response = await fetch("https://api.dev.gocity.tech/sell-more/attractions/c3cf0da8-fa3c-438c-ade6-1e0a264b5af5/visit-day");

                if (!response.ok) {
                    throw new Error('Failed to fetch visit day data');
                }

                const data = await response.text();
                setVisitDay(`Day ${data}`);
            } catch (error) {
                console.error("Error fetching visit day data:", error);
                setVisitDay("Data unavailable");
            }
        };

        fetchVisitDay();
    }, []);

    return (
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-12">Customers usually visit The Shard on</h3>

            <div className="flex items-center justify-center h-24">
                <span className="text-5xl font-bold text-teal-600">{visitDay}</span>
            </div>

            <div className="flex items-center justify-center mt-12">
                <span className="text-base text-slate-700 font-semibold">of their trip to London</span>
            </div>
        </div>
    );
}