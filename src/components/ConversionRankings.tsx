import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

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

interface ConversionRankingsProps {
  agents: Agent[];
}

export function ConversionRankings({ agents }: ConversionRankingsProps) {
  const sortedAgents = [...agents].sort((a, b) => b.conversionRate - a.conversionRate);

  const getRankBadge = (index: number) => {
    if (index === 0) return <Badge className="bg-yellow-500 text-black">🥇 #1</Badge>;
    if (index === 1) return <Badge className="bg-gray-400 text-black">🥈 #2</Badge>;
    if (index === 2) return <Badge className="bg-amber-600 text-white">🥉 #3</Badge>;
    return <Badge variant="outline">#{index + 1}</Badge>;
  };

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="dashboard-text flex items-center gap-2">
          <span className="text-2xl">📈</span>
          Conversion Rate Rankings
        </CardTitle>
        <p className="dashboard-text-muted text-sm">Ranked by lead-to-deal conversion rate</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedAgents.map((agent, index) => (
            <div
              key={agent.name}
              className="flex items-center justify-between p-4 rounded-lg dashboard-card-secondary hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {getRankBadge(index)}
                <div className="flex-1">
                  <h3 className="dashboard-text font-semibold">{agent.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Progress 
                      value={agent.conversionRate} 
                      className="h-2 w-20"
                    />
                    <span className="dashboard-text-muted text-xs">
                      {agent.customers}/{agent.totalLeads} converted
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="dashboard-text text-xl font-bold">
                  {agent.conversionRate}%
                </p>
                <p className="dashboard-accent text-sm">
                  conversion rate
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}