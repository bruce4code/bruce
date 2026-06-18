import { ArrowUpRight, Code2, Globe, Mail } from "lucide-react"
import { CodeTyper } from "@/components/code-typer"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"

const socials = [
  { label: "GitHub", href: "https://github.com/linruitao", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/linruitao", icon: Globe },
  { label: "Email", href: "mailto:linruitao@gmail.com", icon: Mail },
]

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("home")

  return (
    <section className="mx-auto grid max-w-5xl flex-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-10 md:px-8 lg:gap-16">
      {/* Left: Introduction */}
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1 font-mono text-xs text-accent-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          {t("badge")}
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {t("greeting")} <span className="text-primary">{t("name")}</span>
        </h1>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          {t("intro1")}
        </p>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          {t("intro2")}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("viewResume")}
            <ArrowUpRight className="size-4" />
          </Link>
          <a
            href="mailto:linruitao@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
          >
            {t("contact")}
          </a>
        </div>

        <ul className="flex items-center gap-1 pt-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
              >
                <Icon className="size-[18px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Code typing effect */}
      <div className="md:pl-4">
        <CodeTyper />
      </div>
    </section>
  )
}