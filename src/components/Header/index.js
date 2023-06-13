import React from "react";

function Header() {
  return (
    <div>
      {/* topbar */}
      <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center text-white">
              <small>
                <i className="fa fa-phone-alt mr-2"></i>+998 90 329 87 03
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2"></i>info@atdt.uz
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-white px-2" href="//">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white px-2" href="//">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white px-2" href="//">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white px-2" href="//">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-white pl-2" href="//">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* toolbal */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <a href="/index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-uppercase text-primary">
              <i className="fa fa-book-reader mr-3"></i>atdt.uz
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto py-0">
              <a href="/index.html" className="nav-item nav-link active">
                Bosh sahifa
              </a>
              <a href="/" className="nav-item nav-link">
                Kafedra haqida
              </a>
              <a href="/" className="nav-item nav-link">
                Fotogaleriya
              </a>
              <a href="/" className="nav-item nav-link">
                Nashrlar
              </a>

              <a href="/" className="nav-item nav-link">
                Aloqalar
              </a>
            </div>
            <a href="/" className="btn btn-primary py-2 px-4 d-none d-lg-block">
              Bizga bog`lanish
            </a>
          </div>
        </nav>
      </div>
      <div
        className="jumbotron jumbotron-fluid position-relative overlay-bottom"
        style={{ marginBottom: "90px" }}
      >
        <div className="container text-center my-5 py-5">
          <h1 className="text-white mt-4 mb-4">
            Toshkent axborot texnologiyalari universiteti
          </h1>
          <h4 className="text-white display-4 mb-5">
            Axborot texnologiyalarining dasturiy ta`minoti kafedrasi
          </h4>
          <div
            className="mx-auto mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kurslar
                </button>
                <div className="dropdown-menu" id="course">
                  {/* <!-- <a className="dropdown-item" href="#">Frontend</a>
                            <a className="dropdown-item" href="#">Backed</a>
                            <a className="dropdown-item" href="#">Mobile</a> --> */}
                </div>
              </div>
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "30px 25px" }}
                placeholder="Kalit so'z"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary px-4 px-lg-5">
                  Qidirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
