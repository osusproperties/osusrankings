import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface Agent {
  name: string;
  conversionRate: number;
  totalLeads: number;
  customers: number;
  engagementRate: number;
  quality: number;
  sourceCount: number;
}

interface EngagementChartProps {
  agents: Agent[];
}

export function EngagementChart({ agents }: EngagementChartProps) {
  const topEngagers = [...agents]
    .sort((a, b) => b.engagementRate - a.engagementRate)
    .slice(0, 6)
    .map(agent => ({
      name: agent.name.split(' ')[0],
      engagement: agent.engagementRate
    }));

  return (
    <Card className="dashboard-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-400/20 rounded-lg">
            <div className="text-2xl">💬</div>
          </div>
          <div>
            <CardTitle className="text-xl dashboard-text">Engagement Masters</CardTitle>
            <p className="text-green-400/70 text-sm">Best Client Interaction</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topEngagers}>
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
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--dashboard-card))',
                  border: '1px solid hsl(0 35% 25%)',
                  borderRadius: '8px',
                  color: 'hsl(var(--dashboard-text))'
                }}
                formatter={(value) => [`${value}%`, 'Engagement Rate']}
              />
              <Bar 
                dataKey="engagement" 
                fill="#10B981" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}