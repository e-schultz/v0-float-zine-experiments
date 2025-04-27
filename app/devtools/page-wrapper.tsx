import { getDevToolsPageContent } from "@/lib/content"
import DevToolsPage from "./page"

export default function DevToolsPageWrapper() {
  const pageContent = getDevToolsPageContent()

  return <DevToolsPage pageContent={pageContent} />
}
