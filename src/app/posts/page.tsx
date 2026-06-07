import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { posts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical blog posts about full-stack development, Web3, and system design",
}

export default function PostsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">Blog</h1>
      <p className="mb-8 text-muted-foreground">
        Project retrospectives, technical deep dives, and architecture notes.
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <Card className="transition-colors hover:bg-accent/50">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">{post.description}</p>
                  </div>
                  <time className="shrink-0 text-sm text-muted-foreground">{post.date}</time>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
