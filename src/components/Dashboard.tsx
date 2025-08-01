import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OverallCloserRankings } from './OverallCloserRankings';
import { RevenueGeneratorRankings } from './RevenueGeneratorRankings';
import { VolumeRankings } from './VolumeRankings';
import { QualityRankings } from './QualityRankings';
import { ClosingRankings } from './ClosingRankings';
import { ConversionRankings } from './ConversionRankings';
import { EngagementChart } from './EngagementChart';
import { EfficiencyChart } from './EfficiencyChart';
import { QuarterSummary } from './QuarterSummary';
import { LoadingScreen } from './LoadingScreen';
import osusLogo from '@/assets/osus-logo.png';

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

interface QuarterData {
  totalLeads: number;
  totalConversions: number;
  avgConversion: number;
  agents: Agent[];
}

const realData: Record<string, QuarterData> = {
  Q1: {
    totalLeads: 185,
    totalConversions: 12,
    avgConversion: 6.5,
    agents: [
      { name: 'Faraaz Arif', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 1500000, engagementRate: 96.3, quality: 96.3, sourceCount: 2 },
      { name: 'Alisar Al Najdi', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 1800000, engagementRate: 93.7, quality: 93.7, sourceCount: 2 },
      { name: 'Khaoula Boutouil', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 3100000, engagementRate: 93.4, quality: 93.4, sourceCount: 2 },
      { name: 'Saad Khan', conversionRate: 75.0, totalLeads: 4, customers: 3, revenue: 4700000, engagementRate: 75.9, quality: 75.9, sourceCount: 5 },
      { name: 'Davide Bonaldo', conversionRate: 66.7, totalLeads: 3, customers: 2, revenue: 2200000, engagementRate: 74.7, quality: 74.7, sourceCount: 4 },
      { name: 'Claudio Panato', conversionRate: 75.0, totalLeads: 4, customers: 3, revenue: 3000000, engagementRate: 80.0, quality: 80.0, sourceCount: 3 },
      { name: 'Hana Taghids', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 1200000, engagementRate: 85.0, quality: 85.0, sourceCount: 2 },
      { name: 'Maickel Faragalla', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 1000000, engagementRate: 85.0, quality: 85.0, sourceCount: 3 },
      { name: 'Radwa Ahmed', conversionRate: 0.0, totalLeads: 1, customers: 0, revenue: 0, engagementRate: 40.0, quality: 40.0, sourceCount: 1 }
    ]
  },
  Q2: {
    totalLeads: 245,
    totalConversions: 15,
    avgConversion: 6.1,
    agents: [
      { name: 'Ahmad Walid', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 2200000, engagementRate: 95.5, quality: 95.5, sourceCount: 2 },
      { name: 'Samia Khan', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 3600000, engagementRate: 94.0, quality: 94.0, sourceCount: 2 },
      { name: 'Hana Taghids', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 3400000, engagementRate: 92.8, quality: 92.8, sourceCount: 2 },
      { name: 'Hicham El Assaad', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 4500000, engagementRate: 90.0, quality: 90.0, sourceCount: 2 },
      { name: 'Wessam Simon', conversionRate: 60.0, totalLeads: 10, customers: 6, revenue: 7200000, engagementRate: 74.1, quality: 74.1, sourceCount: 4 },
      { name: 'Karim El Sabagh', conversionRate: 50.0, totalLeads: 4, customers: 2, revenue: 4300000, engagementRate: 70.0, quality: 70.0, sourceCount: 6 },
      { name: 'Igor Khomenko', conversionRate: 75.0, totalLeads: 4, customers: 3, revenue: 2800000, engagementRate: 80.0, quality: 80.0, sourceCount: 5 },
      { name: 'Asem Khurshid', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 1300000, engagementRate: 85.0, quality: 85.0, sourceCount: 3 },
      { name: 'Radwa Ahmed', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 2000000, engagementRate: 88.0, quality: 88.0, sourceCount: 2 },
      { name: 'Faraaz Arif', conversionRate: 50.0, totalLeads: 2, customers: 1, revenue: 1200000, engagementRate: 75.0, quality: 75.0, sourceCount: 3 }
    ]
  },
  Q3: {
    totalLeads: 312,
    totalConversions: 18,
    avgConversion: 5.8,
    agents: [
      { name: 'Sina Heghi', conversionRate: 100.0, totalLeads: 3, customers: 3, revenue: 2300000, engagementRate: 96.1, quality: 96.1, sourceCount: 2 },
      { name: 'Ahmad Walid', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 936000, engagementRate: 94.0, quality: 94.0, sourceCount: 2 },
      { name: 'Mehdi Mofidi', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 2500000, engagementRate: 92.5, quality: 92.5, sourceCount: 2 },
      { name: 'Hajar Mohammad', conversionRate: 87.5, totalLeads: 8, customers: 7, revenue: 5900000, engagementRate: 89.0, quality: 89.0, sourceCount: 3 },
      { name: 'Wessam Simon', conversionRate: 85.7, totalLeads: 7, customers: 6, revenue: 10100000, engagementRate: 86.5, quality: 86.5, sourceCount: 4 },
      { name: 'Hicham El Assaad', conversionRate: 100.0, totalLeads: 1, customers: 1, revenue: 1100000, engagementRate: 89.0, quality: 89.0, sourceCount: 2 },
      { name: 'Sina Saeedi', conversionRate: 50.0, totalLeads: 2, customers: 1, revenue: 1800000, engagementRate: 75.0, quality: 75.0, sourceCount: 3 },
      { name: 'Alisar Al Najdi', conversionRate: 20.0, totalLeads: 5, customers: 1, revenue: 1100000, engagementRate: 65.0, quality: 65.0, sourceCount: 6 },
      { name: 'Adnan Arif', conversionRate: 0.0, totalLeads: 15, customers: 0, revenue: 0, engagementRate: 40.0, quality: 40.0, sourceCount: 4 },
      { name: 'Mohamed Nader', conversionRate: 0.0, totalLeads: 8, customers: 0, revenue: 0, engagementRate: 35.0, quality: 35.0, sourceCount: 3 }
    ]
  }
};

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuarter, setCurrentQuarter] = useState('Q1');

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

  return (
    <div className="min-h-screen dashboard-bg">
      <div className="container mx-auto p-6 animate-slide-up">
        {/* Header Section */}
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
                  <div className="text-5xl">🏆</div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold dashboard-text">
                  Real Estate Performance Analytics
                </h1>
              </div>
              <p className="dashboard-accent text-lg md:text-xl">
                Quarterly Agent Rankings & Performance Dashboard - 2025
              </p>
            </div>
          </div>
          
          {/* Quarter Selector */}
          <div className="flex items-center gap-4 mb-6">
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
            <h2 className="text-3xl font-bold dashboard-text mb-2">
              Performance Rankings & Analytics
            </h2>
            <p className="dashboard-accent text-lg">
              Comprehensive Agent Performance Analysis
            </p>
          </div>
          
          {/* Primary Rankings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <OverallCloserRankings agents={data.agents} />
            <RevenueGeneratorRankings agents={data.agents} />
          </div>

          {/* Secondary Rankings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            <VolumeRankings agents={data.agents} />
            <QualityRankings agents={data.agents} />
            <ClosingRankings agents={data.agents} />
          </div>

          {/* Analysis Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <ConversionRankings agents={data.agents} />
            <EngagementChart agents={data.agents} />
            <EfficiencyChart agents={data.agents} />
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