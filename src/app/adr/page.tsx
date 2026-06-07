import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllContent } from "@/lib/content"

export const metadata: Metadata = {
  title: "Architecture Decision Records",
  description: "Technical architecture decisions and rationale",
}

export default function ADRPage() {
  const adrs = getAllContent("adr")

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Architecture Decision Records
      </h1>
      <p className="mb-8 text-muted-foreground">
        Technical decisions, trade-offs, and rationale behind key architecture choices.
      </p>

      <div className="space-y-4">
        {adrs.length === 0 && (
          <p className="text-sm text-muted-foreground">Coming soon...</p>
        )}
        {adrs.map((adr) => (
          <Link key={adr.slug} href={`/adr/${adr.slug}`}>
            <Card className="transition-colors hover:bg-accent/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{adr.title}</CardTitle>
                    {adr.description && (
                      <p className="mt-1 text-sm text-muted-foreground">{adr.description}</p>
                    )}
                  </div>
                  <time className="shrink-0 text-sm text-muted-foreground">{adr.date}</time>
                </div>
              </CardHeader>
              {adr.tags && adr.tags.length > 0 && (
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {adr.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
