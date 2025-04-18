// app/profile/page.tsx
"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ProfilePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">👤 Player Profile</h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="e.g. RedaKing" />
        </div>

        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="e.g. Casablanca" />
        </div>

        <div>
          <Label htmlFor="position">Preferred Position</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose a position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="striker">Striker</SelectItem>
              <SelectItem value="midfielder">Midfielder</SelectItem>
              <SelectItem value="defender">Defender</SelectItem>
              <SelectItem value="goalkeeper">Goalkeeper</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="skill">Skill Level</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="availability">Availability</Label>
          <Textarea id="availability" placeholder="e.g. Weekends, evenings..." />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Profile"}
        </Button>
      </form>
    </div>
  )
}
