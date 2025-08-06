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
  { from: 'ATTEMPT', to: 'CONTACTED', rate: ((189/2436) * 100).toFixed(1), count: '189/2436' },
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
  { name: 'Wessam Simon', cvr: 11.70, conversions: 11, total: 94, status: 'excellent', volume: 'high' },
  { name: 'Igor Khomenko', cvr: 7.02, conversions: 4, total: 57, status: 'good', volume: 'medium' },
  { name: 'Ahmad Walid', cvr: 6.17, conversions: 5, total: 81, status: 'good', volume: 'high' },
  { name: 'Ali Asghar', cvr: 5.88, conversions: 3, total: 51, status: 'good', volume: 'medium' },
  { name: 'Sina Saeedi', cvr: 5.23, conversions: 5, total: 26, status: 'good', volume: 'low' }
];

const attentionRequired = [
  { name: 'CRM System', wasteRate: 99.89, leads: 16537, issue: 'system-failure', priority: 'critical' },
  { name: 'Ahmad Hamdan', wasteRate: 16.75, leads: 245, issue: 'high-waste', priority: 'high' },
  { name: 'Mariam Rahouli', wasteRate: 12.45, leads: 257, issue: 'process-issue', priority: 'medium' },
  { name: 'Saad Khan', wasteRate: 11.20, leads: 130, issue: 'training-needed', priority: 'medium' }
];

const bestSources = [
  { source: 'Referral', qualityScore: 95, cvr: 83.33, leads: 12, reliability: 'excellent' },
  { source: 'Personal', qualityScore: 92, cvr: 65.00, leads: 20, reliability: 'excellent' },
  { source: 'Call', qualityScore: 78, cvr: 34.52, leads: 84, reliability: 'good' },
  { source: 'WhatsApp', qualityScore: 45, cvr: 1.67, leads: 120, reliability: 'poor' }
];

const languagePerformance = [
  { language: 'Czech', cvr: 100.00, leads: 1, segment: 'premium' },
  { language: 'Russian', cvr: 9.52, leads: 21, segment: 'high-potential' },
  { language: 'English', cvr: 2.15, leads: 1250, segment: 'core' },
  { language: 'Arabic', cvr: 1.64, leads: 426, segment: 'untapped' }
];

