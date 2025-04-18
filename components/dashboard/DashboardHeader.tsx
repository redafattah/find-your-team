// components/dashboard/DashboardHeader.tsx
"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import MatchSchedulerModal from "../match/match-scheduler-modal"

export default function DashboardHeader() {
  const router = useRouter()

  const handleSignOut = () => {
    alert("Signed out!")
    router.push("/")
  }

  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-4 border-b">
      {/* Profile Info + Signout */}
      <div className="flex items-center gap-4">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Reda" />
          <AvatarFallback>RD</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold leading-none">Reda King</p>
          <p className="text-xs text-green-600 font-medium">✅ Active Player</p>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground p-0 w-fit h-fit text-xs"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </div>

      {/* Search + Create Match */}
      <div className="w-full md:w-[400px] flex items-center gap-2">
        <Input placeholder="Search teams, players, matches..." className="w-full" />
        <Button variant="secondary">Search</Button>
       <MatchSchedulerModal/>
       
      </div>
    </header>
  )
}
