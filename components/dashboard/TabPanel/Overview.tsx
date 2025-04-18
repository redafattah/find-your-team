// components/dashboard/TabPanel/Overview.tsx

export default function Overview() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Scheduled Matches Preview */}
        <div className="bg-white dark:bg-muted rounded-lg shadow-sm p-4 border">
          <h3 className="text-lg font-semibold mb-1">📅 Upcoming Matches</h3>
          <p className="text-sm text-muted-foreground">3 matches scheduled this week</p>
        </div>
  
        {/* Team Score Preview */}
        <div className="bg-white dark:bg-muted rounded-lg shadow-sm p-4 border">
          <h3 className="text-lg font-semibold mb-1">🏆 Team Score</h3>
          <p className="text-sm text-muted-foreground">Your team score is <span className="font-medium">87</span></p>
        </div>
  
        {/* General App Stats */}
        <div className="bg-white dark:bg-muted rounded-lg shadow-sm p-4 border">
          <h3 className="text-lg font-semibold mb-1">📊 Stats</h3>
          <p className="text-sm text-muted-foreground">12 players joined this week</p>
        </div>
      </div>
    )
  }
  