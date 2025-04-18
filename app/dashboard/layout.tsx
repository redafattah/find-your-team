// app/dashboard/layout.tsx
import type { Metadata } from "next"
import { ReactNode } from "react"

// 🧠 SEO metadata
export const metadata: Metadata = {
  title: "Dashboard | Find Your Team",
  description: "Manage your football team, matches, and invitations all in one place.",
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto min-h-screen p-6">
      {children}
    </div>
  )
}
