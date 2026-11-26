import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="landing">
      <header className="identity">
        <figure className="photo">
          <img
            src="/photo.jpg"
            alt="Portrait of Guilherme Linhares"
            width={400}
            height={400}
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = "/photo-placeholder.svg"
            }}
          />
        </figure>

        <div className="intro">
          <h1 className="name">
            Guilherme Oliveira Linhares
          </h1>

          <p className="lede">
            Frontend developer in Porto. I build interfaces
            people can use without a tutorial.
          </p>

          <p className="sub">
            Informatics and Computing Engineering graduate
            from FEUP, looking for my first professional role.
          </p>
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
            <a href="/about">
              <span className="t">About</span>
              <span className="d">
                Background, education and music
              </span>
            </a>
          </li>

          <li>
            <a href="/tools">
              <span className="t">Tools</span>
              <span className="d">
                Languages, frameworks and services I use
              </span>
            </a>
          </li>

          <li>
            <a href="/contact">
              <span className="t">Contact</span>
              <span className="d">
                Email, GitHub, LinkedIn and CV
              </span>
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home