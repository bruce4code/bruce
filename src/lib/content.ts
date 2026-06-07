import fs from "fs"
import path from "path"

export interface ContentMeta {
  slug: string
  title: string
  date: string
  description?: string
  tags: string[]
}

function parseFile(fileContents: string): { meta: Record<string, unknown>; content: string } {
  const meta: Record<string, unknown> = {}
  let content = fileContents

  if (fileContents.startsWith("---")) {
    const endIndex = fileContents.indexOf("---", 3)
    if (endIndex !== -1) {
      const frontmatterStr = fileContents.slice(3, endIndex).trim()
      content = fileContents.slice(endIndex + 3).trim()

      for (const line of frontmatterStr.split("\n")) {
        const colonIndex = line.indexOf(":")
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim()
          let value: unknown = line.slice(colonIndex + 1).trim()

          if (typeof value === "string" && value.startsWith("[") && value.endsWith("]")) {
            value = value
              .slice(1, -1)
              .split(",")
              .map((s) => s.trim().replace(/['"]/g, ""))
          } else if (typeof value === "string" && value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1)
          }

          meta[key] = value
        }
      }
    }
  }

  return { meta, content }
}

export function getAllContent(directory: string): ContentMeta[] {
  const dir = path.join(process.cwd(), "content", directory)
  if (!fs.existsSync(dir)) return []

  const fileNames = fs.readdirSync(dir)

  return fileNames
    .filter((fn) => fn.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(dir, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf-8")
      const { meta } = parseFile(fileContents)
      return { slug, ...meta } as unknown as ContentMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getContentBySlug(directory: string, slug: string): {
  meta: ContentMeta
  content: string
} | null {
  const dir = path.join(process.cwd(), "content", directory)
  const fullPath = path.join(dir, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, "utf-8")
  const { meta, content } = parseFile(fileContents)

  return { meta: { slug, ...meta } as ContentMeta, content }
}
