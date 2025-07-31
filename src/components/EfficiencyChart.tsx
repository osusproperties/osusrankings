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

interface EfficiencyChartProps {
  agents: Agent[];
}

export function EfficiencyChart({ agents }: EfficiencyChartProps) {
  // Calculate efficiency score based on multiple factors
  const agentsWithEfficiency = agents.map(agent => ({
    ...agent,
    efficiency: (agent.conversionRate * 0.4) + (agent.engagementRate * 0.3) + (agent.quality * 0.3)
  }));

  const sortedAgents = agentsWithEfficiency.sort((a, b) => b.efficiency - a.efficiency);

  const getEfficiencyLabel = (efficiency: number) => {
    if (efficiency >= 85) return "Exceptional";
    if (efficiency >= 70) return "High";
    if (efficiency >= 55) return "Moderate";
    return "Developing";
  };

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
        <CardTitle className="dashboard-text flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          Overall Efficiency Analysis
        </CardTitle>
        <p className="dashboard-text-muted text-sm">
          Composite score: 40% conversion + 30% engagement + 30% quality
        </p>
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
                <div className="text-right">
                  <span className="dashboard-text text-lg font-bold">
                    {agent.efficiency.toFixed(1)}%
                  </span>
                  <p className="dashboard-accent text-xs">
                    {formatRevenue(agent.revenue)}
                  </p>
                </div>
              </div>
              <Progress 
                value={agent.efficiency} 
                className="h-3 mb-2"
              />
              <div className="flex justify-between items-center">
                <span className="dashboard-accent text-sm">
                  {getEfficiencyLabel(agent.efficiency)}
                </span>
                <div className="text-right">
                  <span className="dashboard-text-muted text-xs">
                    {agent.customers} deals • {agent.conversionRate}% rate
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}