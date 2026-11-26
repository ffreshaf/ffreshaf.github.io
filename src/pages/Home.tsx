import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="landing">
      <header className="identity">
        <div className="photo-gallery" aria-label="A collection of portraits">
          <figure className="photo-card photo-left">
            <img
              src="/photo-1.jpg"
              alt="Guilherme Oliveira Linhares"
            />
          </figure>

          <figure className="photo-card photo-center">
            <img
              src="/photo-2.jpg"
              alt="Guilherme Oliveira Linhares"
            />
          </figure>

          <figure className="photo-card photo-right">
            <img
              src="/photo-3.jpg"
              alt="Guilherme Oliveira Linhares"
            />
          </figure>
        </div>

        <div className="intro">
          <h1 className="name">
            Guilherme Oliveira Linhares
          </h1>
        </div>
      </header>

      <main className="navigation">
        <ul className="index" aria-label="Site navigation">
          <li>
            <Link to="/projects">
              <span className="t">Projects</span>
              <span className="d">
                Apps and university work I've built
              </span>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <span className="t">About</span>
              <span className="d">
                Background, education and music
              </span>
            </Link>
          </li>

          <li>
            <Link to="/tools">
              <span className="t">Tools</span>
              <span className="d">
                Languages, frameworks and services I use
              </span>
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <span className="t">Contact</span>
              <span className="d">
                Email, GitHub, LinkedIn and CV
              </span>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home