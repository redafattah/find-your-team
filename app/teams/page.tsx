// app/teams/page.tsx
"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mockTeams = [
  {
    id: "1",
    name: "Casablanca United",
    city: "Casablanca",
    description: "Ambitious 5v5 team looking for consistent players.",
  },
  {
    id: "2",
    name: "Rabat Eagles",
    city: "Rabat",
    description: "Friendly matches every Sunday in Rabat Arena.",
  },
  {
    id: "3",
    name: "Marrakech Lions",
    city: "Marrakech",
    description: "We train hard and party harder ⚽🔥",
  },
]

export default function TeamsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">🏟 Browse Public Teams</h2>
      <p className="text-muted-foreground mb-4">Explore teams near you and learn more about them.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {mockTeams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{team.city}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>{team.description}</p>
              <Link href={`/teams/${team.id}`}>
                <p className="text-blue-600 hover:underline">View Profile →</p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
