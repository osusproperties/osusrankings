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

interface QualityRankingsProps {
  agents: Agent[];
}

export function QualityRankings({ agents }: QualityRankingsProps) {
  const sorted = [...agents].sort((a, b) => b.quality - a.quality).slice(0, 5);

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-400/20 rounded-lg">
            <div className="text-2xl">⭐</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Quality Specialists</CardTitle>
            <p className="text-purple-400/70 text-sm">Overall Excellence Score</p>
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
                  index < 3 ? 'bg-purple-400 text-red-900' : 'bg-red-600 dashboard-text'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <p className="dashboard-text font-medium text-sm">{agent.name}</p>
                  <p className="text-purple-400 text-xs">{agent.engagementRate.toFixed(1)}% engagement</p>
                </div>
              </div>
              <div className="text-right">
                <p className="dashboard-text font-bold">{agent.quality.toFixed(1)}%</p>
                <p className="text-purple-400 text-xs">quality score</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}