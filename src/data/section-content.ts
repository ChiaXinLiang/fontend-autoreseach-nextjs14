interface SectionContent {
  content: string;
  paperIds: string[];
}

interface ContentMap {
  [key: string]: SectionContent;
}

export const sectionContent: ContentMap = {
  "Definition of AI in healthcare": {
    content: `Artificial Intelligence (AI) in healthcare refers to the use of complex algorithms and software to emulate human cognition in the analysis, presentation, and comprehension of complex medical and healthcare data. Specifically, AI is the ability of computer algorithms to approximate conclusions without direct human input.

The field of AI in healthcare has seen remarkable growth in recent years, driven by improvements in computing power, learning algorithms, and the availability of large amounts of healthcare data.`,
    paperIds: ["paper1", "paper3", "paper4"],
  },
  "Brief history of AI in medicine": {
    content: `The history of AI in medicine dates back to the 1960s when early systems like DENDRAL were developed to help identify unknown organic molecules. In the 1970s, MYCIN emerged as one of the first clinical decision support systems, capable of diagnosing blood infections and recommending antibiotics.

Over the decades, AI systems have evolved from simple rule-based approaches to sophisticated machine learning models that can analyze complex medical data and assist in clinical decision-making.`,
    paperIds: ["paper2", "paper5"],
  },
  "Importance of AI in modern healthcare": {
    content: `AI has become increasingly important in modern healthcare for several key reasons:
1. The ability to process vast amounts of medical data quickly and accurately
2. Support for clinical decision-making through evidence-based recommendations
3. Automation of routine tasks, allowing healthcare providers to focus more on patient care
4. Improved accuracy in diagnosis and treatment planning
5. Enhanced ability to identify patterns and trends in population health

These capabilities have made AI an indispensable tool in addressing current healthcare challenges, from improving patient outcomes to reducing healthcare costs.`,
    paperIds: ["paper1", "paper3", "paper6"],
  },
  "Diagnostic imaging and radiology": {
    content: `AI has revolutionized diagnostic imaging and radiology through advanced image recognition and processing capabilities. Deep learning algorithms can now:
- Detect abnormalities in medical images with high accuracy
- Assist radiologists in prioritizing critical cases
- Provide automated measurements and annotations
- Generate preliminary reports for radiologist review

These applications have significantly improved the efficiency and accuracy of diagnostic processes.`,
    paperIds: ["paper2", "paper7"],
  },
};

export function getContentForSection(
  section: string
): SectionContent | undefined {
  return sectionContent[section];
}
