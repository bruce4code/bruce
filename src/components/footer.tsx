import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-auto">
      <Separator />
      <div className="container mx-auto max-w-4xl px-4 py-6 text-center text-xs text-muted-foreground">
        <p>
          Built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
            Next.js 16
          </a>
          {" + "}
          <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
            shadcn/ui
          </a>
          {" + "}
          <a href="https://mdxjs.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
            MDX
          </a>
          , deployed on{" "}
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
            Vercel
          </a>
          .
        </p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Bruce. All rights reserved.</p>
      </div>
    </footer>
  )
}
