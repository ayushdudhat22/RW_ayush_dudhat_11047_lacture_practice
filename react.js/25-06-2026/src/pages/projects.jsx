import React from "react";


const Projects = () => {

    return (

        <div>

            <>
                <main className="flex-shrink-0">
                    {/* Navigation*/}
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                        <div className="container px-5">
                            <a className="navbar-brand" href="index.html">
                                <span className="fw-bolder text-primary">Start Bootstrap</span>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                                    <li className="nav-item">
                                        <a className="nav-link" href="index.html">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="resume.html">
                                            Resume
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="projects.html">
                                            Projects
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Projects Section*/}
                    <section className="py-5">
                        <div className="container px-5 mb-5">
                            <div className="text-center mb-5">
                                <h1 className="display-5 fw-bolder mb-0">
                                    <span className="text-gradient d-inline">Projects</span>
                                </h1>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-11 col-xl-9 col-xxl-8">
                                    {/* Project Card 1*/}
                                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder">Project Name 1</h2>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Eius at enim eum illum aperiam placeat esse? Mollitia
                                                        omnis minima saepe recusandae libero, iste ad asperiores!
                                                        Explicabo commodi quo itaque! Ipsam!
                                                    </p>
                                                </div>
                                                <img
                                                    className="img-fluid"
                                                    src="https://dummyimage.com/300x400/343a40/6c757d"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Project Card 2*/}
                                    <div className="card overflow-hidden shadow rounded-4 border-0">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder">Project Name 2</h2>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Eius at enim eum illum aperiam placeat esse? Mollitia
                                                        omnis minima saepe recusandae libero, iste ad asperiores!
                                                        Explicabo commodi quo itaque! Ipsam!
                                                    </p>
                                                </div>
                                                <img
                                                    className="img-fluid"
                                                    src="https://dummyimage.com/300x400/343a40/6c757d"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Call to action section*/}
                    <section className="py-5 bg-gradient-primary-to-secondary text-white">
                        <div className="container px-5 my-5">
                            <div className="text-center">
                                <h2 className="display-4 fw-bolder mb-4">
                                    Let's build something together
                                </h2>
                                <a
                                    className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                                    href="contact.html"
                                >
                                    Contact me
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
                {/* Footer*/}
                <footer className="bg-white py-4 mt-auto">
                    <div className="container px-5">
                        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div className="col-auto">
                                <div className="small m-0">Copyright © Your Website 2023</div>
                            </div>
                            <div className="col-auto">
                                <a className="small" href="#!">
                                    Privacy
                                </a>
                                <span className="mx-1">·</span>
                                <a className="small" href="#!">
                                    Terms
                                </a>
                                <span className="mx-1">·</span>
                                <a className="small" href="#!">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Bootstrap core JS*/}
                {/* Core theme JS*/}
            </>


        </div>
    )


}

export default Projects