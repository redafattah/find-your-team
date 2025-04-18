// app/players/page.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const players = [
  {
    id: 1,
    username: "RedaKing",
    city: "Casablanca",
    position: "Striker",
    skill: "Pro",
    availability: "Weekends & Evenings",
    avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Reda",
  },
  {
    id: 2,
    username: "YoussefMid",
    city: "Rabat",
    position: "Midfielder",
    skill: "Intermediate",
    availability: "Weekdays after 6PM",
    avatar: "https://api.dicebear.com/7.x/fun-emoji/svg?seed=Youssef",
  },
]

export default function PlayersPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">🔍 Find Players</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {players.map((player) => (
          <Card key={player.id}>
            <CardHeader className="flex items-center gap-4">
              <img src={player.avatar} alt={player.username} className="w-12 h-12 rounded-full" />
              <div>
                <CardTitle>{player.username}</CardTitle>
                <p className="text-sm text-muted-foreground">{player.city}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Position:</strong> {player.position}</p>
              <p><strong>Skill:</strong> {player.skill}</p>
              <p><strong>Availability:</strong> {player.availability}</p>
              <Button className="mt-2 w-full">Invite to Team</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
