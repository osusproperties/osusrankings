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

interface RevenueGeneratorRankingsProps {
  agents: Agent[];
}

export function RevenueGeneratorRankings({ agents }: RevenueGeneratorRankingsProps) {
  const sorted = [...agents].sort((a, b) => b.revenue - a.revenue).slice(0, 8);

  const formatRevenue = (revenue: number) => {
    if (revenue >= 1000000) {
      return `AED ${(revenue / 1000000).toFixed(1)}M`;
    } else if (revenue >= 1000) {
      return `AED ${(revenue / 1000).toFixed(0)}K`;
    } else {
      return `AED ${revenue.toLocaleString()}`;
    }
  };

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-400/20 rounded-lg">
            <div className="text-2xl">💰</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Revenue Generator Rankings</CardTitle>
            <p className="text-green-400/70 text-sm">Top Revenue Producers</p>
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
                index === 0 ? 'bg-green-400 text-red-900' : 
                index === 1 ? 'bg-gray-300 text-red-900' : 
                index === 2 ? 'bg-yellow-600 text-white' : 
                'bg-red-600 dashboard-text'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="dashboard-text font-medium text-sm">{agent.name}</p>
                <p className="text-green-400 text-xs">{agent.customers} deals • {agent.conversionRate.toFixed(1)}% rate</p>
              </div>
              <div className="text-right">
                <p className="dashboard-text font-bold text-lg">{formatRevenue(agent.revenue)}</p>
                <p className="text-green-400 text-xs">revenue</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}