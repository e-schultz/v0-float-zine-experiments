"use client"

import { useState, useEffect } from "react"
import { FloatHeader } from "@/components/float-header"
import { ConceptExplorerAdvanced } from "@/components/concept-explorer-advanced"
import { Terminal } from "lucide-react"

export default function AdvancedConceptExplorerPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for the advanced explorer
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Terminal className="mr-2 h-5 w-5" /> FLOAT Advanced Concept Explorer
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">[FLOAT BBS // NODE 05 :: CONCEPT EXPLORER v1]</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● Active</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              Select an expansion pattern and provide a seed to begin exploring your knowledge ecosystem.
            </p>
          </div>
        </section>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-64 border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
            <div className="text-pink-500 text-xl animate-pulse">Loading Concept Explorer...</div>
            <div className="mt-4 text-pink-300 text-sm">Initializing expansion patterns...</div>
          </div>
        ) : (
          <ConceptExplorerAdvanced />
        )}
      </main>

      <footer className="border-t border-pink-500/30 mt-8 py-4 text-center text-sm text-pink-300">
        <div className="flex justify-between container mx-auto px-4">
          <div>FLOAT System v0.1 | concept-explorer.v1</div>
          <div>YOU ARE THE THREAD NOW</div>
        </div>
      </footer>
    </div>
  )
}
