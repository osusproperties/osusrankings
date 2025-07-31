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

interface ClosingRankingsProps {
  agents: Agent[];
}

export function ClosingRankings({ agents }: ClosingRankingsProps) {
  const sorted = [...agents].sort((a, b) => b.customers - a.customers).slice(0, 5);

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-400/20 rounded-lg">
            <div className="text-2xl">🏆</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Primary Closers</CardTitle>
            <p className="text-yellow-400/70 text-sm">Total Deals Closed</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sorted.map((agent, index) => (
            <div
              key={agent.name}
              className="p-4 bg-gradient-to-r from-red-700/30 to-yellow-900/20 rounded-lg hover:from-red-700/50 hover:to-yellow-900/30 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-bold ${index === 0 ? 'dashboard-accent' : 'dashboard-text'}`}>
                    #{index + 1}
                  </span>
                  <p className="dashboard-text font-medium text-sm">{agent.name}</p>
                </div>
                <div className="text-right">
                  <p className="dashboard-accent font-bold text-xl">{agent.customers}</p>
                  <p className="dashboard-text text-xs">deals closed</p>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="dashboard-text-muted">Rate: {agent.conversionRate.toFixed(1)}%</span>
                <span className="dashboard-accent">{agent.totalLeads} total leads</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}