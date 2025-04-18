"use client"

import { useEffect, useState } from "react"
import { formatDistanceToNowStrict, parseISO, isBefore } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const now = new Date()

// 🟦 Example Data (later connect to Supabase)
const sentInvitations = [
  {
    id: 1,
    to: "Omar Bennani",
    sentAt: "2025-04-17T16:00:00Z",
    expiresInMinutes: 4320, // 3 days
    status: "pending", // or "accepted"
  },
]

const receivedInvitations = [
  {
    id: 2,
    from: "Youssef Coach",
    sentAt: "2025-06-18T10:00:00Z",
    expiresInMinutes: 30,
    status: "pending",
  },
]

export default function InvitationsPage() {
  const [timeLeft, setTimeLeft] = useState<{ [key: number]: string }>({})

  useEffect(() => {
    const interval = setInterval(() => {
      const updated: { [key: number]: string } = {}

      ;[...sentInvitations, ...receivedInvitations].forEach((inv) => {
        const expiresAt = new Date(parseISO(inv.sentAt).getTime() + inv.expiresInMinutes * 60000)
        if (isBefore(expiresAt, new Date())) {
          updated[inv.id] = "Expired"
        } else {
          updated[inv.id] = formatDistanceToNowStrict(expiresAt, { addSuffix: true })
        }
      })

      setTimeLeft(updated)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold">📥 My Invitations</h2>

      {/* 🟦 Sent by Me */}
      <div>
        <h3 className="text-xl font-semibold mb-4">📤 Team Owner Box</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {sentInvitations.length === 0 ? (
            <p className="text-muted-foreground">You haven't sent any invitations.</p>
          ) : (
            sentInvitations.map((inv) => {
              const isExpired = timeLeft[inv.id] === "Expired"
              return (
                <Card key={inv.id}>
                  <CardHeader>
                    <CardTitle>To: {inv.to}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Sent {formatDistanceToNowStrict(parseISO(inv.sentAt))} ago
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p>Status: {isExpired ? "⛔ Expired" : inv.status === "accepted" ? "✅ Accepted" : "⏳ Pending"}</p>
                    {inv.status === "pending" && <p>Expires {timeLeft[inv.id]}</p>}
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </div>

      {/* 🟩 Received by Me */}
      <div>
        <h3 className="text-xl font-semibold mt-10 mb-4">📥 Player Box</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {receivedInvitations.length === 0 ? (
            <p className="text-muted-foreground">You have no new invitations.</p>
          ) : (
            receivedInvitations.map((inv) => {
              const isExpired = timeLeft[inv.id] === "Expired"
              return (
                <Card key={inv.id}>
                  <CardHeader>
                    <CardTitle>From: {inv.from}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Received {formatDistanceToNowStrict(parseISO(inv.sentAt))} ago
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>Status: {isExpired ? "⛔ Expired" : inv.status === "accepted" ? "✅ Accepted" : "⏳ Pending"}</p>
                    {inv.status === "pending" && !isExpired && (
                      <>
                        <p>Expires {timeLeft[inv.id]}</p>
                        <div className="flex gap-2">
                          <Button size="sm" variant="default">Accept</Button>
                          <Button size="sm" variant="outline">Decline</Button>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
