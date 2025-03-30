import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "AI Agent Developer",
    company: "InnovareAI",
    location: "San Francisco, USA",
    period: "2025",
    responsibilities: [
      "Developed and implemented AI voice agents using industry-standard platforms",
      "Integrated multiple APIs to create seamless automated workflows",
      "Managed CRM systems and databases to improve customer relationship tracking",
      "Implemented automation solutions using tools like Zapier, Make.com, and n8n",
    ],
  },
  {
    title: "Automation and AI Voice Agent Developer",
    company: "Simpliscale.io",
    location: "USA",
    period: "2025",
    responsibilities: [
      "Led the development of AI voice agents for customer service automation",
      "Created and maintained automated business processes using multiple integration platforms",
      "Managed CRM systems and Airtable databases for improved data organization",
      "Developed chatbots using Voiceflow to enhance customer engagement",
    ],
  },
  {
    title: "Automation Developer",
    company: "Silverline Solar",
    location: "California, USA",
    period: "2024-2025",
    responsibilities: [
      "Designed and implemented automation workflows for business process optimization",
      "Developed AI agents and chatbots for customer service enhancement",
      "Created and maintained landing pages using WordPress and Elementor",
      "Managed email automation systems and CRM databases",
    ],
  },
  {
    title: "AI Specialist",
    company: "JRR Marketing PTE LTD",
    location: "Singapore",
    period: "2024",
    responsibilities: [
      "Developed AI agents for business process automation",
      "Implemented API integrations for various business systems",
      "Optimized SEO strategies for improved online visibility",
      "Conducted prompt engineering for AI system enhancement",
    ],
  },
  {
    title: "Software Quality Assurance Analyst (QA) Intern",
    company: "PGX Group Inc.",
    location: "San Juan City, Metro Manila, Philippines",
    period: "2024",
    responsibilities: [
      "Performed comprehensive API testing using Postman and Insomnia",
      "Conducted thorough mobile and web application testing",
      "Created detailed bug documentation and reports",
    ],
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-primary">
          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
          <div className="mb-2">
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <p className="text-lg font-medium">{exp.company}</p>
          </div>
          <div className="flex items-center gap-2 mb-2 text-muted-foreground">
            <MapPin size={16} />
            <span>{exp.location}</span>
          </div>
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <Calendar size={16} />
            <span>{exp.period}</span>
          </div>
          <ul className="space-y-2">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 text-primary">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