const demographicAnalysis = [
  { category: 'Western Names', cvr: 1.04, leads: 385, potential: 'medium' },
  { category: 'Arabic Names', cvr: 0.87, leads: 1720, potential: 'high' },
  { category: 'Asian Names', cvr: 0.65, leads: 892, potential: 'medium' },
  { category: 'Other', cvr: 0.60, leads: 1865, potential: 'low' }
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
                    <p className="dashboard-text text-2xl font-bold">7.8%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
            <TabsTrigger value="sources">Channels</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="coaching">Coaching</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
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
                    <strong>2,463 leads (50.7%)</strong> are stuck in ATTEMPT stage. Contact rate only 7.8% - needs immediate action.
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
                      <li>• Implement 2-hour response SLA (contact rate 7.8%)</li>
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

          <TabsContent value="analytics" className="space-y-6">
            {/* Performance Rankings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performers Card */}
              <Card className="dashboard-card">
                <CardHeader>
                  <CardTitle className="dashboard-text text-xl flex items-center gap-2">
                    🏆 Top Performers
                    <Badge variant="default">Excellence</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topPerformers.map((performer, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium dashboard-text">{performer.name}</div>
                            <div className="text-xs dashboard-text-muted">{performer.total} leads • {performer.volume} volume</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600 dark:text-green-400">{performer.cvr}%</div>
                          <div className="text-xs dashboard-text-muted">{performer.conversions} conv</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Attention Required Card */}
              <Card className="dashboard-card">
                <CardHeader>
                  <CardTitle className="dashboard-text text-xl flex items-center gap-2">
                    ⚠️ Attention Required
                    <Badge variant="destructive">Critical</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {attentionRequired.map((item, index) => (
                      <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                        item.priority === 'critical' ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' :
                        item.priority === 'high' ? 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800' :
                        'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.priority === 'critical' ? 'bg-red-500' :
                            item.priority === 'high' ? 'bg-orange-500' : 'bg-yellow-500'
                          }`}></div>
                          <div>
                            <div className="font-medium dashboard-text">{item.name}</div>
                            <div className="text-xs dashboard-text-muted">{item.leads.toLocaleString()} leads • {item.issue}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600 dark:text-red-400">{item.wasteRate}%</div>
                          <div className="text-xs dashboard-text-muted">waste rate</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Best Sources Card */}
              <Card className="dashboard-card">
                <CardHeader>
                  <CardTitle className="dashboard-text text-xl flex items-center gap-2">
                    🎯 Best Sources
                    <Badge variant="default">Quality Leaders</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {bestSources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                            {source.qualityScore}
                          </div>
                          <div>
                            <div className="font-medium dashboard-text">{source.source}</div>
                            <div className="text-xs dashboard-text-muted">{source.leads} leads • {source.reliability}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{source.cvr}%</div>
                          <div className="text-xs dashboard-text-muted">CVR</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Language Performance Card */}
              <Card className="dashboard-card">
                <CardHeader>
                  <CardTitle className="dashboard-text text-xl flex items-center gap-2">
                    🗣️ Language Performance
                    <Badge variant="secondary">Global Reach</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {languagePerformance.map((lang, index) => (
                      <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                        lang.segment === 'premium' ? 'bg-gradient-to-r from-gold-50 to-yellow-50 dark:from-yellow-900/20 dark:to-orange-900/20' :
                        lang.segment === 'high-potential' ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' :
                        lang.segment === 'core' ? 'bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20' :
                        'bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                            lang.segment === 'premium' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                            lang.segment === 'high-potential' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                            lang.segment === 'core' ? 'bg-gradient-to-r from-gray-500 to-slate-500' :
                            'bg-gradient-to-r from-emerald-500 to-teal-500'
                          }`}>
                            {lang.language.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium dashboard-text">{lang.language}</div>
                            <div className="text-xs dashboard-text-muted">{lang.leads} leads • {lang.segment}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{lang.cvr}%</div>
                          <div className="text-xs dashboard-text-muted">CVR</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            {/* Demographic Analysis */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl flex items-center gap-2">
                  👥 Demographic Performance Analysis
                  <Badge variant="outline">Market Intelligence</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {demographicAnalysis.map((demo, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg dashboard-card border-l-4 border-accent">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                            demo.potential === 'high' ? 'bg-green-500' :
                            demo.potential === 'medium' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}>
                            {demo.category.split(' ')[0].slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-medium dashboard-text">{demo.category}</div>
                            <div className="text-sm dashboard-text-muted">{demo.leads.toLocaleString()} leads • {demo.potential} potential</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold dashboard-text">{demo.cvr}%</div>
                          <div className="text-sm dashboard-text-muted">CVR</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold dashboard-text text-lg">Key Market Opportunities</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="font-medium text-green-700 dark:text-green-300">Arabic Market Expansion</div>
                        <div className="text-sm text-green-600 dark:text-green-400">1,720 leads with untapped potential</div>
                      </div>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="font-medium text-blue-700 dark:text-blue-300">Western Names Optimization</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">385 leads with improvement opportunity</div>
                      </div>
                      <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                        <div className="font-medium text-purple-700 dark:text-purple-300">Asian Market Development</div>
                        <div className="text-sm text-purple-600 dark:text-purple-400">892 leads with growth potential</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Executive Impact Projections */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="dashboard-text text-2xl flex items-center gap-2">
                  💰 Revenue Impact Projections
                  <Badge variant="default">ROI Analysis</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 dark:text-red-400">AED 12.8M</div>
                      <div className="text-sm text-red-700 dark:text-red-300 mt-1">Revenue Recovery</div>
                      <div className="text-xs text-red-600 dark:text-red-400 mt-2">From CRM System Fix</div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">AED 8.5M</div>
                      <div className="text-sm text-green-700 dark:text-green-300 mt-1">Growth Potential</div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-2">From Optimization</div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">300%</div>
                      <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">ROI Improvement</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">Strategic Reallocations</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-gold-50 to-yellow-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">Total Potential Impact</div>
                    <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">AED 21.3M</div>
                    <div className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">Combined revenue opportunity from all initiatives</div>
                  </div>
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
                  {/* Immediate Actions */}
                  <div>
                    <h4 className="font-semibold dashboard-text text-lg mb-4 flex items-center gap-2">
                      🚨 Immediate Actions (Next 7 Days)
                      <Badge variant="destructive">Critical</Badge>
                    </h4>
                    <div className="space-y-4">
                      <div className="p-6 rounded-lg dashboard-card border-l-4 border-red-500">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h5 className="font-semibold dashboard-text">Fix CRM System</h5>
                            <p className="dashboard-text-muted">Address 99.89% waste rate affecting 16,537 leads</p>
                          </div>
                          <Badge variant="destructive">Critical</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm dashboard-text-muted">Owner</div>
                            <div className="font-medium dashboard-text">IT Operations & Sales Tech</div>
                          </div>
                          <div>
                            <div className="text-sm dashboard-text-muted">Expected Impact</div>
                            <div className="font-medium text-green-600 dark:text-green-400">AED 12.8M Revenue Recovery</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 rounded-lg dashboard-card border-l-4 border-orange-500">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h5 className="font-semibold dashboard-text">Scale Referral Program</h5>
                            <p className="dashboard-text-muted">Expand highest-performing channel (83% CVR)</p>
                          </div>
                          <Badge variant="destructive">Immediate</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm dashboard-text-muted">Owner</div>
                            <div className="font-medium dashboard-text">Marketing & Business Development</div>
                          </div>
                          <div>
                            <div className="text-sm dashboard-text-muted">Expected Impact</div>
                            <div className="font-medium text-green-600 dark:text-green-400">+200% Lead Quality</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 rounded-lg dashboard-card border-l-4 border-blue-500">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h5 className="font-semibold dashboard-text">Deploy Russian Language Specialists</h5>
                            <p className="dashboard-text-muted">Capitalize on 9.52% CVR opportunity</p>
                          </div>
                          <Badge variant="destructive">Immediate</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm dashboard-text-muted">Owner</div>
                            <div className="font-medium dashboard-text">HR & Sales Operations</div>
                          </div>
                          <div>
                            <div className="text-sm dashboard-text-muted">Expected Impact</div>
                            <div className="font-medium text-green-600 dark:text-green-400">+300% Russian Market</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Strategic Actions */}
                  <div>
                    <h4 className="font-semibold dashboard-text text-lg mb-4 flex items-center gap-2">
                      📈 Strategic Actions (Next 30 Days)
                      <Badge variant="default">Growth</Badge>
                    </h4>
                    <div className="space-y-4">
                      {executiveActions.map((action, index) => (
                        <div key={index} className="p-6 rounded-lg dashboard-card border-l-4 border-accent">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h5 className="font-semibold dashboard-text">{action.title}</h5>
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
                    </div>
                  </div>
                  
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