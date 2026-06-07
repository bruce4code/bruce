import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, GraduationCap, Briefcase, Code, Wrench } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "about" })
  return {
    title: t("title"),
    description: `${t("title")} - ${t("subtitle")}`,
  }
}

const skillCategories = ["skillsFrontend", "skillsTooling", "skillsBackend", "skillsPerformance", "skillsTeam"] as const
const jobKeys = ["job1", "job2", "job3", "job4"] as const
const projectKeys = ["project1", "project2", "project3", "project4"] as const

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("about")

  const skills = skillCategories.map((cat) => ({
    category: t(cat),
    items: t.raw(`${cat}Items`) as string[],
  }))

  const experiences = jobKeys.map((key) => {
    const job = t.raw(key) as { period: string; company: string; role: string; highlights: string[] }
    return job
  })

  const projects = projectKeys.map((key) => {
    const proj = t.raw(key) as { name: string; period: string; tech: string; description: string }
    return proj
  })

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("title")}</h1>
        <p className="mt-1 text-lg text-muted-foreground">{t("subtitle")}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Phone className="size-3.5" /> +86 138-xxx-xxx</span>
          <span className="flex items-center gap-1.5"><Mail className="size-3.5" /> linruitao@gmail.com</span>
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> Shenzhen</span>
          <span className="flex items-center gap-1.5"><GraduationCap className="size-3.5" /> {t("educationDegree")}</span>
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Summary */}
      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">{t("summary")}</h2>
        <p className="leading-relaxed text-muted-foreground">{t("summaryText")}</p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Wrench className="size-5" /> {t("skills")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.category}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{group.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Briefcase className="size-5" /> {t("workExperience")}
        </h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.company}>
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-base">{exp.company}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.role}</p>
                  </div>
                  <Badge variant="outline" className="w-fit shrink-0">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Code className="size-5" /> {t("projectExperience")}
        </h2>
        <div className="space-y-4">
          {projects.map((proj) => (
            <Card key={proj.name}>
              <CardHeader>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-base">{proj.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{proj.tech}</p>
                  </div>
                  <Badge variant="outline" className="w-fit shrink-0">{proj.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{proj.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
          <GraduationCap className="size-5" /> {t("education")}
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{t("educationDegree")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{t("educationDiploma")}</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}