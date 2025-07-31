import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

interface EngagementChartProps {
  agents: Agent[];
}

export function EngagementChart({ agents }: EngagementChartProps) {
  const sortedAgents = [...agents].sort((a, b) => b.engagementRate - a.engagementRate);

  const getEngagementLabel = (rate: number) => {
    if (rate >= 90) return "Excellent";
    if (rate >= 75) return "Good";
    if (rate >= 60) return "Average";
    return "Needs Improvement";
  };

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <CardTitle className="dashboard-text flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Engagement Analysis
        </CardTitle>
        <p className="dashboard-text-muted text-sm">Agent engagement rates with leads</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedAgents.map((agent, index) => (
            <div
              key={agent.name}
              className="p-4 rounded-lg dashboard-card-secondary"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="dashboard-text font-semibold">{agent.name}</h3>
                <span className="dashboard-text text-lg font-bold">
                  {agent.engagementRate}%
                </span>
              </div>
              <Progress 
                value={agent.engagementRate} 
                className="h-3 mb-2"
              />
              <div className="flex justify-between items-center">
                <span className="dashboard-accent text-sm">
                  {getEngagementLabel(agent.engagementRate)}
                </span>
                <span className="dashboard-text-muted text-xs">
                  {agent.totalLeads} leads handled
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}