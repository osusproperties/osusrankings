import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

interface ClosingRankingsProps {
  agents: Agent[];
}

export function ClosingRankings({ agents }: ClosingRankingsProps) {
  const sortedAgents = [...agents].sort((a, b) => b.customers - a.customers);

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
          <span className="text-2xl">🎯</span>
          Deal Closing Rankings
        </CardTitle>
        <p className="dashboard-text-muted text-sm">Ranked by total deals closed</p>
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
                <div>
                  <h3 className="dashboard-text font-semibold">{agent.name}</h3>
                  <p className="dashboard-text-muted text-sm">
                    {agent.conversionRate}% conversion rate
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="dashboard-text text-xl font-bold">
                  {agent.customers} deals
                </p>
                <p className="dashboard-accent text-sm">
                  from {agent.totalLeads} leads
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}