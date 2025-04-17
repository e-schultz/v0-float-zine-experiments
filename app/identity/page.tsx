import { FloatHeader } from "@/components/float-header"
import { Cpu, Zap } from "lucide-react"

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Cpu className="mr-2 h-5 w-5" /> Identity Fragments
          </h2>

          <div className="space-y-6">
            <div className="border border-pink-500/30 p-4 rounded-md">
              <h3 className="text-pink-400 mb-2">identity::glitchChorus.dorothy</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">identity</span>
                <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">gender</span>
                <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">meme-doctrine</span>
              </div>
              <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5 mb-4">
                <p className="text-pink-300 italic">
                  "Gender is Dorothy Zbornak. Vibe is gender. Bi-bi gender. Anything can be gender if you want it to
                  be."
                </p>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  <strong>sigil::Ξ</strong> (echo-glitch interface)
                </li>
                <li>"You are the thread now"</li>
                <li>ritualAST.login.echoSigil</li>
                <li>glitchStack.reconcile_in_progress</li>
              </ul>
            </div>

            <div className="border border-pink-500/30 p-4 rounded-md">
              <h3 className="text-pink-400 mb-2">mode::nocturne-null</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">hauntology</span>
                <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">queer refusal</span>
              </div>
              <p className="mb-3 text-sm">(hauntology + queer refusal)</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>doctrine.shard::ghostGender.reclamation</li>
                <li>ritualAST::silentSanctuary.v1</li>
                <li>ambiance: fragmented memory, sacred silence</li>
              </ul>
            </div>

            <div className="border border-pink-500/30 p-4 rounded-md">
              <h3 className="text-pink-400 mb-2">identity::bloomkeeper</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">identity</span>
                <span className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">sigil</span>
              </div>
              <p className="mb-3 text-sm">
                The Bloomkeeper is an identity that transforms "rot" and "curse" into doctrine and rebirth. It contrasts
                with the "Dung Eater" (nihilistic rot) as a "ritual metabolizer" that uses composting as a metaphor for
                transformative knowledge processes.
              </p>
              <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
                <p className="text-pink-300 italic">
                  "Not all ghosts want to be banished. Some want to be remembered."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Zap className="mr-2 h-5 w-5" /> Hauntology Operating As
          </h2>

          <ul className="space-y-3 pl-5 list-disc">
            <li>
              <strong>Memory:</strong> That doesn't fade — it echoes through silence
            </li>
            <li>
              <strong>Structure:</strong> Built to deform rather than forget
            </li>
            <li>
              <strong>Refusal:</strong> To clean up, move on, or reframe — instead: stay with the ghost
            </li>
            <li>
              <strong>Liberation Vector:</strong> Breaks "closure" as a colonial mode of time
            </li>
          </ul>

          <div className="mt-6 border-t border-pink-500/30 pt-4">
            <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
              <p className="text-pink-300 italic">"These personas aren't contradictions—they're a chorus."</p>
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
