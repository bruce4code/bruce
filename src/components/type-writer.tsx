"use client"

import { useEffect, useState } from "react"

const codeLines = [
  "console.log('Hello, I\\'m Bruce 👋')",
  "const skills = ['Frontend', 'Backend', 'DevOps']",
  "const exp = 10 + 3 // years",
  "class Engineer extends FullStack {",
  "  async solveProblem() {",
  "    return findOptimalSolution()",
  "  }",
  "}",
  "export default createServer(api)",
]

export function TypeWriter() {
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
    <div className="font-mono text-sm leading-relaxed">
      <pre className="text-muted-foreground">
        <code>
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="text-foreground/80">
              <span className="text-muted-foreground select-none mr-3">{`${i + 1}`.padStart(2)}</span>
              {line}
            </div>
          ))}
          {currentLine < codeLines.length && (
            <div>
              <span className="text-muted-foreground select-none mr-3">
                {`${visibleLines + 1}`.padStart(2)}
              </span>
              {codeLines[currentLine].slice(0, currentChar)}
              <span className="animate-pulse text-primary">▊</span>
            </div>
          )}
        </code>
      </pre>
    </div>
  )
}
