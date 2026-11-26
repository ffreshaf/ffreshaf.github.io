import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface PageLayoutProps {
  title: string
  children: ReactNode
}

function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="wrap page-content">
        <h1 className="page">{title}</h1>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default PageLayout