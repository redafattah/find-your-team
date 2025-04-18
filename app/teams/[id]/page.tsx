// app/teams/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dynamically import to avoid SSR issues in Next.js
const SoccerLineUp = dynamic(() => import("react-soccer-lineup"), { ssr: false });

const mockTeamDetails = {
  name: "Casablanca United",
  city: "Casablanca",
  description: "We’re passionate about football and team spirit.",
  achievements: ["🏆 Local League Champion 2023", "🥈 Ramadan Cup Finalist"],
  score: 87,
  members: [
    { id: 1, name: "Hamza", number: 1, position: "GK" },
    { id: 2, name: "Badr", number: 3, position: "LB" },
    { id: 3, name: "Hicham", number: 5, position: "CB" },
    { id: 4, name: "Youssef", number: 4, position: "CB" },
    { id: 5, name: "Nabil", number: 2, position: "RB" },
    { id: 6, name: "Amine", number: 6, position: "CM" },
    { id: 7, name: "YoussefMid", number: 8, position: "CM" },
    { id: 8, name: "Zakaria", number: 10, position: "CAM" },
    { id: 9, name: "Oussama", number: 11, position: "LW" },
    { id: 10, name: "Anas", number: 7, position: "RW" },
    { id: 11, name: "RedaKing", number: 9, position: "ST" },
  ],
};

// Build correct squad shape for `react-soccer-lineup`
const squad = {
  gk: { name: "Hamza", number: 1 },
  df: [
    { name: "Badr", number: 3 },
  
    { name: "Nabil", number: 2 },
  ],
  cm: [

    { name: "YoussefMid", number: 8 },
    { name: "Yassine", number: 8 },
  ],
  
  fw: [

    { name: "RedaKing", number: 9 },
  ],
};

export default function TeamProfilePage() {
  const { id } = useParams();

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold">{mockTeamDetails.name}</h2>
      <p className="text-muted-foreground">{mockTeamDetails.city}</p>
      <p className="mt-2">{mockTeamDetails.description}</p>

      <h3 className="text-xl font-semibold mt-6">🏆 Achievements</h3>
      <ul className="list-disc list-inside text-muted-foreground">
        {mockTeamDetails.achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">⭐ Score / Ranking</h3>
      <p className="text-lg font-bold">{mockTeamDetails.score} / 100</p>

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
        {mockTeamDetails.members.map((member) => (
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
  );
}
