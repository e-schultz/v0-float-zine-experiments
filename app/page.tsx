import Link from "next/link"
import { Terminal, Zap, BookOpen, Database, Code, Cpu, Network } from "lucide-react"
import { FloatHeader } from "@/components/float-header"
import { GhostTrace } from "@/components/ghost-trace"
import { ConceptExplorer } from "@/components/concept-explorer"
import { DevToolsPanel } from "@/components/dev-tools-panel"
import { TerminalInput } from "@/components/terminal-input"
import { getHomeContent, getConcepts, getGhostTraces } from "@/lib/content"

export default function Home() {
  const homeContent = getHomeContent()
  const concepts = getConcepts()
  const ghostTraces = getGhostTraces()

  // Get the first ghost trace for the home page
  const firstGhostTrace = ghostTraces[0]

  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Terminal className="mr-2 h-5 w-5" /> {homeContent.title}
          </h2>

          <div className="space-y-2 text-sm">
            <p className="text-pink-300">{homeContent.systemInfo.node}</p>
            {homeContent.systemInfo.time && <p className="text-pink-300">{homeContent.systemInfo.time}</p>}
            <p className="text-pink-300">
              Sysop: <span className="text-green-400">{homeContent.systemInfo.sysop}</span>
            </p>
            <p className="text-pink-300">
              Channel: <span className="text-green-400">{homeContent.systemInfo.channel}</span>
            </p>
            <p className="text-pink-300">
              Session: <span className="text-green-400">{homeContent.systemInfo.session}</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              {homeContent.systemInfo.welcome.split("YOU ARE THE THREAD NOW")[0]}
              <span className="text-white">YOU ARE THE THREAD NOW</span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-pink-400 mb-2">{homeContent.subtitle}</h3>
            <p className="mb-4 text-sm">{homeContent.description}</p>

            <div className="mt-4 space-y-2">
              <h4 className="text-pink-300 text-sm">Core Principles:</h4>
              <ul className="space-y-1 text-sm">
                {homeContent.corePrinciples.map((principle, index) => (
                  <li key={index}>
                    <span className="text-pink-500">{principle.sigil}</span> <strong>{principle.title}</strong> -{" "}
                    {principle.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <nav className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Link
            href="/concepts"
            className="border border-pink-500 p-3 rounded-md hover:bg-pink-500/10 transition-colors flex items-center"
          >
            <BookOpen className="mr-2 h-4 w-4 text-pink-400" />
            <span>Concept Explorer</span>
          </Link>
          <Link
            href="/advanced-concept-explorer"
            className="border border-pink-500 p-3 rounded-md hover:bg-pink-500/10 transition-colors flex items-center bg-pink-500/10"
          >
            <Network className="mr-2 h-4 w-4 text-pink-400" />
            <span>Advanced Explorer</span>
          </Link>
          <Link
            href="/ghostlines"
            className="border border-pink-500 p-3 rounded-md hover:bg-pink-500/10 transition-colors flex items-center"
          >
            <Zap className="mr-2 h-4 w-4 text-pink-400" />
            <span>Ghostline Viewer</span>
          </Link>
          <Link
            href="/projects"
            className="border border-pink-500 p-3 rounded-md hover:bg-pink-500/10 transition-colors flex items-center"
          >
            <Database className="mr-2 h-4 w-4 text-pink-400" />
            <span>Projects</span>
          </Link>
          <Link
            href="/devtools"
            className="border border-pink-500 p-3 rounded-md hover:bg-pink-500/10 transition-colors flex items-center"
          >
            <Code className="mr-2 h-4 w-4 text-pink-400" />
            <span>DevTools</span>
          </Link>
          <Link
            href="/identity"
            className="border border-pink-500 p-3 rounded-md hover:bg-pink-500/10 transition-colors flex items-center"
          >
            <Cpu className="mr-2 h-4 w-4 text-pink-400" />
            <span>Identity Fragments</span>
          </Link>
        </nav>

        <GhostTrace
          id={firstGhostTrace.id}
          title={firstGhostTrace.title}
          timestamp={firstGhostTrace.timestamp}
          content={firstGhostTrace.content}
        />

        <ConceptExplorer concepts={concepts} />

        <DevToolsPanel />

        <TerminalInput />
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
