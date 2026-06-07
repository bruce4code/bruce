import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllContent, getContentBySlug } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

interface Props {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  const adrs = getAllContent("adr")
  return adrs.map((adr) => ({ slug: adr.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const adr = getContentBySlug("adr", slug)
  if (!adr) return {}
  return { title: adr.meta.title, description: adr.meta.description }
}

const mdxComponents = {
  h1: (props: any) => <h1 className="mt-8 mb-4 text-3xl font-semibold tracking-tight" {...props} />,
  h2: (props: any) => <h2 className="mt-8 mb-3 text-2xl font-semibold tracking-tight" {...props} />,
  h3: (props: any) => <h3 className="mt-6 mb-2 text-xl font-semibold tracking-tight" {...props} />,
  p: (props: any) => <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />,
  ul: (props: any) => <ul className="mb-4 list-disc pl-6 text-muted-foreground" {...props} />,
  ol: (props: any) => <ol className="mb-4 list-decimal pl-6 text-muted-foreground" {...props} />,
  li: (props: any) => <li className="mb-1 leading-relaxed" {...props} />,
  code: (props: any) => <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm" {...props} />,
  pre: (props: any) => <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-sm text-zinc-100 dark:bg-zinc-900" {...props} />,
  blockquote: (props: any) => <blockquote className="mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground" {...props} />,
  a: (props: any) => <a className="underline underline-offset-2 hover:text-foreground" target="_blank" rel="noopener noreferrer" {...props} />,
}

export default async function ADRPostPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)

  const adr = getContentBySlug("adr", slug)
  if (!adr) notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
      <Link href="/adr" className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> Back to ADRs
      </Link>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{adr.meta.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <time className="text-sm text-muted-foreground">{adr.meta.date}</time>
          {adr.meta.tags && adr.meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {adr.meta.tags.map((tag: string) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          )}
        </div>
      </header>
      <MDXRemote source={adr.content} components={mdxComponents} />
    </article>
  )
}