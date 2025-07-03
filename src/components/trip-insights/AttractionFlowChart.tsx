import {useState, useEffect} from 'react';

interface FlowData {
    position: number;
    attractionName: string;
    beforeAttractions: string[];
    afterAttractions: string[];
}

export function AttractionFlowChart() {
    const [flowData, setFlowData] = useState<FlowData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAttractionFlow = async () => {
            try {
                const response = await fetch("https://api.dev.gocity.tech/sell-more/attractions/c3cf0da8-fa3c-438c-ade6-1e0a264b5af5/position");

                if (!response.ok) {
                    throw new Error('Failed to fetch attraction flow data');
                }

                const data = await response.json();

                // Convert the API response to our expected format
                setFlowData({
                    position: data.position,
                    attractionName: data.attractionName,
                    beforeAttractions: [data.beforeAttractionName, "Tower of London"],
                    afterAttractions: [data.afterAttractionName, "St Paul's Cathedral"]
                });
            } catch (error) {
                console.error("Error fetching attraction flow data:", error);
                setError("Failed to load attraction data");
            } finally {
                setLoading(false);
            }
        };

        fetchAttractionFlow();
    }, []);

    if (loading) {
        return (
            <div
                className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 col-span-full hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                <span className="text-gray-500">Loading attraction flow data...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div
                className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 col-span-full hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                <span className="text-red-500">{error}</span>
            </div>
        );
    }

    return (
        <div
            className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 col-span-full hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-slate-900 mb-12">What attractions are customers visiting before and
                after {flowData?.attractionName}?</h3>

            <div className="flex items-center justify-between h-40">
                {/* Left side attractions */}
                <div className="flex flex-col space-y-4 w-1/4">
                    {flowData?.beforeAttractions.map((attraction, index) => (
                        <div className="flex items-center" key={`before-${index}`}>
                            <span className="text-base text-slate-800 font-semibold">{attraction}</span>
                            <div className="ml-3 flex-1 h-0.5 bg-teal-300"></div>
                        </div>
                    ))}
                </div>

                {/* Center - The attraction with box */}
                <div className="flex flex-col items-center flex-1 mx-6">
                    <div className="border-2 border-teal-200 rounded-2xl p-6 bg-teal-50 w-full max-w-40 shadow-md">
                        <div
                            className="w-full h-16 bg-teal-100 border border-teal-300 rounded-lg mb-3 flex items-center justify-center">
                            <span className="text-sm text-teal-600 font-semibold">IMG</span>
                        </div>
                        <div className="text-center">
                            <span className="text-xl font-bold text-slate-900">{flowData?.attractionName}</span>
                        </div>
                    </div>
                </div>

                {/* Right side attractions */}
                <div className="flex flex-col space-y-4 w-1/4">
                    {flowData?.afterAttractions.map((attraction, index) => (
                        <div className="flex items-center justify-end" key={`after-${index}`}>
                            <div className="mr-3 flex-1 h-0.5 bg-teal-300"></div>
                            <span className="text-base text-slate-800 font-semibold">{attraction}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}