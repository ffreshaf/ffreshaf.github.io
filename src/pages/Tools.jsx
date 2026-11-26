import PageLayout from "../components/PageLayout"

function Tools() {
  return (
    <PageLayout title="Tools">
      <div className="stack">

        <section className="stack-group">
          <h2>Frontend & Web</h2>
          <p>
            HTML · CSS · JavaScript · TypeScript · React · PHP
          </p>
        </section>

        <section className="stack-group">
          <h2>Mobile Development</h2>
          <p>
            Flutter · Firebase · Capacitor
          </p>
        </section>

        <section className="stack-group">
          <h2>Programming Languages</h2>
          <p>
            Java · Python · C · C++ · SQL
          </p>
        </section>

        <section className="stack-group">
          <h2>Databases & Services</h2>
          <p>
            SQLite · Supabase · Firebase Firestore ·
            Sentry · OneSignal
          </p>
        </section>

        <section className="stack-group">
          <h2>Systems & Development</h2>
          <p>
            Linux · Git · GitHub · TCP · SSL/TLS ·
            Distributed Systems · OpenMP
          </p>
        </section>

        <section className="stack-group">
          <h2>Other Technologies</h2>
          <p>
            Ollama · GLSL · Jasmin · OLLIR ·
            Data Structures & Algorithms
          </p>
        </section>

      </div>
    </PageLayout>
  )
}

export default Tools