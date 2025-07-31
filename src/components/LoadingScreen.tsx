export function LoadingScreen() {
  return (
    <div className="min-h-screen dashboard-bg flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent mx-auto mb-4"></div>
        <p className="dashboard-accent text-xl font-semibold">
          Analyzing Performance Data...
        </p>
        <p className="dashboard-text-muted text-sm mt-2">
          Processing 3,250 leads across quarters
        </p>
      </div>
    </div>
  );
}