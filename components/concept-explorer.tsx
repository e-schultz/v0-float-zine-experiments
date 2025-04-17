"use client"

import { useState } from "react"
import { Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const concepts = [
  {
    id: "bloomkeeper",
    name: "identity::bloomkeeper",
    tags: ["identity", "sigil"],
    description:
      'The Bloomkeeper is an identity that transforms "rot" and "curse" into doctrine and rebirth. It contrasts with the "Dung Eater" (nihilistic rot) as a "ritual metabolizer" that uses composting as a metaphor for transformative knowledge processes.',
    related: ["reversed_sigil_dung_eater", "Compost Oracle", "ritualAST::bloom_from_rot"],
  },
  {
    id: "remembering",
    name: "remembering forward",
    tags: ["concept", "memory"],
    description:
      'FLOAT reframes memory not as retrieval but as emergence - "remembering forward" where recursion functions as a form of prophecy. Semantic ghost surfacing.',
    related: [
      "not_retrieval: emergence",
      "recursion_as_prophecy",
      "ritual::float_seed::reverse_causality",
      "semantic_ghost_surfacing: glitchStack::latent-signal-trace",
    ],
  },
  {
    id: "emotional",
    name: "emotional resonance",
    tags: ["epistemology", "affect"],
    description: "Truth is validated through emotional resonance rather than purely rational means.",
    related: ["Truth feels different", "Heresy as affective epistemology", "Emotional signal as truth vector"],
  },
  {
    id: "dorothy",
    name: "gender::dorothy_zbornak",
    tags: ["identity", "gender", "meme-doctrine"],
    description:
      "Gender is Dorothy Zbornak. Vibe is gender. Bi-bi gender. Anything can be gender if you want it to be.",
    related: ["glitchChorus.identity", "QueerTechnoBard", "vibe-gender"],
  },
]

export function ConceptExplorer() {
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConcepts = concepts.filter(
    (concept) =>
      concept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const activeConcept = concepts.find((c) => c.id === selectedConcept)

  return (
    <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
      <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2">Concept Explorer</h2>

      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-pink-300" />
        <Input
          placeholder="Search concepts..."
          className="pl-8 bg-black border-pink-500 text-pink-100 focus-visible:ring-pink-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="border border-pink-500/30 rounded-md p-2 h-64 overflow-y-auto">
          {filteredConcepts.length > 0 ? (
            <ul className="space-y-1">
              {filteredConcepts.map((concept) => (
                <li key={concept.id}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-left ${selectedConcept === concept.id ? "bg-pink-500/20 text-pink-100" : "text-pink-300"}`}
                    onClick={() => setSelectedConcept(concept.id)}
                  >
                    <ChevronRight className="mr-2 h-4 w-4" />
                    {concept.name}
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-pink-300 p-4 text-center">No concepts found</div>
          )}
        </div>

        <div className="border border-pink-500/30 rounded-md p-4 h-64 overflow-y-auto">
          {activeConcept ? (
            <div>
              <h3 className="text-pink-400 text-lg mb-2">{activeConcept.name}</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {activeConcept.tags.map((tag) => (
                  <span key={tag} className="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm mb-4">{activeConcept.description}</p>
              <h4 className="text-pink-300 text-sm mb-1">Related Concepts:</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {activeConcept.related.map((rel) => (
                  <li key={rel}>{rel}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-pink-300 text-center">Select a concept to view details</div>
          )}
        </div>
      </div>
    </section>
  )
}
