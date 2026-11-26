import Navbar from "./Navbar"

function PageLayout({ title, children }) {
  return (
    <>
      <Navbar />

      <main className="wrap page-content">
        <h1 className="page">{title}</h1>
        {children}
      </main>
    </>
  )
}

export default PageLayout