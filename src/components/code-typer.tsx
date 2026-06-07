"use client"

import { useEffect, useState } from "react"

const codeLines = [
  "console.log('Hello, I am Ruitao 👋')",
  "const skills = ['Frontend', 'Backend', 'DevOps']",
  "const exp = 10 + 3 // years",
  "class Engineer extends FullStack {",
  "  async solveProblem() {",
  "    return findOptimalSolution()",
  "  }",
  "}",
  "export default createServer(api)",
]

export function CodeTyper() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(0)
        setCurrentChar(0)
        setVisibleLines(0)
        setIsDeleting(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    const line = codeLines[currentLine]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentChar < line.length) {
            setCurrentChar((c) => c + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 600)
          }
        } else {
          if (currentChar > 0) {
            setCurrentChar((c) => c - 1)
          } else {
            setIsDeleting(false)
            setCurrentLine((l) => l + 1)
            setVisibleLines((v) => v + 1)
          }
        }
      },
      isDeleting ? 20 : 40
    )

    return () => clearTimeout(timeout)
  }, [currentLine, currentChar, isDeleting])

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-zinc-950 p-4 shadow-sm dark:bg-black sm:p-5">
      {/* Window chrome */}
      <div className="mb-3 flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-red-500" />
        <span className="size-2.5 rounded-full bg-yellow-500" />
        <span className="size-2.5 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-[10px] text-zinc-500">portfolio.ts</span>
      </div>

      <pre className="font-mono text-xs leading-relaxed sm:text-sm">
        <code>
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="text-zinc-300">
              <span className="select-none text-zinc-600">{`${i + 1}`.padStart(2, " ")}</span>
              <span className="ml-3">{line}</span>
            </div>
          ))}
          {currentLine < codeLines.length && (
            <div>
              <span className="select-none text-zinc-600">
                {`${visibleLines + 1}`.padStart(2, " ")}
              </span>
              <span className="ml-3 text-zinc-300">
                {codeLines[currentLine].slice(0, currentChar)}
              </span>
              <span className="animate-pulse text-emerald-400">▊</span>
            </div>
          )}
        </code>
      </pre>
    </div>
  )
}
