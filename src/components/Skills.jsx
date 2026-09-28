function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <p className="section-label">SKILLS</p>

        <h2>My development toolkit.</h2>

        <p className="skills-intro">
          Technologies and tools I use to build, connect, and improve
          modern web applications.
        </p>

        <div className="skills-grid">

          <div className="skill-card">
            <span className="skill-number">01</span>

            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>JavaScript</span>
              <span>React.js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>

            <h3>Backend</h3>

            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>

            <h3>Database</h3>

            <div className="skill-tags">
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>

            <h3>Programming</h3>

            <div className="skill-tags">
              <span>JavaScript</span>
              <span>C++</span>
              <span>OOP</span>
              <span>DSA</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">05</span>

            <h3>Tools & Workflow</h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Postman</span>
            </div>
          </div>

        </div>

        {/* HackerRank Verification */}

        <div className="skills-verification">

          <span>Practice & Verification</span>

          <a
            href="https://www.hackerrank.com/profile/bhugulparth2004"
            target="_blank"
            rel="noreferrer"
          >
            HackerRank Profile ↗
          </a>

          <p>
            4★ C++ &nbsp;•&nbsp; 3★ SQL
          </p>

        </div>

      </div>
    </section>
  );
}

export default Skills;