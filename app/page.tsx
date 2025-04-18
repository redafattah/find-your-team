// app/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">⚽ Find Your Team</h1>
      <p className="text-lg mb-8 text-muted-foreground">Connect with passionate soccer players near you and build your dream team.</p>

      <div className="flex gap-4">
        <Link href="/signup">
          <Button>Join Now</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </main>
  )
}
