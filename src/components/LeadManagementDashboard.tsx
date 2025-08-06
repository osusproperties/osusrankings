import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Users, Target, Clock, AlertTriangle } from 'lucide-react';
import osusLogo from '@/assets/osus-logo.png';

const leadStageData = [
  { stage: 'ATTEMPT', count: 2463, percentage: 50.66, color: 'bg-red-500', status: 'bottleneck' },
  { stage: 'CONTACTED', count: 1126, percentage: 23.16, color: 'bg-orange-500', status: 'active' },
  { stage: 'OPTIONS SENT', count: 634, percentage: 13.04, color: 'bg-yellow-500', status: 'active' },
  { stage: 'IDLE', count: 255, percentage: 5.24, color: 'bg-gray-500', status: 'terminal' },
  { stage: 'CUSTOMER', count: 108, percentage: 2.22, color: 'bg-green-500', status: 'success' },
  { stage: 'UNSUCCESSFUL', count: 52, percentage: 1.07, color: 'bg-red-600', status: 'terminal' },
  { stage: 'HOT', count: 35, percentage: 0.72, color: 'bg-purple-500', status: 'active' },
  { stage: 'NEW', count: 189, percentage: 3.89, color: 'bg-blue-500', status: 'active' }
];

const conversionRates = [
  { from: 'NEW', to: 'ATTEMPT', rate: ((2463/189) * 100).toFixed(1), count: '2463/189' },
  { from: 'ATTEMPT', to: 'CONTACTED', rate: ((1126/2463) * 100).toFixed(1), count: '1126/2463' },
  { from: 'CONTACTED', to: 'OPTIONS SENT', rate: ((634/1126) * 100).toFixed(1), count: '634/1126' },
  { from: 'OPTIONS SENT', to: 'HOT', rate: ((35/634) * 100).toFixed(1), count: '35/634' },
  { from: 'HOT', to: 'CUSTOMER', rate: ((108/35) * 100).toFixed(1), count: '108/35' }
];

const channelPerformance = [
  { source: 'Referral', cvr: 85.71, leads: 7, waste: 0, status: 'excellent' },
  { source: 'Call', cvr: 75.76, leads: 33, waste: 0, status: 'excellent' },
  { source: 'Personal', cvr: 74.55, leads: 55, waste: 7.3, status: 'excellent' },
  { source: 'WhatsApp', cvr: 1.67, leads: 120, waste: 5.8, status: 'poor' },
  { source: 'Facebook', cvr: 1.24, leads: 1848, waste: 9.4, status: 'poor' },
  { source: 'Instagram', cvr: 0.47, leads: 1924, waste: 5.4, status: 'poor' },
  { source: 'E-Mail', cvr: 0, leads: 11, waste: 0, status: 'needs-work' },
  { source: 'Landing Page', cvr: 0, leads: 152, waste: 0, status: 'needs-work' },
  { source: 'Special Referral', cvr: 0, leads: 709, waste: 2.5, status: 'needs-work' }
];

const topPerformers = [
  { name: 'Sina Saeedi', cvr: 19.23, conversions: 5, total: 26, status: 'clone' },
  { name: 'Wessam Simon', cvr: 11.24, conversions: 10, total: 89, status: 'excellent' },
  { name: 'Safa El Amri', cvr: 9.3, conversions: 4, total: 43, status: 'excellent' },
  { name: 'Maickel Faragalla', cvr: 7.14, conversions: 3, total: 42, status: 'good' },
  { name: 'Igor Khomenko', cvr: 7.02, conversions: 4, total: 57, status: 'good' }
];

const coachingCandidates = [
  { name: 'Mariam Rahouli', cvr: 0.64, total: 257, stuck: 'ATTEMPT', priority: 'high' },
  { name: 'Saad Khan', cvr: 1.04, total: 130, stuck: 'ATTEMPT', priority: 'high' },
  { name: 'Samia Khan', cvr: 1.53, total: 178, stuck: 'ATTEMPT', priority: 'medium' },
  { name: 'Faraaz Arif', cvr: 1.59, total: 65, stuck: 'ATTEMPT', priority: 'medium' },
  { name: 'Adnan Arif', cvr: 1.6, total: 67, stuck: 'ATTEMPT', priority: 'medium' }
];

