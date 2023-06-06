import React from "react";

function Footer() {
  return (
    <div>
      <div
        className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-md-6 mb-5">
              <a href="index.html" className="navbar-brand">
                <h1 className="mt-n2 text-uppercase text-white">
                  <i className="fa fa-book-reader mr-3"></i>atdt.uz
                </h1>
              </a>
              <p className="m-0">
                Toshkent axborot texnologiyalari universiteti "Axborot
                texnologiyalarining dasturiy ta'minoti" (ATDT) orzularingizga
                faqat biz bilan
              </p>
            </div>
            <div className="col-md-6 mb-5">
              <h3 className="text-white mb-4">Royxatdan otish</h3>
              <div className="w-100">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-light"
                    style={{ padding: "30px" }}
                    placeholder="Sizning pochtangiz"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">
                      Royxatdan otish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Aloqaga chiqish</h3>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>Toshkent shahar,
                M.Ulug'bek tumani, Amir Temur shoh ko'chasi, 108
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>+998 71 236 65 07
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>info@atdt.uz
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a className="text-white mr-4" href="/">
                  <i className="fab fa-2x fa-twitter"></i>
                </a>
                <a className="text-white mr-4" href="/">
                  <i className="fab fa-2x fa-facebook-f"></i>
                </a>
                <a className="text-white mr-4" href="/">
                  <i className="fab fa-2x fa-linkedin-in"></i>
                </a>
                <a className="text-white" href="/">
                  <i className="fab fa-2x fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Bizning kurslar</h3>
              <div
                className="d-flex flex-column justify-content-start"
                id="course_footer"
              ></div>
            </div>
            <div className="col-md-4 mb-5">
              <h3 className="text-white mb-4">Tez havolalar</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="/">
                  <i className="fa fa-angle-right mr-2"></i>Havfsizlik
                </a>
                <a className="text-white-50 mb-2" href="/">
                  <i className="fa fa-angle-right mr-2"></i>Shartlar
                </a>
                <a className="text-white-50 mb-2" href="/">
                  <i className="fa fa-angle-right mr-2"></i>Ko'p beriladigan
                  savollar
                </a>
                <a className="text-white-50 mb-2" href="/">
                  <i className="fa fa-angle-right mr-2"></i>Yordam berish
                </a>
                <a className="text-white-50" href="/">
                  <i className="fa fa-angle-right mr-2"></i>Aloqaga chiqish
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white-50 border-top py-4"
        style={{ borderColor: "rgba(256, 256, 256, 0.1) !important" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0">
                Copyright &copy;
                <a className="text-white" href="/">
                  Your Site Name
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">
                Designed by
                <a className="text-white" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="/"
        class="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"
      >
        <i class="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
}

export default Footer;
