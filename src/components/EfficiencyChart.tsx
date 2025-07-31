import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';

interface Agent {
  name: string;
  conversionRate: number;
  totalLeads: number;
  customers: number;
  engagementRate: number;
  quality: number;
  sourceCount: number;
}

interface EfficiencyChartProps {
  agents: Agent[];
}

export function EfficiencyChart({ agents }: EfficiencyChartProps) {
  const topEfficient = [...agents]
    .filter(a => a.totalLeads >= 5) // Only agents with significant volume
    .sort((a, b) => (b.customers / b.totalLeads) - (a.customers / a.totalLeads))
    .slice(0, 6)
    .map(agent => ({
      name: agent.name.split(' ')[0],
      efficiency: (agent.quality + agent.conversionRate) / 2
    }));

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-400/20 rounded-lg">
            <div className="text-2xl">📊</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Efficient Lead Handlers</CardTitle>
            <p className="text-orange-400/70 text-sm">Best Lead Processing</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={topEfficient}>
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'hsl(var(--dashboard-text))', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--dashboard-text))', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--dashboard-card))',
                  border: '1px solid hsl(0 35% 25%)',
                  borderRadius: '8px',
                  color: 'hsl(var(--dashboard-text))'
                }}
                formatter={(value) => [`${Number(value).toFixed(1)}%`, 'Efficiency Score']}
              />
              <Area
                type="monotone"
                dataKey="efficiency"
                stroke="#FB923C"
                fill="rgba(251, 146, 60, 0.1)"
                strokeWidth={3}
                dot={{ fill: '#FB923C', strokeWidth: 2, r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}