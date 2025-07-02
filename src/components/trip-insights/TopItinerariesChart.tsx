
import { Clock } from "lucide-react";

interface Itinerary {
  title: string;
  days: {
    day: string;
    attractions: string[];
  }[];
}

export function TopItinerariesChart() {
  const itineraries: Itinerary[] = [
    {
      title: "2-Day Trip",
      days: [
        {
          day: "Day 1:",
          attractions: ["The Shard", "Tower of London", "Tower Bridge"]
        },
        {
          day: "Day 2:",
          attractions: ["London Eye", "Westminster Abbey", "Big Ben"]
        }
      ]
    },
    {
      title: "3-Day Trip",
      days: [
        {
          day: "Day 1:",
          attractions: ["The Shard", "Borough Market", "Southwark Cathedral"]
        },
        {
          day: "Day 2:",
          attractions: ["St Paul's Cathedral", "Tate Modern", "Shakespeare's Globe"]
        },
        {
          day: "Day 3:",
          attractions: ["British Museum", "Covent Garden"]
        }
      ]
    },
    {
      title: "4-Day Trip",
      days: [
        {
          day: "Day 1:",
          attractions: ["The Shard", "London Bridge Experience", "HMS Belfast"]
        },
        {
          day: "Day 2:",
          attractions: ["Tower of London", "Tower Bridge", "St Katharine Docks"]
        },
        {
          day: "Day 3:",
          attractions: ["Westminster Abbey", "Houses of Parliament", "Churchill War Rooms"]
        },
        {
          day: "Day 4:",
          attractions: ["Kensington Palace", "Natural History Museum"]
        }
      ]
    }
  ];

  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 col-span-full">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 8</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-6">Top 3 itineraries which include The Shard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itineraries.map((itinerary, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-gray-600" />
              <span className="font-semibold text-black">{itinerary.title}</span>
            </div>
            <div className="space-y-2 text-sm">
              {itinerary.days.map((day, dayIndex) => (
                <div key={dayIndex}>
                  <div className="font-medium text-black mt-3 first:mt-0">{day.day}</div>
                  <ul className="text-gray-700 space-y-1 ml-2">
                    {day.attractions.map((attraction, attractionIndex) => (
                      <li key={attractionIndex}>• {attraction}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
