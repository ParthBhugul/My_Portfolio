function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">

        <p className="section-label">EXPERIENCE</p>

        <h2>Where I've worked.</h2>

        <div className="experience-list">

          {/* EXPERIENCE 01 */}
          <article className="experience-item">

            <div className="experience-header">
              <div>
                <p className="experience-type">CURRENT ROLE</p>

                <h3>Associate Technical Support</h3>

                <p className="company">
                  Tech Mahindra
                </p>
              </div>

              <span className="experience-date">
                2026 – Present
              </span>
            </div>

            <p className="experience-description">
              Working in technical support, assisting customers with
              technical issues, troubleshooting problems, understanding
              requirements, and providing appropriate resolutions through
              a customer-focused support process.
            </p>

            <div className="experience-skills">
              <span>Technical Support</span>
              <span>Troubleshooting</span>
              <span>Problem Solving</span>
              <span>Customer Support</span>
            </div>

          </article>


          {/* EXPERIENCE 02 */}
          <article className="experience-item">

            <div className="experience-header">
              <div>
                <p className="experience-type">PROFESSIONAL EXPERIENCE</p>

                <h3>Analyst – Customer Operations</h3>

                <p className="company">
                  eClerx Services Pvt. Ltd.
                </p>
              </div>

              <span className="experience-date">
                2025 – 2026
              </span>
            </div>

            <p className="experience-description">
              Worked in customer operations supporting US customers
              through chat-based interactions. Handled customer
              requirements, billing-related queries, service changes,
              payments, and issue resolution while maintaining process
              and quality standards.
            </p>

            <div className="experience-skills">
              <span>Customer Operations</span>
              <span>Problem Solving</span>
              <span>Process Handling</span>
              <span>Communication</span>
            </div>

          </article>


          {/* EXPERIENCE 03 */}
          <article className="experience-item">

            <div className="experience-header">
              <div>
                <p className="experience-type">INTERNSHIP</p>

                <h3>Web Developer Intern</h3>

                <p className="company">
                  KeshavSoft
                </p>
              </div>

              <span className="experience-date">
                Internship
              </span>
            </div>

            <p className="experience-description">
              Worked on web development tasks involving frontend
              interfaces, responsive layouts, form handling, and
              JavaScript-based functionality while developing a
              recruitment-focused web application.
            </p>

            <div className="experience-skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Experience;