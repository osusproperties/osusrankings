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

interface VolumeRankingsProps {
  agents: Agent[];
}

export function VolumeRankings({ agents }: VolumeRankingsProps) {
  const sorted = [...agents].sort((a, b) => b.totalLeads - a.totalLeads).slice(0, 5);

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-400/20 rounded-lg">
            <div className="text-2xl">👥</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Volume Leaders</CardTitle>
            <p className="text-blue-400/70 text-sm">Most Leads Handled</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {sorted.map((agent, index) => (
            <div
              key={agent.name}
              className="flex items-center justify-between p-3 bg-red-700/30 rounded-lg hover:bg-red-700/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                  index < 3 ? 'bg-blue-400 text-red-900' : 'bg-red-600 dashboard-text'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <p className="dashboard-text font-medium text-sm">{agent.name}</p>
                  <p className="text-blue-400 text-xs">{agent.sourceCount} sources</p>
                </div>
              </div>
              <div className="text-right">
                <p className="dashboard-text font-bold text-lg">{agent.totalLeads}</p>
                <p className="text-blue-400 text-xs">leads</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}