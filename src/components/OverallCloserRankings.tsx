import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Agent {
  name: string;
  conversionRate: number;
  totalLeads: number;
  customers: number;
  revenue: number;
  engagementRate: number;
  quality: number;
  sourceCount: number;
}

interface OverallCloserRankingsProps {
  agents: Agent[];
}

export function OverallCloserRankings({ agents }: OverallCloserRankingsProps) {
  const sorted = [...agents].sort((a, b) => {
    // First sort by conversion rate, then by number of customers as tiebreaker
    if (b.conversionRate !== a.conversionRate) {
      return b.conversionRate - a.conversionRate;
    }
    return b.customers - a.customers;
  }).slice(0, 8);

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400/20 rounded-lg">
            <div className="text-2xl">🎯</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Overall Closer Rankings</CardTitle>
            <p className="text-yellow-400/70 text-sm">Most Efficient Deal Closers</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sorted.map((agent, index) => (
            <div
              key={agent.name}
              className="flex items-center gap-3 p-3 bg-red-700/30 rounded-lg hover:bg-red-700/50 transition-all"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                index === 0 ? 'bg-yellow-400 text-red-900' : 
                index === 1 ? 'bg-gray-300 text-red-900' : 
                index === 2 ? 'bg-yellow-600 text-white' : 
                'bg-red-600 dashboard-text'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="dashboard-text font-medium text-sm">{agent.name}</p>
                <p className="text-yellow-400 text-xs">{agent.customers}/{agent.totalLeads} deals closed</p>
              </div>
              <div className="text-right">
                <p className="dashboard-text font-bold text-lg">{agent.conversionRate.toFixed(1)}%</p>
                <div className="w-16 bg-red-900 rounded-full h-2 mt-1">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-500" 
                    style={{ width: `${Math.min(agent.conversionRate, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}