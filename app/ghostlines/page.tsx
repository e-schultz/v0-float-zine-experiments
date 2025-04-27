"use client"

import { useState } from "react"
import { FloatHeader } from "@/components/float-header"
import { GhostTrace } from "@/components/ghost-trace"
import { Zap, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { GhostTrace as GhostTraceType } from "@/lib/content"

interface GhostlinesPageProps {
  ghostTraces: GhostTraceType[]
  pageContent: any
}

export default function GhostlinesPage({ ghostTraces, pageContent }: GhostlinesPageProps) {
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
            <Zap className="mr-2 h-5 w-5" /> {pageContent.title}
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">{pageContent.systemInfo.node}</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● {pageContent.systemInfo.status}</span>
            </p>
            <p className="text-pink-300">
              Archive Integrity: <span className="text-green-400">{pageContent.systemInfo.archiveIntegrity}</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              {pageContent.systemInfo.welcome.split("SPECTRAL RESONANCE DETECTED")[0]}
              <span className="text-white">SPECTRAL RESONANCE DETECTED</span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm">{pageContent.description}</p>
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

// Since this is a client component but needs server data, we need to provide the data
export async function getServerSideProps() {
  const { getGhostTraces, getGhostlinesPageContent } = await import("@/lib/content")

  return {
    props: {
      ghostTraces: getGhostTraces(),
      pageContent: getGhostlinesPageContent(),
    },
  }
}
