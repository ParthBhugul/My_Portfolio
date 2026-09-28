function Hero() {
  return (
    <section id="home" className="hero">

      {/* Ambient background */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">

        <div className="hero-intro">
          <span>&lt; Hi, I'm /&gt;</span>
        </div>

        {/* Name + Character */}
        <div className="hero-name-wrapper">

          <h1 className="hero-name">
            <span>Parth</span>
            <span>Bhugul</span>
          </h1>

          {/* Character */}
          <div className="hero-character">
            <img
              src="/character.png"
              alt="Developer character"
            />
          </div>

        </div>

        {/* Developer role */}
        <div className="hero-role">
          <span className="role-line"></span>

          <h2>
            Full Stack Developer
          </h2>
        </div>

        <p className="hero-description">
          I build modern web applications with clean code,
          practical logic, and a focus on creating useful
          digital experiences.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn primary-btn"
          >
            View Projects
            <span>→</span>
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Get In Touch
          </a>

        </div>

        {/* Social links */}
        <div className="hero-socials">

          <a
            href="https://github.com/ParthBhugul"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/parth-bhugul-997469388/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://www.hackerrank.com/profile/bhugulparth2004"
            target="_blank"
            rel="noreferrer"
          >
            HackerRank ↗
          </a>

        </div>

      </div>

      {/* Developer code panel */}
      <div className="hero-code-card">

        <div className="code-header">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <pre>
{`const developer = {
  skills: [
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript"
  ],
  mindset: "Build. Improve. Repeat."
};`}
        </pre>

      </div>

      {/* Decorative text */}
      <div className="hero-note">
        <span>Code</span>
        <span>Build</span>
        <span>Repeat</span>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span className="scroll-mouse"></span>
        <small>Scroll Down</small>
      </a>

    </section>
  );
}

export default Hero;