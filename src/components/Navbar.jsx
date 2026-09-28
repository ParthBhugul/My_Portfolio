function Navbar() {
  return (
    <nav>
      <div className="navbar-container">

       <a href="#home" className="navbar-logo">
  <span className="logo-mark">
    <span>PB</span>
  </span>
</a>

        <div className="navbar-links">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;