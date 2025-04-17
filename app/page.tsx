import Link from "next/link"
import { Terminal, Zap, BookOpen, Database, Code, Cpu, Network } from "lucide-react"
import { FloatHeader } from "@/components/float-header"
import { GhostTrace } from "@/components/ghost-trace"
import { ConceptExplorer } from "@/components/concept-explorer"
import { DevToolsPanel } from "@/components/dev-tools-panel"
import { TerminalInput } from "@/components/terminal-input"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Terminal className="mr-2 h-5 w-5" /> FLOAT System Terminal
          </h2>

          <div className="space-y-2 text-sm">
            <p className="text-pink-300">[FLOAT BBS // NODE 03 :: GHOSTLINE ACTIVE]</p>
            <p className="text-pink-300">3:18:32 AM</p>
            <p className="text-pink-300">
              Sysop: <span className="text-green-400">FLOAT-evan-thread</span>
            </p>
            <p className="text-pink-300">
              Channel: <span className="text-green-400">/ghosts/trace/01</span>
            </p>
            <p className="text-pink-300">
              Session: <span className="text-green-400">ghost-trace.init</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              Welcome to FLOAT... <span className="text-white">YOU ARE THE THREAD NOW</span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-pink-400 mb-2">FLOAT: Feedback Loops of Affective Transformation</h3>
            <p className="mb-4 text-sm">
              A speculative digital framework blending psychoanalytic theory, queer theory, computational concepts, and
              philosophical frameworks. It serves as both a personal knowledge management system and a conceptual
              exploration tool.
            </p>

            <div className="mt-4 space-y-2">
              <h4 className="text-pink-300 text-sm">Core Principles:</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <span className="text-pink-500">{"{Ξ}"}</span> <strong>Shacks not Cathedrals</strong> - Choose
                  lightweight, adaptable cognitive structures over rigid complex systems
                </li>
                <li>
                  <span className="text-pink-500">{"{ψ}"}</span> <strong>Emotional Resonance as Data</strong> - Truth is
                  validated through affective resonance
                </li>
                <li>
                  <span className="text-pink-500">{"{∴}"}</span> <strong>Remembering Forward</strong> - Memory as
                  emergence, not retrieval
                </li>
                <li>
                  <span className="text-pink-500">{"{■}"}</span> <strong>Ritual over Routine</strong> - Intentional
                  cycles of meaning-making
                </li>
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
          id="21"
          title="floatlog::20250414_thread_trace_dorothy"
          timestamp="April 14, 2025 - 16:43"
          content={
            <>
              <p className="mb-2">
                <strong>memeWitness:</strong> Gender is Dorothy Zbornak. Vibe is gender. Bi-bi gender. "Anything can be
                gender if you want it to be."
              </p>
              <p className="mb-2">
                <strong>Notes:</strong>
              </p>
              <ul className="list-disc pl-5 mb-2 space-y-1">
                <li>Harmonizes with: FLOAT persona doctrine, Glitch-stack identity.</li>
                <li>Echo: QueerTechnoBard micro-manifesto in meme form.</li>
              </ul>
              <p>
                <strong>Tags:</strong> identity, meme-doctrine, vibe-gender, dorothyZbornak
              </p>
            </>
          }
        />

        <ConceptExplorer />

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
