"use client"

import { useState } from "react"
import { Search, Network, FileText, MessageSquare, Hexagon, GitFork } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ConceptGraph } from "@/components/concept-graph"

const expansionPatterns = [
  {
    id: "concept-led",
    name: "Concept-Led Expansion",
    description: "Start with a single word/concept → Expand semantically and symbolically",
    flow: "seed::idea → floatlog search",
    icon: <Network className="h-4 w-4 mr-2" />,
  },
  {
    id: "note-led",
    name: "Note-Led Expansion",
    description: "Pick an existing note → Parse metadata, tags, themes",
    flow: "seed::note → semantic map",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    id: "chat-led",
    name: "Chat-Led Echo Bloom",
    description: "Distill symbolic seed phrases from chat history",
    flow: "seed::conversation → symbolic distillation",
    icon: <MessageSquare className="h-4 w-4 mr-2" />,
  },
  {
    id: "sigil-seeding",
    name: "Sigil Seeding",
    description: "Use sigil filters to highlight latent themes",
    flow: "seed::sigil → thematic resonance",
    icon: <Hexagon className="h-4 w-4 mr-2" />,
  },
  {
    id: "meta-path",
    name: "Meta-Path Traversal",
    description: "Identify connections between floatlogs, sigils, and tags",
    flow: "seed::path → network traversal",
    icon: <GitFork className="h-4 w-4 mr-2" />,
  },
]

export function ConceptExplorerAdvanced() {
  const [selectedPattern, setSelectedPattern] = useState<string>("concept-led")
  const [seedValue, setSeedValue] = useState("")
  const [activeTab, setActiveTab] = useState("input")
  const [isExploring, setIsExploring] = useState(false)
  const [explorationResults, setExplorationResults] = useState<any>(null)

  const handleExplore = () => {
    if (!seedValue.trim()) return

    setIsExploring(true)
    setActiveTab("visualization")

    // Simulate exploration results
    setTimeout(() => {
      setExplorationResults({
        nodes: [
          { id: seedValue, group: 1, label: seedValue },
          { id: "emotional_resonance", group: 2, label: "emotional resonance" },
          { id: "remembering_forward", group: 2, label: "remembering forward" },
          { id: "ritual_over_routine", group: 3, label: "ritual over routine" },
          { id: "shacks_not_cathedrals", group: 3, label: "shacks not cathedrals" },
          { id: "taxonomic_violence", group: 4, label: "taxonomic violence" },
          { id: "glitch_chorus", group: 4, label: "glitch chorus" },
          { id: "hauntology", group: 5, label: "hauntology" },
        ],
        links: [
          { source: seedValue, target: "emotional_resonance", value: 5 },
          { source: seedValue, target: "remembering_forward", value: 3 },
          { source: "emotional_resonance", target: "ritual_over_routine", value: 2 },
          { source: "remembering_forward", target: "shacks_not_cathedrals", value: 4 },
          { source: "ritual_over_routine", target: "taxonomic_violence", value: 1 },
          { source: "shacks_not_cathedrals", target: "glitch_chorus", value: 3 },
          { source: "taxonomic_violence", target: "hauntology", value: 5 },
        ],
      })
      setIsExploring(false)
    }, 2000)
  }

  const selectedPatternData = expansionPatterns.find((p) => p.id === selectedPattern)

  return (
    <div className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
      <Tabs defaultValue="input" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-black border border-pink-500/30 grid grid-cols-3">
          <TabsTrigger value="input" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100">
            Input
          </TabsTrigger>
          <TabsTrigger
            value="visualization"
            className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100"
          >
            Visualization
          </TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100">
            Details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="mt-4 space-y-6">
          <div>
            <h3 className="text-pink-400 text-lg mb-4">Expansion Pattern</h3>
            <RadioGroup value={selectedPattern} onValueChange={setSelectedPattern} className="space-y-4">
              {expansionPatterns.map((pattern) => (
                <div
                  key={pattern.id}
                  className="border border-pink-500/30 p-4 rounded-md hover:bg-pink-500/5 transition-colors"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value={pattern.id} id={pattern.id} className="border-pink-500 text-pink-500" />
                    <div className="grid gap-1.5">
                      <Label htmlFor={pattern.id} className="text-pink-300 flex items-center">
                        {pattern.icon}
                        {pattern.name}
                      </Label>
                      <p className="text-sm text-pink-300/70">{pattern.description}</p>
                      <p className="text-xs text-pink-400 mt-1">Flow: {pattern.flow}</p>
                    </div>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-pink-400 text-lg mb-4">Seed Value</h3>
            {selectedPattern === "chat-led" ? (
              <Textarea
                placeholder="Paste conversation excerpt here..."
                className="bg-black border-pink-500 text-pink-100 focus-visible:ring-pink-500 min-h-[150px]"
                value={seedValue}
                onChange={(e) => setSeedValue(e.target.value)}
              />
            ) : (
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-pink-300" />
                <Input
                  placeholder={`Enter ${selectedPattern === "concept-led" ? "concept" : selectedPattern === "note-led" ? "note title" : "seed value"}...`}
                  className="pl-8 bg-black border-pink-500 text-pink-100 focus-visible:ring-pink-500"
                  value={seedValue}
                  onChange={(e) => setSeedValue(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleExplore}
              disabled={!seedValue.trim() || isExploring}
              className="bg-pink-500 hover:bg-pink-600 text-black"
            >
              {isExploring ? "Exploring..." : "Begin Exploration"}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="visualization" className="mt-4">
          {isExploring ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="text-pink-500 text-xl animate-pulse">Exploring Concept Space...</div>
              <div className="mt-4 text-pink-300 text-sm">Applying {selectedPatternData?.name} pattern</div>
            </div>
          ) : explorationResults ? (
            <div className="border border-pink-500/30 rounded-md overflow-hidden h-[500px]">
              <ConceptGraph data={explorationResults} />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-pink-300">
              <p>Select an expansion pattern and provide a seed value to begin exploration.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="details" className="mt-4">
          {explorationResults ? (
            <div className="space-y-4">
              <div className="border border-pink-500/30 p-4 rounded-md">
                <h3 className="text-pink-400 text-lg mb-2">Exploration Summary</h3>
                <p className="text-sm text-pink-300 mb-4">
                  Exploration using <span className="text-pink-500">{selectedPatternData?.name}</span> with seed "
                  {seedValue}"
                </p>

                <div className="space-y-2">
                  <p className="text-sm text-pink-300">
                    <span className="text-pink-400">Nodes discovered:</span> {explorationResults.nodes.length}
                  </p>
                  <p className="text-sm text-pink-300">
                    <span className="text-pink-400">Connections mapped:</span> {explorationResults.links.length}
                  </p>
                  <p className="text-sm text-pink-300">
                    <span className="text-pink-400">Primary cluster:</span> Emotional Resonance
                  </p>
                </div>
              </div>

              <div className="border border-pink-500/30 p-4 rounded-md">
                <h3 className="text-pink-400 text-lg mb-2">Node Details</h3>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {explorationResults.nodes.map((node: any) => (
                    <div key={node.id} className="border-l-4 border-pink-500 pl-4 py-2 bg-pink-500/5">
                      <h4 className="text-pink-300 font-medium">{node.label}</h4>
                      <p className="text-xs text-pink-300/70">Group: {node.group}</p>
                      <p className="text-xs text-pink-300/70">
                        Connections:{" "}
                        {
                          explorationResults.links.filter(
                            (link: any) => link.source === node.id || link.target === node.id,
                          ).length
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-pink-300">
              <p>No exploration data available. Run an exploration first.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
