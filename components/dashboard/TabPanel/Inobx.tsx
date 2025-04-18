// components/dashboard/TabPanel/Inbox.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const playerInvitations = [
  { id: 1, teamName: "Casablanca Titans", status: "pending", expiresIn: "3d" },
  { id: 2, teamName: "Atlas Stars", status: "accepted", expiresIn: null },
]

const ownerRequests = [
  { id: 1, playerName: "Yassine Mid", status: "pending" },
  { id: 2, playerName: "Omar Wing", status: "declined" },
]

export default function Inbox() {
  return (
    <div className="space-y-6">
      {/* Player Invitations */}
      <Card>
        <CardHeader>
          <CardTitle>📥 Invitations (as Player)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2">
            {playerInvitations.map((inv) => (
              <li key={inv.id} className="flex items-center justify-between">
                <span>{inv.teamName}</span>
                <span className="text-xs">
                  {inv.status === "pending"
                    ? `⏳ Expires in ${inv.expiresIn}`
                    : `✅ ${inv.status}`}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Owner Requests */}
      <Card>
        <CardHeader>
          <CardTitle>📨 Requests (as Team Owner)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2">
            {ownerRequests.map((req) => (
              <li key={req.id} className="flex items-center justify-between">
                <span>{req.playerName}</span>
                <span className="text-xs">
                  {req.status === "pending"
                    ? "⏳ Waiting"
                    : req.status === "declined"
                    ? "❌ Declined"
                    : "✅ Accepted"}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}