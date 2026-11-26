import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="bar">
      <Link to="/" className="home">
        <img src="/photo-2.jpg" alt="" />
        <span>Guilherme Linhares</span>
      </Link>

      <nav>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar