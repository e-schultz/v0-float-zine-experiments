"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function FloatHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-pink-500/30 py-4 bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-pink-500 text-2xl font-bold tracking-wider">
          [FLOAT BBS]
        </Link>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-pink-500">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black border-pink-500 text-pink-100">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/concepts"
                  className="p-2 border-b border-pink-500/20 hover:text-pink-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Concept Explorer
                </Link>
                <Link
                  href="/advanced-concept-explorer"
                  className="p-2 border-b border-pink-500/20 hover:text-pink-500 transition-colors bg-pink-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  Advanced Explorer
                </Link>
                <Link
                  href="/ghostlines"
                  className="p-2 border-b border-pink-500/20 hover:text-pink-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Ghostline Viewer
                </Link>
                <Link
                  href="/projects"
                  className="p-2 border-b border-pink-500/20 hover:text-pink-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/devtools"
                  className="p-2 border-b border-pink-500/20 hover:text-pink-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  DevTools
                </Link>
                <Link
                  href="/identity"
                  className="p-2 border-b border-pink-500/20 hover:text-pink-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Identity Fragments
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          <div className="text-xs text-pink-300">
            <div>Connection: 2400 baud | parity: none</div>
            <div>
              Status: <span className="text-green-400">● Active</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
