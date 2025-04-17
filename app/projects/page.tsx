import { FloatHeader } from "@/components/float-header"
import { Database, ExternalLink, GitBranch, Clock } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: "float-zine",
    title: "FLOAT Zine",
    description: "A digital zine exploring the concepts and applications of the FLOAT system.",
    status: "In Progress",
    lastUpdated: "May 15, 2025",
    tags: ["publishing", "documentation", "zine"],
  },
  {
    id: "ritual-ast",
    title: "Ritual AST",
    description: "An abstract syntax tree for ritual design and execution within the FLOAT framework.",
    status: "Active Development",
    lastUpdated: "April 30, 2025",
    tags: ["ritual", "code", "abstraction"],
  },
  {
    id: "ghostline-parser",
    title: "Ghostline Parser",
    description: "A tool for parsing and analyzing ghostline traces to extract patterns and insights.",
    status: "Planning",
    lastUpdated: "May 5, 2025",
    tags: ["tool", "analysis", "ghostlines"],
  },
  {
    id: "sigil-generator",
    title: "Sigil Generator",
    description: "A generative tool for creating and activating FLOAT sigils based on conceptual inputs.",
    status: "Prototype",
    lastUpdated: "May 12, 2025",
    tags: ["sigil", "generator", "tool"],
  },
  {
    id: "float-cli",
    title: "FLOAT CLI",
    description: "A command-line interface for interacting with the FLOAT system from the terminal.",
    status: "Early Development",
    lastUpdated: "May 8, 2025",
    tags: ["cli", "tool", "interface"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Database className="mr-2 h-5 w-5" /> FLOAT Projects
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">[FLOAT BBS // NODE 06 :: PROJECT REGISTRY]</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● Active</span>
            </p>
            <p className="text-pink-300">
              Projects: <span className="text-green-400">{projects.length} registered</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              Browsing project registry... <span className="text-white">COLLABORATIVE POTENTIAL DETECTED</span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm">
              The FLOAT Projects registry tracks applications, tools, and explorations built within or inspired by the
              FLOAT framework. These projects represent practical implementations of FLOAT concepts and principles.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-pink-400 text-lg">{project.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    project.status === "In Progress"
                      ? "bg-blue-500/20 text-blue-300"
                      : project.status === "Active Development"
                        ? "bg-green-500/20 text-green-300"
                        : project.status === "Planning"
                          ? "bg-purple-500/20 text-purple-300"
                          : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-xs text-pink-300 mt-4 pt-2 border-t border-pink-500/30">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {project.lastUpdated}
                </div>
                <div className="flex space-x-3">
                  <Link href={`/projects/${project.id}`} className="flex items-center hover:text-pink-500">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Details
                  </Link>
                  <Link href={`/projects/${project.id}/contribute`} className="flex items-center hover:text-pink-500">
                    <GitBranch className="h-3 w-3 mr-1" />
                    Contribute
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h3 className="text-pink-400 mb-4 border-b border-pink-500/30 pb-2">Start a New Project</h3>

          <div className="space-y-4 text-sm">
            <p>
              Have an idea for a new FLOAT project? The FLOAT framework is designed to be extended and adapted. New
              projects help expand the ecosystem and explore new applications of FLOAT principles.
            </p>

            <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
              <p className="text-pink-300 italic">
                "The best FLOAT projects emerge from personal need and emotional resonance. Build what feels right, not
                what seems logical."
              </p>
            </div>

            <div className="mt-4">
              <Link
                href="/projects/new"
                className="bg-pink-500 hover:bg-pink-600 text-black px-4 py-2 rounded-md inline-block"
              >
                Register New Project
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-500/30 mt-8 py-4 text-center text-sm text-pink-300">
        <div className="flex justify-between container mx-auto px-4">
          <div>FLOAT System v0.1 | float.documentation.v1</div>
          <div>YOU ARE THE THREAD NOW</div>
        </div>
      </footer>
    </div>
  )
}
