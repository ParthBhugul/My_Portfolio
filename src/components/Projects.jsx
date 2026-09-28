function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">

        <p className="section-label">PROJECTS</p>

        <h2>Things I've built.</h2>

        <p className="projects-intro">
          A selection of projects where I have explored web development,
          APIs, application logic, and real-world problem solving.
        </p>

        <div className="projects-grid">

          {/* =========================
              PROJECT 01 - KESHAVSOFT
          ========================== */}

          <article
            className="project-card project-keshavsoft"
            style={{
              backgroundImage: "url('/projects/KeshavSoft.png')",
            }}
          >
            <div className="project-overlay">

              <div className="project-top">
                <span className="project-number">01</span>

                <span className="project-type">
                  WEB APPLICATION
                </span>
              </div>

              <div className="project-content">

                <h3>KeshavSoft Hiring Platform</h3>

                <p>
                  A recruitment-focused web application designed to provide
                  a structured platform for hiring and candidate interaction.
                  The project focuses on clean UI, recruitment workflows,
                  form handling, and user interaction.
                </p>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Bootstrap</span>
                </div>

                <a
                  href="https://keshavsoft-hiring-site.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-view"
                >
                  View Project ↗
                </a>

              </div>

            </div>
          </article>


          {/* =========================
              PROJECT 02 - AI SUMMARIZER
          ========================== */}

          <article
            className="project-card"
            style={{
              backgroundImage: "url('/projects/Summarizer.png')",
            }}
          >
            <div className="project-overlay">

              <div className="project-top">
                <span className="project-number">02</span>

                <span className="project-type">
                  NLP / WEB APPLICATION
                </span>
              </div>

              <div className="project-content">

                <h3>AI Summarizer</h3>

                <p>
                  A web application that extracts content from URLs and
                  generates concise summaries. The project explores
                  JavaScript application logic, content processing,
                  and REST API communication.
                </p>

                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>NLP</span>
                  <span>REST API</span>
                  <span>Node.js</span>
                </div>

                <a
                  href="https://main--extraordinary-choux-e8bb46.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-view"
                >
                  View Project ↗
                </a>

              </div>

            </div>
          </article>


          {/* =========================
              PROJECT 03 - CAMPUS COMPLAINT
          ========================== */}

          <article
            className="project-card"
            style={{
              backgroundImage: "url('/projects/Complaint-Register.png')",
            }}
          >
            <div className="project-overlay">

              <div className="project-top">
                <span className="project-number">03</span>

                <span className="project-status">
                  IN DEVELOPMENT
                </span>
              </div>

              <div className="project-content">

                <h3>Campus Complaint System</h3>

                <p>
                  A full-stack web application for managing campus complaints
                  through a structured digital workflow. The project is being
                  developed to strengthen frontend development, backend APIs,
                  database integration, and application logic.
                </p>

                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                </div>

                <span className="project-view project-disabled">
                  In Development
                </span>

              </div>

            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Projects;