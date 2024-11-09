"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

export default function DownloadLatex() {
  const [article, setArticle] = useState({
    title: 'Advances in AI',
    sections: [
      {
        title: 'Introduction',
        content: 'This is the introduction content...',
        subsections: [
          { title: 'Background', content: 'Background content...' },
          { title: 'Objectives', content: 'Objectives content...' }
        ]
      },
      // ... other sections ...
    ],
    paperCitations: [
      'Smith, J. (2024). AI in Healthcare. Medical AI Journal, 5(3), 234-245.',
      'Johnson, M. et al. (2023). Machine Learning Applications. Tech Review, 12(1), 45-60.',
      'Brown, L. (2025). Future of AI. AI Quarterly, 8(4), 301-315.'
    ]
  })

  const [latexContent, setLatexContent] = useState('')

  useEffect(() => {
    // Generate LaTeX content when component mounts or article changes
    setLatexContent(generateLatexContent(article))
  }, [article])

  const handleDownloadLatex = () => {
    const blob = new Blob([latexContent], { type: 'application/x-latex' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'article.tex'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Download LaTeX</h1>

      <Card>
        <CardHeader>
          <CardTitle>Article Outline</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-semibold">{article.title}</h2>
          <ul className="list-disc pl-5 mt-2">
            {article.sections.map((section, index) => (
              <li key={index}>
                {section.title}
                <ul className="list-circle pl-5">
                  {section.subsections.map((subsection, subIndex) => (
                    <li key={subIndex}>{subsection.title}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>LaTeX Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={latexContent}
            readOnly
            className="w-full h-64 font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>References</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {article.paperCitations.map((citation, index) => (
              <li key={index}>{citation}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Link href="/article/review">
          <Button variant="outline">Back to Review</Button>
        </Link>
        <Button onClick={handleDownloadLatex}>Download LaTeX</Button>
      </div>
    </div>
  )
}

function generateLatexContent(article: any): string {
  let latexContent = `
\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{cite}

\\title{${article.title}}
\\author{Your Name}

\\begin{document}

\\maketitle

`

  article.sections.forEach((section: any) => {
    latexContent += `\\section{${section.title}}\n${section.content}\n\n`
    
    section.subsections.forEach((subsection: any) => {
      latexContent += `\\subsection{${subsection.title}}\n${subsection.content}\n\n`
    })
  })

  latexContent += `
\\begin{thebibliography}{99}
${article.paperCitations.map((citation: string, index: number) => `\\bibitem{ref${index + 1}} ${citation}`).join('\n')}
\\end{thebibliography}

\\end{document}
`

  return latexContent
}