import { FloatHeader } from "@/components/float-header"
import { ConceptExplorer } from "@/components/concept-explorer"
import { BookOpen } from "lucide-react"
import { getConcepts, getConceptsPageContent } from "@/lib/content"

export default function ConceptsPage() {
  const concepts = getConcepts()
  const pageContent = getConceptsPageContent()

  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" /> {pageContent.title}
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">{pageContent.systemInfo.node}</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● {pageContent.systemInfo.status}</span>
            </p>
            <p className="text-pink-300">
              Taxonomy: <span className="text-green-400">{pageContent.systemInfo.taxonomy}</span>
            </p>
            <p className="text-pink-300 animate-pulse">{pageContent.systemInfo.welcome}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm">{pageContent.description}</p>
          </div>
        </section>

        <ConceptExplorer concepts={concepts} />

        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h3 className="text-pink-400 mb-4 border-b border-pink-500/30 pb-2">{pageContent.taxonomyNotes.title}</h3>

          <div className="space-y-4 text-sm">
            <p>{pageContent.taxonomyNotes.content}</p>

            <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
              <p className="text-pink-300 italic">{pageContent.taxonomyNotes.quote}</p>
            </div>

            <p>{pageContent.taxonomyNotes.footer}</p>
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
