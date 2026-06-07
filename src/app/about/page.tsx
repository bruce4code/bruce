import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, GraduationCap, Briefcase, Code, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description: "Ruitao Lin - Senior Frontend / Full Stack Engineer resume",
}

const skills = [
  { category: "前端开发", items: ["Vue 2/3", "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Angular.js", "UniApp"] },
  { category: "前端工程化", items: ["Vite", "Webpack", "GitLab CI/CD", "ESLint + Prettier + Husky", "CI/CD 自动化部署"] },
  { category: "后端 & API", items: ["Node.js", "Nest.js", "Spring Boot (基础)", "RESTful API", "Redis", "Kafka"] },
  { category: "性能 & 监控", items: ["K6 压测", "性能优化", "首屏加载优化", "瓶颈分析"] },
  { category: "团队 & 规范", items: ["Git 工作流", "前端编码规范", "CodeReview", "需求拆解", "外包资源管理"] },
]

const experiences = [
  {
    period: "Dec 2022 - May 2025",
    company: "大河手（深圳）信息技术有限公司",
    role: "Software Engineer",
    highlights: [
      "基于 Vue3 + TypeScript + Vite + Pinia 主导 FRP 仓库管理系统和移动端 H5 项目的技术架构设计与开发",
      "搭建前端工程化体系，配置 GitLab CI + Jenkins 自动化部署，建立 ESLint + Prettier + Husky 规范",
      "管理外包资源与需求分解，协同产品、后端、QA 团队保障项目交付进度和质量",
    ],
  },
  {
    period: "Jun 2021 - Oct 2022",
    company: "Huobi Global（深圳）",
    role: "Senior Frontend Engineer",
    highlights: [
      "主导基于 Angular.js 旧版后台管理系统全面重构为 Vue3，参与 CodeReview，完善前端技术文档与组件规范",
      "负责现货网格策略 H5 项目的需求协调与远程开发，保障顺利交付",
      "参与火币合约 MGT 后台系统各业务模块开发维护",
    ],
  },
  {
    period: "Apr 2019 - Jun 2021",
    company: "深圳科脉技术股份有限公司",
    role: "Frontend Engineer",
    highlights: [
      "带领 5 人前端团队从零开发「有数商城」小程序（UniApp），负责技术选型与核心商城模块框架搭建",
      "疫情期间远程独立完成社区小程序的重构与紧急发布，获季度「技术之星」奖",
      "独立搭建并交付科脉微管家（私域）CRM 项目",
    ],
  },
  {
    period: "Jan 2015 - Mar 2019",
    company: "远光软件股份有限公司",
    role: "Frontend Developer",
    highlights: [
      "使用 Vue2 开发微信公众号 H5 项目及后台管理系统，独立完成多个模块设计交付",
      "参与 OCR 智能识别系统等 AI 项目，从图片中提取结构化数据",
    ],
  },
]

const projects = [
  {
    name: "SonarDApp",
    period: "Aug 2025 - May 2026",
    tech: "Vue3, TypeScript, Ethers.js, MetaMask",
    description: "基于 Web3 的 DApp 前端设计开发，支持钱包连接、智能合约交互、资产查询与实时 K 线展示。集成 Ethers.js 实现 MetaMask 钱包连接、签名授权与合约读写交互。",
  },
  {
    name: "FRP 仓库管理系统",
    period: "Dec 2022 - Present",
    tech: "Vue3, Vite, TypeScript, Pinia, Axios",
    description: "负责整体前端架构设计与工程搭建，优化打包体积使首屏加载速度提升 20%，参与 CI/CD 自动化流水线搭建。",
  },
  {
    name: "Huobi GMT 后台管理系统",
    period: "Jun 2021 - Oct 2022",
    tech: "Vue3, Vite, Pinia, Axios",
    description: "开发资产审批、风控工具、财务管理等核心模块，通过懒加载和按需加载策略优化前端性能。",
  },
  {
    name: "科脉有数商城小程序",
    period: "Jul 2019 - Jun 2021",
    tech: "UniApp, Vue.js, JavaScript, Vant UI",
    description: "负责技术选型与前端架构设计，推动 H5 平台向 UniApp 小程序迁移，解决性能瓶颈使页面加载速度提升约 20%。",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ruitao Lin</h1>
        <p className="mt-1 text-lg text-muted-foreground">Senior Frontend / Full Stack Engineer</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Phone className="size-3.5" /> 13824125301</span>
          <span className="flex items-center gap-1.5"><Mail className="size-3.5" /> 470772345@qq.com</span>
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> Shenzhen</span>
          <span className="flex items-center gap-1.5"><GraduationCap className="size-3.5" /> 华南理工大学（计算机）</span>
        </div>
      </div>

      <Separator className="mb-8" />

      {/* Summary */}
      <section className="mb-10">
        <h2 className="mb-3 text-xl font-semibold">Summary</h2>
        <p className="leading-relaxed text-muted-foreground">
          9 年+ 前端开发经验，全流程参与微信公众号 H5、Web 后台管理系统以及小程序项目。
          带领过 5 人前端团队，能独立搭建项目架构和建立前端开发规范。
          熟练 Vue 2/3 全家桶，有 React.js 和 Angular.js 项目经验。
          具备 Node.js (Nest.js) 后端开发能力，有 Java/Spring Boot 基础。
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Wrench className="size-5" /> Skills
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
          <Briefcase className="size-5" /> Work Experience
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
          <Code className="size-5" /> Project Experience
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
          <GraduationCap className="size-5" /> Education
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">华南理工大学 - 计算机科学与技术（本科）</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">广东科学技术职业学院 - 软件技术（大专）</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
