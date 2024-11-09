import { useState, useEffect } from 'react'

export interface Section {
  title: string
  content: string
  subsections: { title: string; content: string }[]
  citations: string[]
}

export interface Article {
  title: string
  sections: Section[]
  paperCitations: string[]
}

const useArticle = () => {
  const [article, setArticle] = useState<Article>({
    title: '',
    sections: [],
    paperCitations: []
  })

  useEffect(() => {
    // In a real application, you would fetch the actual article data here
    // For now, we're using mock data
    setArticle({
      title: 'Advances in AI',
      sections: [
        {
          title: 'Introduction',
          content: 'This is the introduction content...',
          subsections: [
            { title: 'Background', content: 'Background content...' },
            { title: 'Objectives', content: 'Objectives content...' }
          ],
          citations: ['Citation 1 for Introduction', 'Citation 2 for Introduction']
        },
        // ... other sections ...
      ],
      paperCitations: [
        'Smith, J. (2024). AI in Healthcare. Medical AI Journal, 5(3), 234-245.',
        'Johnson, M. et al. (2023). Machine Learning Applications. Tech Review, 12(1), 45-60.',
        'Brown, L. (2025). Future of AI. AI Quarterly, 8(4), 301-315.'
      ]
    })
  }, [])

  const updateSection = (sectionIndex: number, newContent: string) => {
    setArticle(prevArticle => {
      const newSections = [...prevArticle.sections]
      newSections[sectionIndex] = { ...newSections[sectionIndex], content: newContent }
      return { ...prevArticle, sections: newSections }
    })
  }

  const updateSubsection = (sectionIndex: number, subsectionIndex: number, newContent: string) => {
    setArticle(prevArticle => {
      const newSections = [...prevArticle.sections]
      const newSubsections = [...newSections[sectionIndex].subsections]
      newSubsections[subsectionIndex] = { ...newSubsections[subsectionIndex], content: newContent }
      newSections[sectionIndex] = { ...newSections[sectionIndex], subsections: newSubsections }
      return { ...prevArticle, sections: newSections }
    })
  }

  return { article, updateSection, updateSubsection }
}

export default useArticle