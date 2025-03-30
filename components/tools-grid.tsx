import { Zap, Workflow, Cpu, Mic, Bot, Database, Globe, CheckSquare } from "lucide-react"

const tools = [
  { name: "Zapier", icon: <Zap className="h-8 w-8" /> },
  { name: "Make.com", icon: <Workflow className="h-8 w-8" /> },
  { name: "n8n", icon: <Workflow className="h-8 w-8" /> },
  { name: "Retell AI", icon: <Mic className="h-8 w-8" /> },
  { name: "VAPI", icon: <Mic className="h-8 w-8" /> },
  { name: "Voiceflow", icon: <Bot className="h-8 w-8" /> },
  { name: "Relevance AI", icon: <Cpu className="h-8 w-8" /> },
  { name: "Airtable", icon: <Database className="h-8 w-8" /> },
  { name: "GoHighLevel", icon: <Database className="h-8 w-8" /> },
  { name: "Power Automate", icon: <Workflow className="h-8 w-8" /> },
  { name: "Wordpress", icon: <Globe className="h-8 w-8" /> },
  { name: "ClickUp", icon: <CheckSquare className="h-8 w-8" /> },
]

export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg hover:border-cyan-400 transition-colors text-center"
        >
          <div className="mb-3 text-cyan-400">{tool.icon}</div>
          <p className="font-medium">{tool.name}</p>
        </div>
      ))}
    </div>
  )
}

