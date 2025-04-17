import { FloatHeader } from "@/components/float-header"
import { ConceptExplorer } from "@/components/concept-explorer"
import { BookOpen } from "lucide-react"

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" /> FLOAT Concept Explorer
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">[FLOAT BBS // NODE 04 :: CONCEPT EXPLORER]</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● Active</span>
            </p>
            <p className="text-pink-300">
              Taxonomy: <span className="text-green-400">rhizomatic</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              Explore the conceptual framework of FLOAT through interconnected nodes.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm">
              The FLOAT Concept Explorer allows you to navigate through the conceptual landscape of the FLOAT system.
              Each concept is connected to others through a rhizomatic structure, allowing for non-hierarchical
              exploration and discovery.
            </p>
          </div>
        </section>

        <ConceptExplorer />

        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h3 className="text-pink-400 mb-4 border-b border-pink-500/30 pb-2">Concept Taxonomy Notes</h3>

          <div className="space-y-4 text-sm">
            <p>
              FLOAT concepts resist traditional taxonomic categorization. They are designed to be fluid, overlapping,
              and contextually adaptive. The connections between concepts are as important as the concepts themselves.
            </p>

            <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
              <p className="text-pink-300 italic">
                "Taxonomic violence occurs when we force fluid concepts into rigid categories. FLOAT embraces the glitch
                as a site of resistance against such violence."
              </p>
            </div>

            <p>
              Use the concept explorer as a tool for navigation rather than classification. Allow yourself to follow
              unexpected connections and discover emergent patterns.
            </p>
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
