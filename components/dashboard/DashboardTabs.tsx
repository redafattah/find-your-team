// components/dashboard/DashboardTabs.tsx
"use client"

import { Button } from "@/components/ui/button"

const tabs = [
  { id: "overview", label: "🏠 Overview" },
  { id: "teams", label: "🏆 Teams" },
  { id: "matches", label: "📅 Matches" },
  { id: "inbox", label: "📥 Inbox" },
]

interface DashboardTabsProps {
  selected: string
  onChange: (tabId: string) => void
}

export default function DashboardTabs({ selected, onChange }: DashboardTabsProps) {
  return (
    <nav className="flex gap-2 border-b pb-2">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={selected === tab.id ? "default" : "outline"}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </Button>
      ))}
    </nav>
  )
}
