import { FloatHeader } from "@/components/float-header"
import { Database, ExternalLink, GitBranch, Clock } from "lucide-react"
import Link from "next/link"
import { getProjects, getProjectsPageContent } from "@/lib/content"

export default function ProjectsPage() {
  const projects = getProjects()
  const pageContent = getProjectsPageContent()

  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Database className="mr-2 h-5 w-5" /> {pageContent.title}
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">{pageContent.systemInfo.node}</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● {pageContent.systemInfo.status}</span>
            </p>
            <p className="text-pink-300">
              Projects: <span className="text-green-400">{projects.length} registered</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              {pageContent.systemInfo.welcome.split("COLLABORATIVE POTENTIAL DETECTED")[0]}
              <span className="text-white">COLLABORATIVE POTENTIAL DETECTED</span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm">{pageContent.description}</p>
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
          <h3 className="text-pink-400 mb-4 border-b border-pink-500/30 pb-2">{pageContent.newProjectSection.title}</h3>

          <div className="space-y-4 text-sm">
            <p>{pageContent.newProjectSection.content}</p>

            <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
              <p className="text-pink-300 italic">{pageContent.newProjectSection.quote}</p>
            </div>

            <div className="mt-4">
              <Link
                href="/projects/new"
                className="bg-pink-500 hover:bg-pink-600 text-black px-4 py-2 rounded-md inline-block"
              >
                {pageContent.newProjectSection.buttonText}
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
