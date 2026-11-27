import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

function PageLayout() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="wrap page-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default PageLayout