const executiveActions = [
  {
    title: 'Agent Mentorship Program',
    owner: 'Head of Sales',
    impact: '+15-25% CVR improvement',
    priority: 'immediate',
    details: 'Pair top performers with coaching candidates'
  },
  {
    title: 'Response Time Optimization',
    owner: 'Sales Operations',
    impact: '+8% contact rate improvement',
    priority: 'immediate',
    details: 'Implement 2-hour response SLA'
  },
  {
    title: 'Idle Lead Reactivation',
    owner: 'Marketing and Sales Teams',
    impact: '15% reactivation potential',
    priority: 'this-week',
    details: 'Target 255 dormant leads for recovery'
  }
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
                Executive Summary Report - Analysis Date: 03/08/2025 (YTD 2025)
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
                    <p className="dashboard-text-muted text-sm">Total Leads YTD</p>
                    <p className="dashboard-text text-2xl font-bold">4,862</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-green-500" />
                  <div>
                    <p className="dashboard-text-muted text-sm">Conversions</p>
                    <p className="dashboard-text text-2xl font-bold">108</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="dashboard-text-muted text-sm">Overall CVR</p>
                    <p className="dashboard-text text-2xl font-bold">2.22%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="dashboard-text-muted text-sm">Contact Rate</p>
                    <p className="dashboard-text text-2xl font-bold">45.7%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
            <TabsTrigger value="sources">Channels</TabsTrigger>
            <TabsTrigger value="performance">Top Performers</TabsTrigger>
            <TabsTrigger value="coaching">Coaching</TabsTrigger>
            <TabsTrigger value="actions">Action Plan</TabsTrigger>
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
                    <strong>2,463 leads (50.7%)</strong> are stuck in ATTEMPT stage. Contact rate only 45.7% - needs immediate action.
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
                    <h4 className="font-semibold dashboard-text mb-3">Key Insights (YTD 2025)</h4>
                    <ul className="space-y-2 dashboard-text-muted">
                      <li>• YTD Lead Volume: 4,862 leads processed</li>
                      <li>• Overall Conversion Rate: 2.22% (108 customers)</li>
                      <li>• Critical Bottleneck: 2,463 leads stuck at ATTEMPT stage</li>
                      <li>• Revenue at Risk: 255 IDLE leads requiring reactivation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold dashboard-text mb-3">Immediate Actions Required</h4>
                    <ul className="space-y-2 dashboard-text-muted">
                      <li>• Implement 2-hour response SLA (contact rate 45.7%)</li>
                      <li>• Agent mentorship program: Top → Bottom performers</li>
                      <li>• Reactivate 255 dormant leads (15% recovery target)</li>
                      <li>• Focus on high-performing channels (Referral: 85.7% CVR)</li>
                      <li>• Coach underperforming agents stuck in ATTEMPT stage</li>
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
                <CardTitle className="dashboard-text text-2xl">📱 Channel Performance Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {channelPerformance.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg dashboard-card">
                      <div className="flex items-center gap-4">
                        <div>
                          <div className="font-medium dashboard-text">{channel.source}</div>
                          <div className="text-sm dashboard-text-muted">{channel.leads} leads • {channel.waste}% waste</div>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <div>
                          <div className="text-2xl font-bold dashboard-text">{channel.cvr}%</div>
                          <div className="text-sm dashboard-text-muted">CVR</div>
                        </div>
                        <Badge variant={
                          channel.status === 'excellent' ? 'default' : 
                          channel.status === 'poor' ? 'destructive' : 'secondary'
                        }>
                          {channel.status}
                        </Badge>
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

          <TabsContent value="coaching" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl">🚨 Coaching Priority Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <span className="font-semibold text-orange-700 dark:text-orange-300">Urgent Coaching Required</span>
                    </div>
                    <p className="text-orange-600 dark:text-orange-400">
                      Agents below requiring immediate mentorship from top performers
                    </p>
                  </div>
                  
                  {coachingCandidates.map((agent, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg dashboard-card">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${
                          agent.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}></div>
                        <div>
                          <div className="font-medium dashboard-text">{agent.name}</div>
                          <div className="text-sm dashboard-text-muted">
                            {agent.total} total leads • Stuck in {agent.stuck}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-500">{agent.cvr}%</div>
                        <Badge variant="destructive" className="text-xs">
                          {agent.priority} priority
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actions" className="space-y-6">
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl">⚡ Executive Action Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {executiveActions.map((action, index) => (
                    <div key={index} className="p-6 rounded-lg dashboard-card border-l-4 border-accent">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold dashboard-text text-lg">{action.title}</h4>
                          <p className="dashboard-text-muted">{action.details}</p>
                        </div>
                        <Badge variant={action.priority === 'immediate' ? 'destructive' : 'default'}>
                          {action.priority}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm dashboard-text-muted">Owner</div>
                          <div className="font-medium dashboard-text">{action.owner}</div>
                        </div>
                        <div>
                          <div className="text-sm dashboard-text-muted">Expected Impact</div>
                          <div className="font-medium text-green-600 dark:text-green-400">{action.impact}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Next Steps</h4>
                    <ul className="text-green-600 dark:text-green-400 space-y-1">
                      <li>• Review and approve immediate actions</li>
                      <li>• Assign ownership for initiatives</li>
                      <li>• Implement monitoring dashboards</li>
                      <li>• Schedule weekly progress reviews</li>
                    </ul>
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