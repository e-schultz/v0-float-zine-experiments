"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function TerminalInput() {
  const [command, setCommand] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [responses, setResponses] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!command.trim()) return

    setHistory([...history, command])

    // Simple response simulation
    let response = "Command processed."

    if (command.includes("--intent")) {
      response = "Intent registered. You are now serving as witness."
    } else if (command.includes("--banish")) {
      response = "Banishing ritual initiated. Composting unwanted elements."
    } else if (command.includes("--help")) {
      response = "Available commands: --intent, --banish, --compost, --echo, --invoke"
    } else if (command.includes("parse")) {
      response = "Parsing sigil structure... ERROR: Inverted sigil detected."
    }

    setResponses([...responses, response])
    setCommand("")
  }

  return (
    <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
      <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2">Terminal</h2>

      <div className="font-mono text-sm space-y-1 mb-4 max-h-40 overflow-y-auto">
        {history.map((cmd, i) => (
          <div key={`cmd-${i}`} className="text-pink-300">
            <span className="text-pink-500 mr-2">$</span> {cmd}
          </div>
        ))}
        {responses.map((res, i) => (
          <div key={`res-${i}`} className="text-green-300 pl-4">
            {res}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="flex-grow flex items-center bg-black border border-pink-500/50 rounded-md px-2">
          <span className="text-pink-500 mr-2">$</span>
          <Input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="border-0 bg-transparent focus-visible:ring-0 text-pink-100 flex-grow"
            placeholder="Enter command..."
          />
        </div>
        <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-black">
          Execute
        </Button>
      </form>
    </section>
  )
}
