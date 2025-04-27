import type { ReactNode } from "react"

interface GhostTraceProps {
  id: string
  title: string
  timestamp: string
  content: ReactNode | string
}

export function GhostTrace({ id, title, timestamp, content }: GhostTraceProps) {
  return (
    <section className="border border-pink-500 p-4 rounded-md bg-black/50 backdrop-blur">
      <h2 className="text-pink-500 text-xl mb-4 border-b border-pink-500/30 pb-2">Ghostline Trace</h2>

      <div className="bg-pink-500/5 border-l-4 border-pink-500 p-4 rounded-r-md">
        <div className="flex justify-between text-sm mb-2 text-pink-400">
          <span>
            [ID:{id}] {title}
          </span>
          <span>{timestamp}</span>
        </div>
        <div className="pl-2 text-sm">
          {typeof content === "string" ? <div dangerouslySetInnerHTML={{ __html: content }} /> : content}
        </div>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <div className="text-pink-300">
          <span className="text-pink-500 mr-2">$</span> floatctl --intent "today I serve as witness"
        </div>
        <div className="text-pink-300">
          <span className="text-pink-500 mr-2">$</span> floatctl --banish --compost "what wants rest"
        </div>
        <div className="text-pink-300">
          <span className="text-pink-500 mr-2">$</span> <span className="animate-pulse">█</span>
        </div>
      </div>
    </section>
  )
}
