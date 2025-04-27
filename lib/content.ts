import fs from "fs"
import path from "path"
import { cache } from "react"

// Define types for our content
export interface Concept {
  id: string
  name: string
  tags: string[]
  description: string
  related: string[]
}

export interface GhostTrace {
  id: string
  title: string
  timestamp: string
  tags: string[]
  content: string
}

export interface Project {
  id: string
  title: string
  description: string
  status: string
  lastUpdated: string
  tags: string[]
}

export interface HomeContent {
  title: string
  subtitle: string
  description: string
  corePrinciples: {
    sigil: string
    title: string
    description: string
  }[]
  systemInfo: {
    node: string
    time?: string
    sysop: string
    channel: string
    session: string
    welcome: string
  }
}

export interface IdentityFragment {
  id: string
  title: string
  tags: string[]
  description: string
  quote?: string
  details: string[]
}

export interface HauntologySection {
  title: string
  items: {
    label: string
    content: string
  }[]
  quote?: string
}

// Cache the content fetching to improve performance
export const getHomeContent = cache((): HomeContent => {
  const filePath = path.join(process.cwd(), "content", "home.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getConcepts = cache((): Concept[] => {
  const filePath = path.join(process.cwd(), "content", "concepts.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getGhostTraces = cache((): GhostTrace[] => {
  const filePath = path.join(process.cwd(), "content", "ghosttraces.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getProjects = cache((): Project[] => {
  const filePath = path.join(process.cwd(), "content", "projects.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getIdentityFragments = cache((): IdentityFragment[] => {
  const filePath = path.join(process.cwd(), "content", "identity-fragments.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getHauntologyContent = cache((): HauntologySection => {
  const filePath = path.join(process.cwd(), "content", "hauntology.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getConceptsPageContent = cache(() => {
  const filePath = path.join(process.cwd(), "content", "concepts-page.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getGhostlinesPageContent = cache(() => {
  const filePath = path.join(process.cwd(), "content", "ghostlines-page.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getProjectsPageContent = cache(() => {
  const filePath = path.join(process.cwd(), "content", "projects-page.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

export const getDevToolsPageContent = cache(() => {
  const filePath = path.join(process.cwd(), "content", "devtools-page.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
})

// Helper function to parse MDX content (for future use)
export const getMdxContent = cache((slug: string) => {
  const filePath = path.join(process.cwd(), "content", "mdx", `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  return fileContents
})
