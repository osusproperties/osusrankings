import { Card, CardContent } from '@/components/ui/card';

interface QuarterData {
  totalLeads: number;
  totalConversions: number;
  avgConversion: number;
  agents: any[];
}

interface QuarterSummaryProps {
  quarter: string;
  data: QuarterData;
  isActive: boolean;
}

export function QuarterSummary({ quarter, data, isActive }: QuarterSummaryProps) {
  return (
    <Card className={`dashboard-card transition-all ${
      isActive 
        ? 'border-accent shadow-glow bg-yellow-400/10' 
        : 'hover:border-red-600'
    }`}>
      <CardContent className="p-4">
        <div className="text-center">
          <h4 className={`text-lg font-bold mb-2 ${
            isActive ? 'dashboard-accent' : 'dashboard-text'
          }`}>
            {quarter} 2025
          </h4>
          <div className="space-y-2">
            <div>
              <p className="text-2xl font-bold dashboard-text">
                {data.totalLeads.toLocaleString()}
              </p>
              <p className="text-xs dashboard-text-muted">Total Leads</p>
            </div>
            <div>
              <p className="text-xl font-bold text-green-400">
                {data.totalConversions}
              </p>
              <p className="text-xs dashboard-text-muted">Conversions</p>
            </div>
            <div>
              <p className="text-lg font-bold dashboard-accent">
                {data.avgConversion}%
              </p>
              <p className="text-xs dashboard-text-muted">Avg Conversion</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}