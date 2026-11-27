
function Contact() {
  return (
    <>
      <h1 className="page-title">Contact</h1>
      <div className="prose contact">
        <p>
          I'm based in Porto and available to start immediately.
          Feel free to get in touch if you'd like to discuss an
          opportunity, a project or just say hello.
        </p>

        <p>
          <a
            className="contact-email"
            href="mailto:guilherme-linhares@sapo.pt"
          >
            guilherme-linhares@sapo.pt
          </a>
        </p>

        <ul className="contact-list">
          <li>
            <a
              href="https://github.com/ffreshaf"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-linhares-3a06a3393/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/linhares_fk/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="/GuilhermeLinhares_CV.pdf" target="_blank">
              CV (PDF)
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contact