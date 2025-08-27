import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <h1><span className="neon">My Portfolio</span></h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2 className="neon">About Me</h2>
        <p>I’m a passionate web developer with a love for modern and creative web design. I specialize in React, JavaScript, and responsive design.</p>
      </section>

      <section id="projects">
        <h2 className="neon">Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A modern landing page built with React.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>A responsive portfolio site with dark mode and neon aesthetics.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="neon">Contact</h2>
        <p>Feel free to reach out via <a href="mailto:you@example.com">email</a> or find me on <a href="https://linkedin.com">LinkedIn</a>.</p>
      </section>

      <footer>
        <p>&copy; 2025 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
