function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">

        <p className="section-label">ABOUT ME</p>

        <h2>Turning ideas into practical applications.</h2>

        <div className="about-content">

          <div className="about-main">
            <p>
              I'm Parth Bhugul, a B.E. Information Technology graduate
              focused on software development and web application building.
            </p>

            <p>
              I primarily work with JavaScript and the MERN stack, using
              React, Node.js, Express.js and MongoDB to build modern web
              applications. I enjoy working on application logic, APIs,
              databases and user interfaces.
            </p>

            <p>
              I'm currently strengthening my development fundamentals through
              real-world projects, problem solving and continuous learning.
              My goal is to contribute to a development team where I can
              build useful products and grow as a software engineer.
            </p>
          </div>

          <div className="about-highlight">
            <div>
              <span>01</span>
              <p>Build</p>
            </div>

            <div>
              <span>02</span>
              <p>Learn</p>
            </div>

            <div>
              <span>03</span>
              <p>Improve</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;