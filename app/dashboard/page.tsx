// app/dashboard/page.tsx
"use client"

import { useState } from "react"
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import DashboardTabs from "@/components/dashboard/DashboardTabs"
import Overview from "@/components/dashboard/TabPanel/Overview"
import Teams from "@/components/dashboard/TabPanel/Teams"
import Matches from "@/components/dashboard/TabPanel/Matches"
import Inbox from "@/components/dashboard/TabPanel/Inobx"


export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const renderTabContent = () => {
    switch (selectedTab) {
      case "overview":
        return <Overview />
      case "teams":
        return <Teams />
      case "matches":
        return <Matches />
      case "inbox":
        return <Inbox />
      default:
        return null
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <DashboardHeader />
      <DashboardTabs selected={selectedTab} onChange={setSelectedTab} />
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  )
}