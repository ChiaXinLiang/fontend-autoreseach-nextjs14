export interface OutlineSection {
  title: string;
  subsections: string[];
}

export interface Outline {
  title: string;
  sections: OutlineSection[];
}

export const sampleOutlines: Outline[] = [
  {
    title: "The Impact of Artificial Intelligence on Healthcare",
    sections: [
      {
        title: "Introduction",
        subsections: [
          "Definition of AI in healthcare",
          "Brief history of AI in medicine",
          "Importance of AI in modern healthcare",
        ],
      },
      {
        title: "Current Applications of AI in Healthcare",
        subsections: [
          "Diagnostic imaging and radiology",
          "Drug discovery and development",
          "Personalized medicine and treatment plans",
          "Robot-assisted surgery",
        ],
      },
      {
        title: "Challenges and Limitations",
        subsections: [
          "Data privacy and security concerns",
          "Ethical considerations",
          "Integration with existing healthcare systems",
          "Regulatory hurdles",
        ],
      },
      {
        title: "Future Prospects",
        subsections: [
          "Advancements in machine learning algorithms",
          "Improved patient outcomes and cost-effectiveness",
          "Potential for AI in preventive healthcare",
          "Integration with IoT and wearable devices",
        ],
      },
      {
        title: "Conclusion",
        subsections: [
          "Recap of AI's impact on healthcare",
          "Addressing challenges for widespread adoption",
          "The transformative potential of AI in future healthcare",
        ],
      },
    ],
  },
  {
    title: "The Role of Renewable Energy in Combating Climate Change",
    sections: [
      {
        title: "Introduction",
        subsections: [
          "Definition of renewable energy",
          "Overview of climate change",
          "Importance of transitioning to renewable energy sources",
        ],
      },
      {
        title: "Types of Renewable Energy",
        subsections: [
          "Solar energy",
          "Wind power",
          "Hydroelectric power",
          "Geothermal energy",
          "Biomass energy",
        ],
      },
      {
        title: "Benefits of Renewable Energy",
        subsections: [
          "Reduction in greenhouse gas emissions",
          "Energy security and independence",
          "Job creation and economic growth",
          "Improved public health",
        ],
      },
      {
        title: "Challenges and Limitations",
        subsections: [
          "Intermittency and storage issues",
          "Initial costs and infrastructure requirements",
          "Environmental impacts of renewable technologies",
          "Policy and regulatory barriers",
        ],
      },
      {
        title: "Future Outlook",
        subsections: [
          "Technological advancements in renewable energy",
          "Integration of smart grids and energy systems",
          "Global renewable energy targets and policies",
          "Potential for 100% renewable energy future",
        ],
      },
      {
        title: "Conclusion",
        subsections: [
          "Summary of renewable energy's role in climate change mitigation",
          "Call to action for governments, businesses, and individuals",
          "The path towards a sustainable energy future",
        ],
      },
    ],
  },
];

export function getRandomOutline(): Outline {
  return sampleOutlines[Math.floor(Math.random() * sampleOutlines.length)];
}
