"use client"

import { useState } from "react"
import { FloatHeader } from "@/components/float-header"
import { GhostTrace } from "@/components/ghost-trace"
import { Zap, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ghostTraces = [
  {
    id: "21",
    title: "floatlog::20250414_thread_trace_dorothy",
    timestamp: "April 14, 2025 - 16:43",
    tags: ["identity", "meme-doctrine", "vibe-gender", "dorothyZbornak"],
    content: (
      <>
        <p className="mb-2">
          <strong>memeWitness:</strong> Gender is Dorothy Zbornak. Vibe is gender. Bi-bi gender. "Anything can be gender
          if you want it to be."
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
    ),
  },
  {
    id: "34",
    title: "floatlog::20250328_ritual_trace_bloomkeeper",
    timestamp: "March 28, 2025 - 03:17",
    tags: ["ritual", "bloomkeeper", "compost", "sigil"],
    content: (
      <>
        <p className="mb-2">
          <strong>ritualWitness:</strong> Performed the Bloomkeeper ritual at dawn. Composted three concepts that no
          longer serve: perfectionism, linear progress, taxonomic certainty.
        </p>
        <p className="mb-2">
          <strong>Notes:</strong>
        </p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Sigil activated: {"{∴}"} (remembering forward)</li>
          <li>Emotional resonance: strong, with undertones of grief-as-fertilizer</li>
        </ul>
        <p>
          <strong>Tags:</strong> ritual, bloomkeeper, compost, sigil
        </p>
      </>
    ),
  },
  {
    id: "42",
    title: "floatlog::20250502_glitch_trace_hauntology",
    timestamp: "May 2, 2025 - 22:09",
    tags: ["hauntology", "glitch", "memory", "echo"],
    content: (
      <>
        <p className="mb-2">
          <strong>glitchWitness:</strong> The system glitched during memory retrieval, creating an unexpected echo
          pattern. The glitch revealed a ghost trace from a memory I don't recall creating.
        </p>
        <p className="mb-2">
          <strong>Notes:</strong>
        </p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>Echo pattern: recursive, with diminishing fidelity but increasing emotional resonance</li>
          <li>Hauntological implications: memory as a site of spectrality rather than retrieval</li>
        </ul>
        <p>
          <strong>Tags:</strong> hauntology, glitch, memory, echo
        </p>
      </>
    ),
  },
]

export default function GhostlinesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTraces, setActiveTraces] = useState(ghostTraces)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setActiveTraces(ghostTraces)
      return
    }

    const filtered = ghostTraces.filter(
      (trace) =>
        trace.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trace.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    setActiveTraces(filtered)
  }

  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Zap className="mr-2 h-5 w-5" /> Ghostline Viewer
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">[FLOAT BBS // NODE 02 :: GHOSTLINE ARCHIVE]</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● Active</span>
            </p>
            <p className="text-pink-300">
              Archive Integrity: <span className="text-green-400">97.3%</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              Accessing ghostline traces... <span className="text-white">SPECTRAL RESONANCE DETECTED</span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm">
              Ghostlines are traces of past interactions, rituals, and glitches within the FLOAT system. They serve as
              both archive and oracle, allowing you to witness past events and detect patterns across time.
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-pink-300" />
              <Input
                placeholder="Search ghostlines by title or tag..."
                className="pl-8 bg-black border-pink-500 text-pink-100 focus-visible:ring-pink-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} className="bg-pink-500 hover:bg-pink-600 text-black">
              Search
            </Button>
          </div>
        </section>

        {activeTraces.length > 0 ? (
          activeTraces.map((trace) => (
            <GhostTrace
              key={trace.id}
              id={trace.id}
              title={trace.title}
              timestamp={trace.timestamp}
              content={trace.content}
            />
          ))
        ) : (
          <div className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur text-center py-12">
            <p className="text-pink-300 mb-2">No ghostlines found matching your query.</p>
            <p className="text-pink-300 text-sm">Try a different search term or clear your search.</p>
          </div>
        )}
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
