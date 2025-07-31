import { Dashboard } from './Dashboard';

// Embeddable version of the dashboard for iframe integration
export function EmbeddableDashboard() {
  return (
    <div className="w-full h-full min-h-screen">
      <style>{`
        /* Remove default margins and ensure full viewport usage */
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        
        /* Ensure the dashboard scales properly in iframe */
        .dashboard-embed {
          zoom: 1;
          transform-origin: top left;
        }
        
        /* Hide scrollbars if needed */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="dashboard-embed">
        <Dashboard />
      </div>
    </div>
  );
}