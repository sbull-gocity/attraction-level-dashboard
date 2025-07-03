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
    <div className="bg-white rounded-2xl border-0 shadow-lg p-8 col-span-full hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-12">Top 3 itineraries which include The Shard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {itineraries.map((itinerary, index) => (
          <div key={index} className="border-2 border-orange-200 rounded-2xl p-8 bg-orange-50 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-bold text-slate-900 text-xl">{itinerary.title}</span>
            </div>
            <div className="space-y-4 text-base">
              {itinerary.days.map((day, dayIndex) => (
                <div key={dayIndex}>
                  <div className="font-bold text-slate-900 mt-6 first:mt-0">{day.day}</div>
                  <ul className="text-slate-800 space-y-2 ml-3 mt-2">
                    {day.attractions.map((attraction, attractionIndex) => (
                      <li key={attractionIndex} className="font-semibold">• {attraction}</li>
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
