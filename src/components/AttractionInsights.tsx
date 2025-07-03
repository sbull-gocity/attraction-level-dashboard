
import { Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ratingsData = [
  { rating: '1', count: 5 },
  { rating: '2', count: 12 },
  { rating: '3', count: 28 },
  { rating: '4', count: 165 },
  { rating: '5', count: 190 },
];

const reservationData = [
  { name: 'On the day', value: 25, color: '#4682b4' },
  { name: '2-3 days before', value: 35, color: '#5f9ea0' },
  { name: '4-7 days before', value: 20, color: '#6495ed' },
  { name: '7-14 days before', value: 15, color: '#87ceeb' },
  { name: 'More than 14 days before', value: 5, color: '#b0e0e6' },
];

const visitTimeData = [
  { time: 'Mon AM', count: 45 },
  { time: 'Mon PM', count: 68 },
  { time: 'Tue AM', count: 52 },
  { time: 'Tue PM', count: 71 },
  { time: 'Wed AM', count: 58 },
  { time: 'Wed PM', count: 79 },
  { time: 'Thu AM', count: 61 },
  { time: 'Thu PM', count: 84 },
  { time: 'Fri AM', count: 73 },
  { time: 'Fri PM', count: 95 },
  { time: 'Sat AM', count: 89 },
  { time: 'Sat PM', count: 112 },
  { time: 'Sun AM', count: 76 },
  { time: 'Sun PM', count: 98 },
];

export function AttractionInsights() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">Attraction Insights</h2>
        <div className="text-xs text-teal-600 font-bold tracking-wider uppercase">SECTION 03</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* The Shard Ranks */}
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">The Shard ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-5 h-5 text-teal-500 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-40">
            <div className="text-7xl font-bold text-teal-600 mb-3">2nd</div>
            <div className="text-base text-slate-700 text-center font-semibold">
              out of all Go City attractions in London
            </div>
          </div>
        </div>

        {/* The Shard Ranks in Observation Deck Category */}
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">The Shard ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-5 h-5 text-teal-500 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-40">
            <div className="text-7xl font-bold text-teal-600 mb-3">1st</div>
            <div className="text-base text-slate-700 text-center font-semibold">
              out of all attractions in the Observation Deck category
            </div>
          </div>
        </div>

        {/* Most popular time to visit The Shard */}
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-80 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">Most popular time to visit The Shard</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-5 h-5 text-teal-500 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Most popular 2 hour window for Go City customers to scan their pass at The Shard</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-40">
            <div className="text-4xl font-bold text-teal-600">Saturday 4-6pm</div>
          </div>
        </div>

        {/* Ratings for The Shard from Go City customers */}
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">Ratings for The Shard from Go City customers</h3>
          </div>
          
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratingsData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="rating" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 14, fill: '#475569', fontWeight: 600 }}
                />
                <YAxis type="number" hide />
                <Bar 
                  dataKey="count" 
                  fill="#5f9ea0"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI summary of reviews spanning 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">AI summary of reviews from Go City customers</h3>
          </div>
          
          <div className="space-y-8 text-lg text-slate-800 leading-relaxed">
            <p className="font-medium">
              Visitors consistently praise The Shard for its breathtaking panoramic views of London, 
              with many describing the experience as "unforgettable" and highlighting the spectacular 
              sunset and night-time city views from the observation deck.
            </p>
            <p className="font-medium">
              The majority of reviews emphasize the impressive height and unique vantage point, 
              though some visitors note that clear weather conditions significantly enhance the experience.
            </p>
          </div>
        </div>

        {/* Go City visitors to The Shard with an advance reservation */}
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">Go City visitors to The Shard with an advance reservation</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center h-56">
            <div className="text-7xl font-bold text-teal-600">86%</div>
          </div>
        </div>

        {/* When are Go City customers making their reservations for The Shard? */}
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">When are Go City customers making their reservations for The Shard?</h3>
          </div>
          
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reservationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={60}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {reservationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            {reservationData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-sm shadow-sm" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-slate-700 font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* When are Go City customers visiting The Shard? */}
        <div className="bg-white rounded-2xl border-0 shadow-lg p-8 h-96 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl font-bold text-slate-900">When are Go City customers visiting The Shard?</h3>
          </div>
          
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={visitTimeData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#475569', fontWeight: 600 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis type="number" hide />
                <Bar 
                  dataKey="count" 
                  fill="#5f9ea0"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
