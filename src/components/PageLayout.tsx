import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface PageLayoutProps {
  title: string
  children: ReactNode
}

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="wrap page-content">
        <h1 className="page">{title}</h1>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default PageLayout