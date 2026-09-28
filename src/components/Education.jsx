function Education() {
  return (
    <section id="education" className="education">
      <div className="section-container">

        <p className="section-label">EDUCATION</p>

        <h2>My academic background.</h2>

        <div className="education-card">

          <div className="education-top">
            <div>
              <p className="education-type">
                BACHELOR'S DEGREE
              </p>

              <h3>
                Bachelor of Engineering – Information Technology
              </h3>

              <p className="institution">
                D. Y. Patil College of Engineering, Akurdi
              </p>
            </div>

            <span className="education-date">
              2021 – 2025
            </span>
          </div>

          <div className="education-details">

            <div className="education-highlight">
              <span>CGPA</span>
              <strong>8.08</strong>
            </div>

            <div className="education-description">
              <p>
                Completed my B.E. in Information Technology with a focus
                on programming, data structures, databases, computer
                networks, software development and other core areas
                of information technology.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;