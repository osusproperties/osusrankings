import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Users, Target, Clock, AlertTriangle } from 'lucide-react';
import osusLogo from '@/assets/osus-logo.png';

const leadStageData = [
  { stage: 'ATTEMPT', count: 2474, percentage: 50.54, color: 'bg-red-500', status: 'bottleneck' },
  { stage: 'CONTACTED', count: 1248, percentage: 25.5, color: 'bg-orange-500', status: 'active' },
  { stage: 'OPTIONS SENT', count: 673, percentage: 13.75, color: 'bg-yellow-500', status: 'active' },
  { stage: 'IDLE', count: 255, percentage: 5.21, color: 'bg-gray-500', status: 'terminal' },
  { stage: 'CUSTOMER', count: 121, percentage: 2.47, color: 'bg-green-500', status: 'success' },
  { stage: 'UNSUCCESSFUL', count: 52, percentage: 1.06, color: 'bg-red-600', status: 'terminal' },
  { stage: 'HOT', count: 42, percentage: 0.86, color: 'bg-purple-500', status: 'active' },
  { stage: 'NEW', count: 30, percentage: 0.61, color: 'bg-blue-500', status: 'active' }
];

const conversionRates = [
  { from: 'NEW', to: 'ATTEMPT', rate: 8246.67, count: '2474/30' },
  { from: 'ATTEMPT', to: 'CONTACTED', rate: 50.44, count: '1248/2474' },
  { from: 'CONTACTED', to: 'OPTIONS SENT', rate: 53.93, count: '673/1248' },
  { from: 'OPTIONS SENT', to: 'HOT', rate: 6.24, count: '42/673' },
  { from: 'HOT', to: 'CUSTOMER', rate: 288.1, count: '121/42' }
];

const leadSources = [
  { source: 'Instagram', count: 1924, percentage: 39.31 },
  { source: 'Facebook', count: 1848, percentage: 37.75 },
  { source: 'Special Referral', count: 710, percentage: 14.5 },
  { source: 'Landing Page', count: 152, percentage: 3.11 },
  { source: 'WhatsApp', count: 120, percentage: 2.45 },
  { source: 'Personal', count: 59, percentage: 1.21 },
  { source: 'Call', count: 36, percentage: 0.74 },
  { source: 'E-Mail', count: 31, percentage: 0.63 }
];

const topPerformers = [
  { name: 'Davide Bonaldo', cvr: 112.5, conversions: 9, total: 184, status: 'clone' },
  { name: 'Mehdi Mofidi', cvr: 85.0, conversions: 3, total: 120, status: 'excellent' },
  { name: 'Claudio Panato', cvr: 80.0, conversions: 12, total: 156, status: 'excellent' },
  { name: 'Faraaz Arif', cvr: 75.0, conversions: 3, total: 89, status: 'good' }
];

const idleLeads = [
  { source: 'Facebook', rep: 'Saad Khan', count: 45 },
  { source: 'Instagram', rep: 'Saad Khan', count: 37 },
  { source: 'Facebook', rep: 'Karim El Sabagh', count: 35 },
  { source: 'Instagram', rep: 'Karim El Sabagh', count: 25 },
  { source: 'Facebook', rep: 'Ahmad Hamdan', count: 13 }
];

