
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
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 col-span-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-8">Top 3 itineraries which include The Shard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {itineraries.map((itinerary, index) => (
          <div key={index} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-slate-600" />
              <span className="font-semibold text-slate-800 text-lg">{itinerary.title}</span>
            </div>
            <div className="space-y-3 text-sm">
              {itinerary.days.map((day, dayIndex) => (
                <div key={dayIndex}>
                  <div className="font-semibold text-slate-800 mt-4 first:mt-0">{day.day}</div>
                  <ul className="text-slate-700 space-y-1 ml-2 mt-1">
                    {day.attractions.map((attraction, attractionIndex) => (
                      <li key={attractionIndex} className="font-medium">• {attraction}</li>
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
