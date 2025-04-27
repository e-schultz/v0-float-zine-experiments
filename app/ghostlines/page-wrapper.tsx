import { getGhostTraces, getGhostlinesPageContent } from "@/lib/content"
import GhostlinesPage from "./page"

export default function GhostlinesPageWrapper() {
  const ghostTraces = getGhostTraces()
  const pageContent = getGhostlinesPageContent()

  return <GhostlinesPage ghostTraces={ghostTraces} pageContent={pageContent} />
}
