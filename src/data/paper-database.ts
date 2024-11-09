export interface Paper {
  id: string;
  title: string;
  authors: string;
  year: number;
  description: string;
}

export const paperDatabase: Paper[] = [
  {
    id: "paper1",
    title:
      "Machine Learning Applications in Healthcare: A Comprehensive Review",
    authors: "John Doe, Jane Smith",
    year: 2025,
    description:
      "This paper provides a comprehensive review of machine learning applications in healthcare, covering areas such as diagnosis, treatment planning, and patient monitoring.",
  },
  {
    id: "paper2",
    title:
      "Deep Learning for Medical Image Analysis: Current Trends and Future Directions",
    authors: "Alice Johnson, Bob Williams",
    year: 2025,
    description:
      "This study explores the current trends and future directions of deep learning applications in medical image analysis, focusing on areas such as radiology, pathology, and ophthalmology.",
  },
  {
    id: "paper3",
    title: "The Impact of Artificial Intelligence on Clinical Decision Making",
    authors: "Emily Brown, Michael Davis",
    year: 2024,
    description:
      "This research examines how artificial intelligence is influencing clinical decision-making processes and its potential implications for patient care and healthcare systems.",
  },
  {
    id: "paper4",
    title: "Ethical Considerations in AI-Driven Healthcare",
    authors: "Sarah Lee, David Wilson",
    year: 2023,
    description:
      "This paper discusses the ethical implications of using AI in healthcare, addressing issues such as privacy, bias, and the doctor-patient relationship.",
  },
  {
    id: "paper5",
    title: "Natural Language Processing in Electronic Health Records",
    authors: "Robert Taylor, Emma White",
    year: 2024,
    description:
      "This study explores the application of natural language processing techniques in analyzing and extracting information from electronic health records.",
  },
  {
    id: "paper6",
    title: "Predictive Analytics for Patient Risk Stratification",
    authors: "Thomas Brown, Olivia Green",
    year: 2023,
    description:
      "This research presents a novel approach to patient risk stratification using predictive analytics and machine learning algorithms.",
  },
  {
    id: "paper7",
    title: "Robotics in Minimally Invasive Surgery: A Systematic Review",
    authors: "Jennifer Adams, Christopher Lee",
    year: 2025,
    description:
      "This systematic review examines the current state and future prospects of robotics in minimally invasive surgical procedures.",
  },
];

export function findPaper(query: string): Paper | undefined {
  const lowercaseQuery = query.toLowerCase();
  return paperDatabase.find(
    (paper) =>
      paper.id.toLowerCase() === lowercaseQuery ||
      paper.title.toLowerCase().includes(lowercaseQuery)
  );
}
