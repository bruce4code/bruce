import { ArrowUpRight, Code2, Globe, Mail } from "lucide-react"
import { CodeTyper } from "@/components/code-typer"

const socials = [
  { label: "GitHub", href: "https://github.com/linruitao", icon: Code2 },
  { label: "Blog", href: "https://example.com", icon: Globe },
  { label: "Email", href: "mailto:470772345@qq.com", icon: Mail },
]

export default function Page() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-5xl flex-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-10 md:px-8 lg:gap-16">
      {/* 左侧：自我介绍 */}
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-accent/40 px-3 py-1 font-mono text-xs text-accent-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          开放机会 · 期望薪资 24k–27k
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          你好，我是<span className="text-primary">林屿</span>
        </h1>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          9 年+ 前端开发经验，全流程参与微信公众号 H5、
          Web 后台管理系统以及小程序项目。
          带领过 5 人前端团队，能独立搭建项目架构和建立前端开发规范。
        </p>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          熟练 Vue 2/3 全家桶，有 React.js 和 Angular.js 项目经验；
          具备 Node.js 后端开发能力，熟悉 Nest.js 框架与 RESTful API 设计；
          有 Java 基础，能用 Spring Boot 开发简单后端模块。
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/about"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            查看简历
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href="mailto:470772345@qq.com"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
          >
            联系我
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

      {/* 右侧：代码打字效果 */}
      <div className="md:pl-4">
        <CodeTyper />
      </div>
    </section>
  )
}
