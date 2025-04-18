// app/teams/create/page.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function CreateTeamPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">🏆 Create Your Team</h2>

      <form className="space-y-4">
        <div>
          <Label htmlFor="name">Team Name</Label>
          <Input id="name" placeholder="e.g. Casablanca United" />
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="e.g. Casablanca" />
        </div>

        <div>
          <Label htmlFor="description">Team Description</Label>
          <Textarea id="description" placeholder="Share your team’s vibe or goals..." />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Team"}
        </Button>
      </form>
    </div>
  )
}
