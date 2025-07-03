import { useState, useEffect } from 'react';

export function AttractionsCountChart() {
    const [attractionsCount, setAttractionsCount] = useState<string>("Loading...");

    useEffect(() => {
        const fetchAttractionsCount = async () => {
            try {
                const response = await fetch("https://api.dev.gocity.tech/sell-more/attractions/c3cf0da8-fa3c-438c-ade6-1e0a264b5af5/visited-attractions-count");

                if (!response.ok) {
                    throw new Error('Failed to fetch attractions count data');
                }

                // Parse the response as text instead of JSON
                const count = await response.text();
                setAttractionsCount(count);
            } catch (error) {
                console.error("Error fetching attractions count data:", error);
                setAttractionsCount("N/A");
            }
        };
        fetchAttractionsCount();
    }, []);

    return (
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-12">Customers who visit The Shard go to</h3>

            <div className="flex items-center justify-center h-24">
                <span className="text-5xl font-bold text-teal-600">{attractionsCount}</span>
            </div>

            <div className="flex items-center justify-center mt-12">
                <span className="text-base text-slate-700 font-semibold">other Go City attractions</span>
            </div>
        </div>
    );
}