// app/teams/my-team/page.tsx
"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Dynamically import to prevent SSR issues
const SoccerLineUp = dynamic(() => import("react-soccer-lineup"), { ssr: false })

const myTeam = {
  name: "Casablanca Warriors",
  city: "Casablanca",
  description: "Built by passion. Playing for purpose.",
  achievements: ["🏆 District Champions 2024", "💪 Undefeated in March"],
  score: 92,
  members: [
    { id: 1, name: "Hamza", number: 1, position: "GK" },
    { id: 2, name: "Badr", number: 3, position: "LB" },
    { id: 3, name: "Nabil", number: 2, position: "RB" },
    { id: 4, name: "YoussefMid", number: 8, position: "CM" },
    { id: 5, name: "RedaKing", number: 9, position: "ST" },
  ],
}

// 💡 5v5 Squad setup
const squad = {
  gk: { name: "Hamza", number: 1 },
  df: [
    { name: "Badr", number: 3 },
    { name: "Nabil", number: 2 },
  ],
  cm: [{ name: "YoussefMid", number: 8 }],
  fw: [{ name: "RedaKing", number: 9 }],
}

export default function MyTeamPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">{myTeam.name}</h2>
          <p className="text-muted-foreground">{myTeam.city}</p>
          <p className="mt-2">{myTeam.description}</p>
        </div>
        <Link href="/players">
          <Button>Browse & Invite Players</Button>
        </Link>
      </div>

      <h3 className="text-xl font-semibold mt-6">🏆 Achievements</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {myTeam.achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">⭐ Score / Ranking</h3>
      <p className="text-lg font-bold">{myTeam.score} / 100</p>

      <h3 className="text-xl font-semibold mt-6">🏟️ Formation</h3>
      <div className="mt-4 border rounded-lg overflow-hidden">
        <SoccerLineUp
          color="green"
          pattern="lines"
          size="responsive"
          homeTeam={{ squad }}
        />
      </div>

      <h3 className="text-xl font-semibold mt-6">👥 Team Members</h3>
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        {myTeam.members.map((member) => (
          <Card key={member.id}>
            <CardHeader className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white">
                {member.number}
              </div>
              <div>
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{member.position}</p>
              </div>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </div>
  )
}
