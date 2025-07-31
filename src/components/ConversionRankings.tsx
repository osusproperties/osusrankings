import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Agent {
  name: string;
  conversionRate: number;
  totalLeads: number;
  customers: number;
  engagementRate: number;
  quality: number;
  sourceCount: number;
}

interface ConversionRankingsProps {
  agents: Agent[];
}

export function ConversionRankings({ agents }: ConversionRankingsProps) {
  const sorted = [...agents].sort((a, b) => b.conversionRate - a.conversionRate).slice(0, 5);

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400/20 rounded-lg">
            <div className="text-2xl">🎯</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Exclusive Closers</CardTitle>
            <p className="text-yellow-400/70 text-sm">Highest Conversion Rates</p>
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
              <div className={`ranking-badge ${
                index === 0 ? 'ranking-1' : 
                index === 1 ? 'ranking-2' : 
                index === 2 ? 'ranking-3' : 
                'ranking-other'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="dashboard-text font-medium text-sm">{agent.name}</p>
                <p className="dashboard-accent text-xs">
                  {agent.customers}/{agent.totalLeads} converted
                </p>
              </div>
              <div className="text-right">
                <p className="dashboard-text font-bold">{agent.conversionRate.toFixed(1)}%</p>
                <div className="w-16 bg-red-900 rounded-full h-2 mt-1">
                  <div 
                    className="progress-bar h-2 rounded-full" 
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