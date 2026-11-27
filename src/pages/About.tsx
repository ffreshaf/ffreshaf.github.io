
function About() {
  return (
    <>
      <h1 className="page-title">About</h1>
      <div className="prose">

        <p className="about-intro">
          I'm a recent Informatics and Computing Engineering
          graduate from FEUP, interested in the intersection
          of design, technology and problem-solving.
          I particularly enjoy frontend development and
          building interfaces that feel clear, intuitive
          and enjoyable to use.
        </p>

        <p>
          During my degree, I explored several areas of
          computer science, from software and web development
          to artificial intelligence, compilers and distributed
          systems. I enjoy understanding how things work,
          experimenting with ideas and turning them into
          practical projects.
        </p>

        <p>
          I'm currently looking for my first professional
          opportunity, ideally in a team where I can keep
          learning, contribute to meaningful projects and
          grow as a developer.
        </p>

        <h2>Education</h2>

        {/* Music studies */}
        <div className="about-entry">
          <div>
            <strong>Music Production</strong>
            <p>
              Currently studying at Academia de Música do Porto
              <br />
              Porto, Portugal
            </p>
          </div>
          <span className="about-date">2026 — 2028</span>
        </div>


        {/* University degree */}
        <div className="about-entry">
          <div>
            <strong>
              Bachelor's in Informatics and Computing Engineering
            </strong>
            <p>
              Faculdade de Engenharia da Universidade do Porto
              <br />
              Porto, Portugal
            </p>
          </div>
          <span className="about-date">2023 — 2026</span>
        </div>

        {/* High school */}
        <div className="about-entry">
          <div>
            <strong>
              Scientific-Humanistic Course in Science and Technology
            </strong>
            <p>
              Colégio Luso-Francês
              <br />
              Porto, Portugal
            </p>
          </div>
          <span className="about-date">2020 — 2023</span>
        </div>

        <h2>Beyond Technology</h2>

        <p>
          Music has always been an important part of my life.
          I play guitar and bass, write songs in Portuguese
          and English, and produce music using FL Studio.
          I performed live five times with my first band,
          FlowerAge, and I'm now working on new material
          with a second project.
        </p>

        <p>
          I'm also interested in physics and astronomy.
          In 2023, I participated in the International
          Astronomical Search Collaboration, analysing
          Pan-STARRS images to contribute to near-Earth
          object and asteroid observations.
        </p>

        <h2>A Little More</h2>

        <p>
          I value curiosity, creativity and attention to detail.
          Whether I'm working on a software project, learning
          something new or writing music, I enjoy the process
          of exploring an idea and gradually making it better.
        </p>

      </div>
    </>
  )
}

export default About