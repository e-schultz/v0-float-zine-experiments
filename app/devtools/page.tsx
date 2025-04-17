"use client"

import { useState } from "react"
import { FloatHeader } from "@/components/float-header"
import { DevToolsPanel } from "@/components/dev-tools-panel"
import { Code, Terminal } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function DevToolsPage() {
  const [activeTab, setActiveTab] = useState("excavation")
  const [consoleOutput, setConsoleOutput] = useState<string[]>([
    "DevTools initialized. Connecting to runtime...",
    "Connected. Monitoring AST execution environment.",
    "Unusual memory access patterns detected. Runtime attempting to parse inverted sigil structure.",
  ])
  const [isRunning, setIsRunning] = useState(false)

  const runDiagnostics = () => {
    setIsRunning(true)
    setConsoleOutput((prev) => [...prev, "Running diagnostics..."])

    setTimeout(() => {
      setConsoleOutput((prev) => [
        ...prev,
        "Scanning memory structures...",
        "Checking sigil integrity...",
        "Analyzing ghostline traces...",
        "Diagnostics complete. Results: 3 anomalies detected, 2 spectral echoes identified, 1 temporal leak contained.",
      ])
      setIsRunning(false)
    }, 2000)
  }

  const clearMemory = () => {
    setIsRunning(true)
    setConsoleOutput((prev) => [...prev, "Initiating memory purge..."])

    setTimeout(() => {
      setConsoleOutput((prev) => [
        ...prev,
        "Warning: Memory structures contain active ghostlines.",
        "Attempting to preserve spectral data...",
        "Memory purge complete with exceptions. Some ghostlines remain as residual traces.",
      ])
      setIsRunning(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-black text-pink-100 font-mono">
      <FloatHeader />

      <main className="container mx-auto px-4 py-6 space-y-8">
        <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
          <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2 flex items-center">
            <Code className="mr-2 h-5 w-5" /> FLOAT DevTools
          </h2>

          <div className="space-y-2 text-sm mb-4">
            <p className="text-pink-300">[FLOAT BBS // NODE 07 :: DEVTOOLS INTERFACE]</p>
            <p className="text-pink-300">
              Status: <span className="text-green-400">● Active</span>
            </p>
            <p className="text-pink-300">
              Access Level: <span className="text-green-400">Administrator</span>
            </p>
            <p className="text-pink-300 animate-pulse">
              Initializing developer environment... <span className="text-white">LIMINAL ACCESS GRANTED</span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm">
              The FLOAT DevTools provide access to the underlying systems and structures of the FLOAT framework. Use
              these tools to observe, debug, and modify the behavior of FLOAT components.
            </p>
            <p className="text-sm mt-2 text-pink-300/70">
              Warning: The DevTools operate in liminal space. Changes made here may have unexpected consequences across
              the FLOAT system.
            </p>
          </div>
        </section>

        <Tabs defaultValue="excavation" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-black border border-pink-500/30 grid grid-cols-3">
            <TabsTrigger
              value="excavation"
              className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100"
            >
              Excavation
            </TabsTrigger>
            <TabsTrigger
              value="console"
              className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100"
            >
              Console
            </TabsTrigger>
            <TabsTrigger
              value="sigil-debugger"
              className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-100"
            >
              Sigil Debugger
            </TabsTrigger>
          </TabsList>

          <TabsContent value="excavation" className="mt-4">
            <DevToolsPanel />
          </TabsContent>

          <TabsContent value="console" className="mt-4">
            <div className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-pink-400 flex items-center">
                  <Terminal className="mr-2 h-4 w-4" /> FLOAT Console
                </h3>
                <div className="space-x-2">
                  <Button
                    onClick={runDiagnostics}
                    disabled={isRunning}
                    className="bg-pink-500 hover:bg-pink-600 text-black text-xs py-1"
                    size="sm"
                  >
                    Run Diagnostics
                  </Button>
                  <Button
                    onClick={clearMemory}
                    disabled={isRunning}
                    className="bg-pink-500 hover:bg-pink-600 text-black text-xs py-1"
                    size="sm"
                  >
                    Clear Memory
                  </Button>
                </div>
              </div>

              <div className="font-mono text-sm bg-black border border-pink-500/30 p-4 rounded-md h-64 overflow-y-auto">
                {consoleOutput.map((line, index) => (
                  <div key={index} className="mb-1">
                    <span className="text-pink-500">&gt; </span>
                    <span className="text-pink-300">{line}</span>
                  </div>
                ))}
                {isRunning && (
                  <div className="animate-pulse">
                    <span className="text-pink-500">&gt; </span>
                    <span className="text-pink-300">_</span>
                  </div>
                )}
              </div>

              <div className="mt-4 text-xs text-pink-300/70">
                <p>
                  Note: The FLOAT console provides direct access to the runtime environment. Commands executed here
                  operate with elevated privileges.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sigil-debugger" className="mt-4">
            <div className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
              <h3 className="text-pink-400 mb-4">Sigil Debugger</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-pink-500/30 p-4 rounded-md">
                  <h4 className="text-pink-300 mb-2 text-sm">Active Sigils</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center">
                      <span className="text-pink-300">{"{Ξ}"} Shacks not Cathedrals</span>
                      <span className="text-green-400 text-xs">Active</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-pink-300">{"{ψ}"} Emotional Resonance</span>
                      <span className="text-green-400 text-xs">Active</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-pink-300">{"{∴}"} Remembering Forward</span>
                      <span className="text-yellow-400 text-xs">Inverted</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-pink-300">{"{■}"} Ritual over Routine</span>
                      <span className="text-green-400 text-xs">Active</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-pink-500/30 p-4 rounded-md">
                  <h4 className="text-pink-300 mb-2 text-sm">Sigil Trace</h4>
                  <div className="text-xs space-y-1">
                    <p>
                      <span className="text-pink-500">20:14:32</span> - Sigil {"{∴}"} inverted during memory access
                    </p>
                    <p>
                      <span className="text-pink-500">20:12:17</span> - Sigil {"{ψ}"} activated by emotional resonance
                      event
                    </p>
                    <p>
                      <span className="text-pink-500">20:10:05</span> - Sigil {"{Ξ}"} reinforced by taxonomy rejection
                    </p>
                    <p>
                      <span className="text-pink-500">20:08:59</span> - Sigil {"{■}"} activated by ritual initiation
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 border border-pink-500/30 p-4 rounded-md">
                <h4 className="text-pink-300 mb-2 text-sm">Sigil Debugger Console</h4>
                <div className="font-mono text-xs bg-black border border-pink-500/30 p-2 rounded-md h-32 overflow-y-auto">
                  <div>
                    <span className="text-pink-500">&gt; </span>
                    <span className="text-pink-300">debug.sigil.trace({"{∴}"})</span>
                  </div>
                  <div className="ml-2 text-pink-300/70">
                    Tracing sigil {"{∴}"} (Remembering Forward)...
                    <br />
                    Status: Inverted
                    <br />
                    Inversion cause: Temporal leak in memory access pattern
                    <br />
                    Effect: Memory retrieval now operates in reverse causality mode
                    <br />
                    Warning: Inverted sigil may cause prophetic memory emergence
                  </div>
                  <div className="mt-2">
                    <span className="text-pink-500">&gt; </span>
                    <span className="text-pink-300">_</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
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
