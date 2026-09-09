import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="home" className="bg-light">
        <div className="container min-vh-100 d-flex align-items-center">
          <div className="row align-items-center w-100">
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <p className="text-primary fw-bold fs-5">HELLO, I'M</p>
              <h1 className="display-2 fw-bold">Web Developer</h1>
              <h2 className="text-secondary mb-4">React JS Developer</h2>
              <p className="lead text-secondary">I create modern, responsive and user-friendly websites using React JS, JavaScript and Bootstrap.</p>
              <div className="mt-4">
                <a href="#projects" className="btn btn-primary btn-lg me-2">View Projects</a>
                <a href="#contact" className="btn btn-outline-primary btn-lg">Contact Me</a>
              </div>
            </div>

            <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" alt="Profile" className="img-fluid rounded-circle shadow"
                style={{ width: "350px", height: "350px", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-primary fw-bold">GET TO KNOW ME</p>
            <h2 className="display-5 fw-bold">About <span className="text-primary">Me</span></h2>
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5 text-center">
                  <h1 className="display-3 fw-bold text-primary">01</h1>
                  <h3 className="fw-bold">Creative Developer</h3>
                  <p className="text-secondary">I love creating modern and attractive websites with clean design.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <h3 className="fw-bold mb-4">I build modern & responsive websites.</h3>
              <p className="text-secondary">I am passionate about web development and enjoy converting ideas into beautiful and interactive websites.</p>
              <p className="text-secondary">My main technologies are React JS,JavaScript, HTML, CSS and Bootstrap.</p>
              <a href="#contact" className="btn btn-primary mt-3">Let's Talk</a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-5 skill-card bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-primary fw-bold">MY EXPERTISE</p>
            <h2 className="display-5 fw-bold"> My <span className="text-primary">Skills</span></h2>
          </div>

          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="display-5 fw-bold text-danger">HTML</div>
                  <h5 className="mt-3">HTML5</h5>
                  <div className="progress mt-3">
                    <div className="progress-bar bg-danger" style={{ width: "90%" }}>90%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="display-5 fw-bold text-primary">CSS</div>
                  <h5 className="mt-3">CSS3</h5>
                  <div className="progress mt-3">
                    <div className="progress-bar" style={{ width: "85%" }}>85%</div></div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="display-5 fw-bold text-warning">JS</div>
                  <h5 className="mt-3">JavaScript</h5>
                  <div className="progress mt-3">
                    <div className="progress-bar bg-warning" style={{ width: "80%" }}>80%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="display-5 fw-bold text-info">⚛</div>
                  <h5 className="mt-3">React JS</h5>
                  <div className="progress mt-3">
                    <div className="progress-bar bg-info" style={{ width: "85%" }}>85%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="display-5 fw-bold text-primary">B</div>
                  <h5 className="mt-3">Bootstrap</h5>
                  <div className="progress mt-3">
                    <div className="progress-bar" style={{ width: "90%" }}>90%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow text-center">
                <div className="card-body p-4">
                  <div className="display-5 fw-bold">Git</div>
                  <h5 className="mt-3">GitHub</h5>
                  <div className="progress mt-3">
                    <div className="progress-bar bg-dark" style={{ width: "75%" }}>75%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-5 project-card">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-primary fw-bold">MY RECENT WORK</p>
            <h2 className="display-5 fw-bold">My<span className="text-primary">Projects</span></h2>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow border-0">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="Portfolio" />
                <div className="card-body">
                  <span className="badge text-bg-primary">React JS</span>
                  <h4 className="card-title mt-3">Personal Portfolio</h4>
                  <p className="card-text text-secondary">Responsive personal portfolio website created using React JS and Bootstrap.</p>
                  <a href="#contact" className="btn btn-outline-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow border-0">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="Ecommerce" />
                <div className="card-body">
                  <span className="badge text-bg-success">React JS</span>
                  <h4 className="card-title mt-3">E-Commerce Website</h4>
                  <p className="card-text text-secondary">Modern e-commerce website with product cards and responsive layout.</p>
                  <a href="#contact" className="btn btn-outline-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow border-0">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="Dashboard" />
                <div className="card-body">
                  <span className="badge text-bg-warning">JavaScript</span>
                  <h4 className="card-title mt-3">Dashboard UI</h4>
                  <p className="card-text text-secondary">Clean and responsive dashboard interface with modern UI components.</p>
                  <a href="#contact" className="btn btn-outline-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-primary fw-bold">GET IN TOUCH</p>
            <h2 className="display-5 fw-bold">Contact <span className="text-primary">Me</span></h2>
          </div>

          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <h3 className="fw-bold">Let's work together.</h3>
              <p className="text-secondary mt-3">Have a project or idea? Feel free to contact me. I would love to hear from you.</p>
              <div className="mt-4">
                <p><strong>Email:</strong><br />ddk5462@gmail.com</p>
                <p><strong>Phone:</strong><br />+91 65789 87575</p>
                <p><strong>Location:</strong><br />Gujarat, India</p>
              </div>
            </div>

            <div className="col-12 col-lg-7">
              <form>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>

                  <div className="col-12 col-md-6">
                    <input type="email" className="form-control" placeholder="Your Email"/>
                  </div>

                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Subject"/>
                  </div>

                  <div className="col-12">
                    <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start">
              <h5 className="fw-bold">My Portfolio</h5>
              <p className="text-secondary mb-0">© 2026 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;