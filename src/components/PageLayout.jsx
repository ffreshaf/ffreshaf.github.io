import Navbar from "./Navbar"
import Footer from "./Footer"

function PageLayout({ title, children }) {
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