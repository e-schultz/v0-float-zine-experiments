import { FloatHeader } from "@/components/float-header"
import { Cpu, Zap } from "lucide-react"
import { getIdentityFragments, getHauntologyContent } from "@/lib/content"

export default function IdentityPage() {
  const identityFragments = getIdentityFragments()
  const hauntologyContent = getHauntologyContent()

  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Cpu className="mr-2 h-5 w-5" /> Identity Fragments
          </h2>

          <div className="space-y-6">
            {identityFragments.map((fragment) => (
              <div key={fragment.id} className="border border-pink-500/30 p-4 rounded-md">
                <h3 className="text-pink-400 mb-2">{fragment.title}</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {fragment.tags.map((tag) => (
                    <span key={tag} className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {fragment.quote && (
                  <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5 mb-4">
                    <p className="text-pink-300 italic">{fragment.quote}</p>
                  </div>
                )}
                {fragment.description && <p className="mb-3 text-sm">{fragment.description}</p>}
                {fragment.details.length > 0 && (
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    {fragment.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Zap className="mr-2 h-5 w-5" /> {hauntologyContent.title}
          </h2>

          <ul className="space-y-3 pl-5 list-disc">
            {hauntologyContent.items.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.content}
              </li>
            ))}
          </ul>

          {hauntologyContent.quote && (
            <div className="mt-6 border-t border-pink-500/30 pt-4">
              <div className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
                <p className="text-pink-300 italic">{hauntologyContent.quote}</p>
              </div>
            </div>
          )}
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
