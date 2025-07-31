import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ConversionRankings } from './ConversionRankings';
import { VolumeRankings } from './VolumeRankings';
import { EngagementChart } from './EngagementChart';
import { ClosingRankings } from './ClosingRankings';
import { EfficiencyChart } from './EfficiencyChart';
import { QualityRankings } from './QualityRankings';
import { QuarterSummary } from './QuarterSummary';
import { LoadingScreen } from './LoadingScreen';

interface Agent {
  name: string;
  conversionRate: number;
  totalLeads: number;
  customers: number;
  engagementRate: number;
  quality: number;
  sourceCount: number;
}

interface QuarterData {
  totalLeads: number;
  totalConversions: number;
  avgConversion: number;
  agents: Agent[];
}

const realData: Record<string, QuarterData> = {
  Q1: {
    totalLeads: 795,
    totalConversions: 20,
    avgConversion: 7.3,
    agents: [
      { name: 'Claudio Panato', conversionRate: 100.0, totalLeads: 3, customers: 3, engagementRate: 0.0, quality: 50.0, sourceCount: 1 },
      { name: 'Davide Bonaldo', conversionRate: 27.3, totalLeads: 11, customers: 3, engagementRate: 63.6, quality: 45.5, sourceCount: 6 },
      { name: 'Maickel Faragalla', conversionRate: 22.2, totalLeads: 9, customers: 2, engagementRate: 33.3, quality: 27.8, sourceCount: 3 },
      { name: 'Maleka Mohamed Ammar', conversionRate: 11.1, totalLeads: 9, customers: 1, engagementRate: 88.9, quality: 50.0, sourceCount: 2 },
      { name: 'Igor Khomenko', conversionRate: 11.1, totalLeads: 9, customers: 1, engagementRate: 88.9, quality: 50.0, sourceCount: 4 },
      { name: 'Radwa Ahmed', conversionRate: 10.0, totalLeads: 30, customers: 3, engagementRate: 53.3, quality: 31.7, sourceCount: 3 },
      { name: 'Adnan Arif', conversionRate: 7.7, totalLeads: 13, customers: 1, engagementRate: 46.2, quality: 26.9, sourceCount: 3 },
      { name: 'Alisar Al Najdi', conversionRate: 5.6, totalLeads: 36, customers: 2, engagementRate: 77.8, quality: 41.7, sourceCount: 4 },
      { name: 'Saad Khan', conversionRate: 3.8, totalLeads: 52, customers: 2, engagementRate: 53.8, quality: 28.8, sourceCount: 5 },
      { name: 'Samia Khan', conversionRate: 3.7, totalLeads: 27, customers: 1, engagementRate: 96.3, quality: 50.0, sourceCount: 3 }
    ]
  },
  Q2: {
    totalLeads: 1492,
    totalConversions: 20,
    avgConversion: 5.5,
    agents: [
      { name: 'Claudio Panato', conversionRate: 100.0, totalLeads: 1, customers: 1, engagementRate: 0.0, quality: 50.0, sourceCount: 1 },
      { name: 'Faraaz Arif', conversionRate: 40.0, totalLeads: 5, customers: 2, engagementRate: 20.0, quality: 30.0, sourceCount: 3 },
      { name: 'Safa El Amri', conversionRate: 20.0, totalLeads: 10, customers: 2, engagementRate: 40.0, quality: 30.0, sourceCount: 4 },
      { name: 'Ahmad Walid', conversionRate: 7.4, totalLeads: 27, customers: 2, engagementRate: 85.2, quality: 46.3, sourceCount: 3 },
      { name: 'Davide Bonaldo', conversionRate: 7.1, totalLeads: 28, customers: 2, engagementRate: 50.0, quality: 28.6, sourceCount: 4 },
      { name: 'Maickel Faragalla', conversionRate: 6.3, totalLeads: 16, customers: 1, engagementRate: 50.0, quality: 28.1, sourceCount: 5 },
      { name: 'Igor Khomenko', conversionRate: 4.7, totalLeads: 43, customers: 2, engagementRate: 95.3, quality: 50.0, sourceCount: 6 },
      { name: 'Khaoula Boutouil', conversionRate: 4.4, totalLeads: 45, customers: 2, engagementRate: 86.7, quality: 45.6, sourceCount: 6 },
      { name: 'Karim El Sabagh', conversionRate: 3.4, totalLeads: 89, customers: 3, engagementRate: 38.2, quality: 20.8, sourceCount: 5 },
      { name: 'Adnan Arif', conversionRate: 2.0, totalLeads: 50, customers: 1, engagementRate: 72.0, quality: 37.0, sourceCount: 4 }
    ]
  },
  Q3: {
    totalLeads: 963,
    totalConversions: 19,
    avgConversion: 4.7,
    agents: [
      { name: 'Mehdi Mofidi', conversionRate: 50.0, totalLeads: 2, customers: 1, engagementRate: 0.0, quality: 25.0, sourceCount: 2 },
      { name: 'Sina Saeedi', conversionRate: 30.0, totalLeads: 10, customers: 3, engagementRate: 60.0, quality: 45.0, sourceCount: 3 },
      { name: 'Wessam Simon', conversionRate: 19.4, totalLeads: 36, customers: 7, engagementRate: 63.9, quality: 41.7, sourceCount: 4 },
      { name: 'Safa El Amri', conversionRate: 16.7, totalLeads: 6, customers: 1, engagementRate: 66.7, quality: 41.7, sourceCount: 3 },
      { name: 'Ahmad Walid', conversionRate: 6.0, totalLeads: 50, customers: 3, engagementRate: 50.0, quality: 28.0, sourceCount: 6 },
      { name: 'Asem Khurshid', conversionRate: 4.3, totalLeads: 23, customers: 1, engagementRate: 17.4, quality: 10.9, sourceCount: 4 },
      { name: 'Mohamed Nader', conversionRate: 4.2, totalLeads: 24, customers: 1, engagementRate: 45.8, quality: 25.0, sourceCount: 5 },
      { name: 'Alisar Al Najdi', conversionRate: 2.2, totalLeads: 90, customers: 2, engagementRate: 43.3, quality: 22.8, sourceCount: 6 },
      { name: 'Adnan Arif', conversionRate: 0.0, totalLeads: 72, customers: 0, engagementRate: 52.8, quality: 26.4, sourceCount: 4 },
      { name: 'Ahmad Hamdan', conversionRate: 0.0, totalLeads: 37, customers: 0, engagementRate: 54.1, quality: 27.0, sourceCount: 6 }
    ]
  }
};

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuarter, setCurrentQuarter] = useState('Q1');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const data = realData[currentQuarter];

  const titles = {
    'all': 'Agent Performance Rankings',
    'conversion': '✅ Exclusive Closers Rankings',
    'volume': '👥 Volume Leaders Rankings',
    'engagement': '💬 Engagement Masters Rankings',
    'quality': '⭐ Quality Specialists Rankings'
  };

  const descriptions = {
    'all': 'Top performers across all key metrics',
    'conversion': 'Agents with highest conversion rates',
    'volume': 'Agents handling the most leads',
    'engagement': 'Best at client interaction and follow-up',
    'quality': 'Overall excellence in lead management'
  };

  return (
    <div className="min-h-screen dashboard-bg">
      <div className="container mx-auto p-6 animate-slide-up">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="text-5xl">🏆</div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold dashboard-text">
                Real Estate Performance Analytics
              </h1>
              <p className="dashboard-accent text-lg md:text-xl">
                Agent Rankings & Performance Dashboard - 2025
              </p>
            </div>
          </div>
          
          {/* Quarter Selector */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-3xl">📅</div>
              <div className="flex dashboard-card rounded-xl p-2">
                {['Q1', 'Q2', 'Q3'].map((quarter) => (
                  <Button
                    key={quarter}
                    variant={currentQuarter === quarter ? "default" : "ghost"}
                    onClick={() => setCurrentQuarter(quarter)}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                      currentQuarter === quarter
                        ? 'bg-accent text-accent-foreground shadow-lg transform scale-105'
                        : 'dashboard-text hover:bg-red-700/50 hover:text-accent'
                    }`}
                  >
                    {quarter} 2025
                    <span className="block text-xs opacity-75">
                      {realData[quarter].totalLeads.toLocaleString()} leads
                    </span>
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-2xl">🔍</div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[200px] dashboard-card border-red-700/50 dashboard-text">
                  <SelectValue placeholder="Filter category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">🏆 All Categories</SelectItem>
                  <SelectItem value="conversion">✅ Exclusive Closers</SelectItem>
                  <SelectItem value="volume">👥 Volume Leaders</SelectItem>
                  <SelectItem value="engagement">💬 Engagement Masters</SelectItem>
                  <SelectItem value="quality">⭐ Quality Specialists</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">👥</div>
                  <div>
                    <p className="dashboard-text-muted text-sm">Total Leads</p>
                    <p className="dashboard-text text-xl font-bold">
                      {data.totalLeads.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">✅</div>
                  <div>
                    <p className="dashboard-text-muted text-sm">Total Conversions</p>
                    <p className="dashboard-text text-xl font-bold">
                      {data.totalConversions}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <p className="dashboard-text-muted text-sm">Active Agents</p>
                    <p className="dashboard-text text-xl font-bold">
                      {data.agents.length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">📈</div>
                  <div>
                    <p className="dashboard-text-muted text-sm">Avg Conversion Rate</p>
                    <p className="dashboard-text text-xl font-bold">
                      {data.avgConversion}%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Rankings Section */}
        <div className="mb-8 animate-fade-in-delayed">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold dashboard-text mb-2">
              {titles[category as keyof typeof titles]}
            </h2>
            <p className="dashboard-accent">
              {descriptions[category as keyof typeof descriptions]}
            </p>
          </div>
          
          {/* Rankings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <ConversionRankings agents={data.agents} />
            <VolumeRankings agents={data.agents} />
            <EngagementChart agents={data.agents} />
            <ClosingRankings agents={data.agents} />
            <EfficiencyChart agents={data.agents} />
            <QualityRankings agents={data.agents} />
          </div>
        </div>

        {/* Quarter Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {['Q1', 'Q2', 'Q3'].map((quarter) => (
            <QuarterSummary
              key={quarter}
              quarter={quarter}
              data={realData[quarter]}
              isActive={currentQuarter === quarter}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="dashboard-text-muted text-sm">
            Last updated: {new Date().toLocaleDateString()} • Real Estate Performance Analytics • 
            Showing {currentQuarter} 2025 data with {data.agents.length} active agents
          </p>
        </div>
      </div>
    </div>
  );
}