export function LeadManagementDashboard() {
  return (
    <div className="min-h-screen dashboard-bg">
      <div className="container mx-auto p-6 animate-slide-up">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col items-center gap-6 mb-6">
            <img 
              src={osusLogo} 
              alt="OSUS Properties Logo" 
              className="h-16 md:h-20 object-contain"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="relative">
                  <div className="text-5xl">📊</div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold dashboard-text">
                  Lead Management Analytics
                </h1>
              </div>
              <p className="dashboard-accent text-lg md:text-xl">
                Executive Summary Report - Analysis Date: 08/03/2025
              </p>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-accent" />
                  <div>
                    <p className="dashboard-text-muted text-sm">Total Leads</p>
                    <p className="dashboard-text text-2xl font-bold">4,895</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="dashboard-text-muted text-sm">Customers</p>
                    <p className="dashboard-text text-2xl font-bold">121</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="dashboard-text-muted text-sm">Lead Sources</p>
                    <p className="dashboard-text text-2xl font-bold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-purple-500" />
                  <div>
                    <p className="dashboard-text-muted text-sm">Sales Reps</p>
                    <p className="dashboard-text text-2xl font-bold">43</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
            <TabsTrigger value="sources">Sources</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Lead Stage Distribution */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl flex items-center gap-2">
                  🎯 Lead Stage Distribution
                  <Badge variant="outline" className="ml-2">Workflow Analysis</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {leadStageData.map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="dashboard-text font-medium">{stage.stage}</span>
                        <Badge variant={stage.status === 'bottleneck' ? 'destructive' : 
                                      stage.status === 'success' ? 'default' : 'secondary'}>
                          {stage.status}
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold dashboard-text">{stage.count.toLocaleString()}</div>
                      <Progress value={stage.percentage} className="h-2" />
                      <div className="text-sm dashboard-text-muted">{stage.percentage}%</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span className="font-semibold text-red-700 dark:text-red-300">Critical Bottleneck</span>
                  </div>
                  <p className="text-red-600 dark:text-red-400">
                    <strong>2,474 leads (50.5%)</strong> are stuck in ATTEMPT stage. This is the primary conversion blocker.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Executive Summary */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl flex items-center gap-2">
                  📋 Executive Summary & Strategic Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold dashboard-text mb-3">Key Findings</h4>
                    <ul className="space-y-2 dashboard-text-muted">
                      <li>• Workflow Compliance: 4,895 total leads across defined stages</li>
                      <li>• Primary Issue: 2,474 leads stuck in ATTEMPT stage (50.5%)</li>
                      <li>• Terminal State: 52 UNSUCCESSFUL leads available for recycling</li>
                      <li>• Reactivation Opportunity: 255 IDLE leads with potential</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold dashboard-text mb-3">Immediate Actions</h4>
                    <ul className="space-y-2 dashboard-text-muted">
                      <li>• Focus on ATTEMPT→CONTACTED conversion (biggest bottleneck)</li>
                      <li>• Clone strategies from top performers to underperformers</li>
                      <li>• Implement IDLE lead reactivation campaign</li>
                      <li>• Monitor Source-Rep pairs for hidden winners/losers</li>
                      <li>• Review and recycle UNSUCCESSFUL leads where appropriate</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl">🔄 Conversion Rate Ladder</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversionRates.map((conv, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg dashboard-card">
                      <div className="flex items-center gap-4">
                        <div className="text-sm dashboard-text-muted">{conv.from}</div>
                        <div className="text-xl">→</div>
                        <div className="text-sm dashboard-text-muted">{conv.to}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold dashboard-text">{conv.rate}%</div>
                        <div className="text-sm dashboard-text-muted">{conv.count}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sources" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl">📱 Lead Source Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leadSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg dashboard-card">
                      <div>
                        <div className="font-medium dashboard-text">{source.source}</div>
                        <div className="text-sm dashboard-text-muted">{source.percentage}% of total</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold dashboard-text">{source.count.toLocaleString()}</div>
                        <Progress value={source.percentage} className="w-24 h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl">🏆 Rep Excellence Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformers.map((rep, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg dashboard-card">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent/70 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium dashboard-text">{rep.name}</div>
                          <div className="text-sm dashboard-text-muted">
                            {rep.conversions} conversions / {rep.total} total leads
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold dashboard-text">{rep.cvr}%</div>
                        <Badge variant={rep.status === 'clone' ? 'default' : 'secondary'}>
                          {rep.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl">💡 Idle Lead Reactivation Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 rounded-lg dashboard-card">
                      <div className="text-2xl font-bold dashboard-text">255</div>
                      <div className="text-sm dashboard-text-muted">Current IDLE Leads</div>
                    </div>
                    <div className="text-center p-4 rounded-lg dashboard-card">
                      <div className="text-2xl font-bold text-blue-500">~4</div>
                      <div className="text-sm dashboard-text-muted">10% Push Scenario</div>
                    </div>
                    <div className="text-center p-4 rounded-lg dashboard-card">
                      <div className="text-2xl font-bold text-green-500">~12</div>
                      <div className="text-sm dashboard-text-muted">30% Push Scenario</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold dashboard-text mb-3">Top IDLE Concentrations</h4>
                    <div className="space-y-2">
                      {idleLeads.map((idle, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg dashboard-card">
                          <div>
                            <span className="font-medium dashboard-text">{idle.source}</span>
                            <span className="dashboard-text-muted"> - {idle.rep}</span>
                          </div>
                          <div className="text-lg font-bold dashboard-text">{idle.count} leads</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}