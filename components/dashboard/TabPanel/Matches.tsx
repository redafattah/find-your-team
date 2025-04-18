// components/dashboard/TabPanel/Matches.tsx
"use client"

import { useState } from "react"
import { CalendarDays, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import MatchSchedulerModal from "@/components/match/match-scheduler-modal"


const upcomingMatches = [
  {
    id: 1,
    location: "Sport X",
    date: new Date(),
    time: "19:00",
    type: "5v5",
  },
  {
    id: 2,
    location: "Sport Z",
    date: new Date(Date.now() + 86400000),
    time: "21:00",
    type: "7v7",
  },
]

const pastMatches = [
  {
    id: 1,
    location: "Sport G",
    date: new Date(Date.now() - 3 * 86400000),
    time: "18:00",
    type: "5v5",
  },
]

export default function Matches() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">📅 Match Schedule</h2>
      
      </div>

      {/* Upcoming Matches */}
      <div>
        <h3 className="text-lg font-semibold mb-2">🟢 Upcoming Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingMatches.map((match) => (
            <Card key={match.id}>
              <CardHeader>
                <CardTitle>{match.location} — {match.type}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" /> {format(match.date, 'PPP')}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {match.time}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Past Matches */}
      <div>
        <h3 className="text-lg font-semibold mb-2">🕓 Past Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pastMatches.map((match) => (
            <Card key={match.id}>
              <CardHeader>
                <CardTitle>{match.location} — {match.type}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" /> {format(match.date, 'PPP')}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {match.time}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
