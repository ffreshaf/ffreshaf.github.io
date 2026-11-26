import PageLayout from "../components/PageLayout"

function Projects() {
  return (
    <PageLayout title="Projects">

      {/* Featured project */}
      <article className="project featured">
        <div className="project-info">
          <span className="project-number">01 / FEATURED</span>
          <h2>By Flora</h2>
          <p className="context">
            Personal project · In development
          </p>
        </div>

        <div className="project-details">
          <p>
            A React application written in TypeScript and
            packaged for Android using Capacitor.
            It integrates Supabase and Firebase Firestore
            for data management, OneSignal for push
            notifications and Sentry for error monitoring.
          </p>

          <p className="tech">
            React · TypeScript · Capacitor · Supabase ·
            Firebase · OneSignal · Sentry
          </p>

          <div className="actions">
            <a href="https://github.com/ffreshaf/By-Flora">
              GitHub ↗
            </a>
          </div>
        </div>
      </article>

      {/* Other projects */}
      <div className="project-list">

        <article className="project">
          <div className="project-info">
            <span className="project-number">02</span>
            <h2>Awared</h2>
            <p className="context">
              Artificial Intelligence · FEUP · 2026
            </p>
          </div>

          <div className="project-details">
            <p>
              A personal finance application that connects
              emotional states to spending behaviour.
              It identifies patterns and encourages healthier
              financial habits through reflective,
              non-judgmental notifications.
            </p>

            <p className="tech">
              Artificial Intelligence · Personal Finance
            </p>

            <p className="context">
                Final grade: 19/20
            </p>

            <div className="actions">
              <a href="https://github.com/Duarte-Pombo/Financial-App">
                GitHub ↗
              </a>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-info">
            <span className="project-number">03</span>
            <h2>BookExchange</h2>
            <p className="context">
              University project · FEUP · 2025
            </p>
          </div>

          <div className="project-details">
            <p>
              A cross-platform mobile application developed
              using Flutter, with Firebase integration
              for backend services and data management.
            </p>

            <p className="tech">
              Flutter · Firebase
            </p>

            <div className="actions">
              <a href="https://github.com/LEIC-ES-2024-25/2LEIC11T4">
                GitHub ↗
              </a>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-info">
            <span className="project-number">04</span>
            <h2>UBOOK</h2>
            <p className="context">
              University project · FEUP · 2025
            </p>
          </div>

          <div className="project-details">
            <p>
              A full-stack web application featuring
              a PHP backend, SQLite database and
              an interface built with HTML and CSS.
            </p>

            <p className="tech">
              PHP · SQLite · HTML · CSS
            </p>
          </div>
        </article>

        <article className="project">
          <div className="project-info">
            <span className="project-number">05</span>
            <h2>Distributed Chat System</h2>
            <p className="context">
              Parallel and Distributed Computing · FEUP · 2026
            </p>
          </div>

          <div className="project-details">
            <p>
              A multi-room TCP chat server featuring
              SSL/TLS, token-based authentication and
              virtual-thread concurrency. Includes
              AI-powered rooms backed by a local LLM
              capable of automatically summarising
              conversations.
            </p>

            <p className="tech">
              Java 21 · TCP · SSL/TLS · Ollama
            </p>
          </div>
        </article>

        <article className="project">
          <div className="project-info">
            <span className="project-number">06</span>
            <h2>Java– Compiler</h2>
            <p className="context">
              Compilers · FEUP · 2026
            </p>
          </div>

          <div className="project-details">
            <p>
            A complete compiler for the Java– programming language,
            developed as part of a four-member team. Implemented
            the full compilation pipeline, from syntax and semantic
            analysis to OLLIR intermediate-code generation and
            Jasmin bytecode generation. All optional extensions
            were successfully implemented.
            </p>

            <p className="tech">
                Java · Compiler Design · OLLIR · Jasmin · Code Generation
            </p>

            <p className="context">
                Final grade: 19/20
            </p>
          </div>
        </article>

      </div>

    </PageLayout>
  )
}

export default Projects