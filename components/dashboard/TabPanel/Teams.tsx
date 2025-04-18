// components/dashboard/TabPanel/Teams.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Teams() {
  return (
    <div className="space-y-6">
      {/* Your Team */}
      <Card>
        <CardHeader>
          <CardTitle>🏆 Your Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">
            You’re part of <strong>Casablanca Warriors</strong>
          </p>
          <div className="flex gap-3">
            <Link href="/teams/my-team">
              <Button className="w-full">View Team</Button>
            </Link>
            <Link href="/players">
              <Button variant="outline" className="w-full">Browse Players</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Browse Teams */}
      <Card>
        <CardHeader>
          <CardTitle>🔍 Browse Teams</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            Discover public teams near you and explore their profiles.
          </p>
          <Link href="/teams">
            <Button className="w-full">Browse Teams</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
