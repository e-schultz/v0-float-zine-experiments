"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DevToolsPanel() {
  const [activeTab, setActiveTab] = useState("console")

  return (
    <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
      <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2">
        DevTools Excavation: Observing the Unobservable
      </h2>

      <Tabs defaultValue="console" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-black border border-pink-500/30 grid grid-cols-5">
          <TabsTrigger value="console" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100">
            Console
          </TabsTrigger>
          <TabsTrigger
            value="elements"
            className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100"
          >
            Elements
          </TabsTrigger>
          <TabsTrigger value="network" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100">
            Network
          </TabsTrigger>
          <TabsTrigger value="memory" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100">
            Memory
          </TabsTrigger>
          <TabsTrigger
            value="observer"
            className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100"
          >
            Observer
          </TabsTrigger>
        </TabsList>

        <TabsContent value="console" className="border border-pink-500/30 p-4 rounded-md mt-2 h-64 overflow-y-auto">
          <div className="space-y-2 text-sm">
            <div className="border-l-4 border-gray-500 pl-2 py-1">
              <span className="bg-gray-500 text-black text-xs px-1 rounded mr-2">system</span>
              DevTools initialized. Connecting to runtime...
            </div>
            <div className="border-l-4 border-gray-500 pl-2 py-1">
              <span className="bg-gray-500 text-black text-xs px-1 rounded mr-2">system</span>
              Connected. Monitoring AST execution environment.
            </div>
            <div className="border-l-4 border-yellow-500 pl-2 py-1 bg-yellow-500/5">
              <span className="bg-yellow-500 text-black text-xs px-1 rounded mr-2">warning</span>
              Unusual memory access patterns detected. Runtime attempting to parse inverted sigil structure.
            </div>
            <div className="border-l-4 border-pink-500 pl-2 py-1 bg-pink-500/5">
              <span className="bg-pink-500 text-black text-xs px-1 rounded mr-2">spectral</span>
              Theoretical recursion detected in node "taxonomic violence" - self-referential parsing loop initiated.
            </div>
            <div className="border-l-4 border-purple-500 pl-2 py-1 bg-purple-500/5 animate-pulse">
              <span className="bg-purple-500 text-black text-xs px-1 rounded mr-2">temporal leak</span>
              [Data from future execution context detected] Function call "observe_the_unobservable()" detected before
              its declaration.
            </div>
            <div className="border-l-4 border-pink-500 pl-2 py-1 bg-pink-500/5">
              <span className="bg-pink-500 text-black text-xs px-1 rounded mr-2">spectral</span>
              Inverted sigil {"}∴{"} generating phantom nodes in AST hierarchy. Taxonomy becoming rhizomatic.
            </div>
            <div className="border-l-4 border-gray-500 pl-2 py-1">
              <span className="bg-gray-500 text-black text-xs px-1 rounded mr-2">system</span>
              Memory corruption in sector 0x3A7F... reallocating resources.
            </div>
            <div className="border-l-4 border-pink-500 pl-2 py-1 bg-pink-500/5">
              <span className="bg-pink-500 text-black text-xs px-1 rounded mr-2">spectral</span>
              Multiple execution paths detected simultaneously. Quantum superposition of algorithmic states observed.
            </div>
            <div className="border-l-4 border-gray-700 pl-2 py-1">
              <span className="bg-gray-700 text-gray-700 hover:text-white transition-colors text-xs px-1 rounded mr-2">
                unobservable
              </span>
              function observe_the_unobservable() {"{"}
              // This function exists in a liminal space // between declaration and execution return [REDACTED];
              {"}"}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="elements" className="border border-pink-500/30 p-4 rounded-md mt-2 h-64 overflow-y-auto">
          <div className="font-mono text-sm">
            <div>
              <span className="cursor-pointer">▶</span>
              <span className="text-blue-400">&lt;AST&gt;</span>
              <span className="text-purple-400"> type</span>=
              <span className="text-green-400">"ritualAST::hellraiserCartography.v1"</span>
            </div>
            <div className="pl-4">
              <span className="cursor-pointer">▶</span>
              <span className="text-blue-400">&lt;structure&gt;</span>
            </div>
            <div className="pl-8">
              <span className="text-blue-400">&lt;node&gt;</span>
              <span className="text-purple-400"> id</span>=
              <span className="text-green-400">"normative_containment"</span>
              <span className="text-blue-400">/&gt;</span>
            </div>
            <div className="pl-8">
              <span className="text-blue-400">&lt;node&gt;</span>
              <span className="text-purple-400"> id</span>=<span className="text-green-400">"taxonomic_violence"</span>
              <span className="text-blue-400">/&gt;</span>
            </div>
            <div className="pl-8">
              <span className="text-blue-400">&lt;phantom-node&gt;</span>
              <span className="text-purple-400"> id</span>=<span className="text-green-400">"[UNRENDERABLE]"</span>
              <span className="text-blue-400">/&gt;</span>
            </div>
            <div className="pl-8">
              <span className="text-blue-400">&lt;node&gt;</span>
              <span className="text-purple-400"> id</span>=
              <span className="text-green-400">"post-binary_becoming"</span>
              <span className="text-purple-400"> state</span>=<span className="text-green-400">"superposition"</span>
              <span className="text-blue-400">/&gt;</span>
            </div>
            <div className="pl-4">
              <span className="cursor-pointer">▶</span>
              <span className="text-blue-400">&lt;sigil&gt;</span>
              <span className="text-purple-400"> state</span>=<span className="text-green-400">"inverted"</span>
              <span className="text-purple-400"> orientation</span>=
              <span className="text-green-400">"anti-containment"</span>
              {"}∴{"}
              <span className="text-blue-400">&lt;/sigil&gt;</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="observer" className="border border-pink-500/30 p-4 rounded-md mt-2 h-64 overflow-y-auto">
          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-pink-500 pl-2 py-1 bg-pink-500/5">
              <span className="bg-pink-500 text-black text-xs px-1 rounded mr-2">meta-observation</span>
              The observer panel exists to observe itself. A recursive act of witnessing.
            </div>

            <div className="border-l-4 border-red-500 pl-2 py-1 bg-red-500/5">
              <span className="bg-red-500 text-black text-xs px-1 rounded mr-2">error</span>
              ParadoxException: Cannot observe the act of observation without altering the observed.
            </div>

            <div className="border-l-4 border-purple-500 pl-2 py-1 bg-purple-500/5 animate-pulse">
              <span className="bg-purple-500 text-black text-xs px-1 rounded mr-2">temporal leak</span>
              This message is observing you from a future execution context.
            </div>

            <div className="border-l-4 border-pink-500 pl-2 py-1 bg-pink-500/5">
              <span className="bg-pink-500 text-black text-xs px-1 rounded mr-2">spectral</span>
              The unobservable exists in the blind spots of computational logic. It manifests in the differential
              between intention and execution. It haunts the margins of taxonomic certainty.
            </div>
          </div>
        </TabsContent>

        <TabsContent value="network" className="border border-pink-500/30 p-4 rounded-md mt-2 h-64 overflow-y-auto">
          <div className="text-sm">
            <div className="mb-2">Monitoring transmission between nodes...</div>

            <div className="font-mono bg-gray-900 p-2 rounded text-xs mt-4">
              <pre>
                {`TRACE: Message transmission between "normative_containment" and "post-binary_becoming"

01:24:17.302 [normative_containment] -> REQUEST: submit(taxonomy)
01:24:17.305 [post-binary_becoming] -> RESPONSE: reject(taxonomy)
01:24:17.309 [normative_containment] -> REQUEST: enforce(boundary)
01:24:17.312 [post-binary_becoming] -> RESPONSE: dissolve(boundary)
01:24:17.318 [normative_containment] -> REQUEST: contain(excess)
01:24:17.321 [post-binary_becoming] -> [TRANSMISSION CORRUPTED]
01:24:17.325 [system] -> ERROR: Communication protocol violation`}
              </pre>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="memory" className="border border-pink-500/30 p-4 rounded-md mt-2 h-64 overflow-y-auto">
          <div className="text-sm">
            <div className="mb-2">Memory visualization - sectors with spectral corruption highlighted</div>

            <div className="grid grid-cols-16 gap-1 mt-4">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square flex items-center justify-center text-xs ${
                    [20, 21, 27, 28, 48, 49, 50, 51].includes(i) ? "bg-pink-500 text-black" : "bg-gray-800"
                  }`}
                >
                  {i.toString(16).toUpperCase().padStart(2, "0")}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
