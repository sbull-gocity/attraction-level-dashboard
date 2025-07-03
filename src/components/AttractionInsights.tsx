
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
  { name: 'On the day', value: 25, color: '#334155' },
  { name: '2-3 days before', value: 35, color: '#475569' },
  { name: '4-7 days before', value: 20, color: '#64748b' },
  { name: '7-14 days before', value: 15, color: '#94a3b8' },
  { name: 'More than 14 days before', value: 5, color: '#cbd5e1' },
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
        <h2 className="text-2xl font-bold text-slate-800">Attraction Insights</h2>
        <div className="text-sm text-slate-500 font-medium">SECTION 03</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chart 1 - The Shard Ranks */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">The Shard ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-slate-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-slate-800 mb-2">2nd</div>
            <div className="text-sm text-slate-600 text-center font-medium">
              out of all Go City attractions in London
            </div>
          </div>
        </div>

        {/* Chart 2 - The Shard Ranks in Observation Deck Category */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">The Shard ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-slate-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-slate-800 mb-2">1st</div>
            <div className="text-sm text-slate-600 text-center font-medium">
              out of all attractions in the Observation Deck category
            </div>
          </div>
        </div>

        {/* Chart 3 - Most popular time to visit The Shard */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-64">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Most popular time to visit The Shard</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-slate-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Most popular 2 hour window for Go City customers to scan their pass at The Shard</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-3xl font-bold text-slate-800">Saturday 4-6pm</div>
          </div>
        </div>

        {/* Chart 4 - Ratings for The Shard from Go City customers */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Ratings for The Shard from Go City customers</h3>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratingsData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="rating" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                />
                <YAxis type="number" hide />
                <Bar 
                  dataKey="count" 
                  fill="#64748b"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 5 - AI summary of reviews spanning 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">AI summary of reviews from Go City customers</h3>
          </div>
          
          <div className="space-y-6 text-base text-slate-700 leading-relaxed">
            <p>
              Visitors consistently praise The Shard for its breathtaking panoramic views of London, 
              with many describing the experience as "unforgettable" and highlighting the spectacular 
              sunset and night-time city views from the observation deck.
            </p>
            <p>
              The majority of reviews emphasize the impressive height and unique vantage point, 
              though some visitors note that clear weather conditions significantly enhance the experience.
            </p>
          </div>
        </div>

        {/* Chart 6 - Go City visitors to The Shard with an advance reservation */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">Go City visitors to The Shard with an advance reservation</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center h-48">
            <div className="text-6xl font-bold text-slate-800">86%</div>
          </div>
        </div>

        {/* Chart 7 - When are Go City customers making their reservations for The Shard? */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">When are Go City customers making their reservations for The Shard?</h3>
          </div>
          
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reservationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {reservationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4">
            {reservationData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-sm" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-slate-600 font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chart 8 - When are Go City customers visiting The Shard? */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-80">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-lg font-semibold text-slate-800">When are Go City customers visiting The Shard?</h3>
          </div>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={visitTimeData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#64748b' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis type="number" hide />
                <Bar 
                  dataKey="count" 
                  fill="#64748b"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
