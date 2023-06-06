import React from "react";

function Courses() {
  return (
    <div>
      <div className="container-fluid px-0 py-5">
        <div className="row mx-0 justify-content-center pt-5">
          <div className="col-lg-6">
            <div className="section-title text-center position-relative mb-4">
              <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                Bizning kurslarimiz
              </h6>
              <h1 className="display-4">
                Kurslarimizning yangi relizlarini tekshiring
              </h1>
            </div>
          </div>
        </div>

        <div className="owl-carousel courses-carousel" id="courses"></div>

        <div className="row justify-content-center bg-image mx-0 mb-5">
          <div className="col-lg-6 py-5">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4">
                Yangi o'quvchiga 30% chegirma
              </h1>
              <form
                action="mailto:beketovgalimjan0@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="form-row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Ismingiz"
                        style={{ padding: "30px 20px" }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Email pochtangiz"
                        style={{ padding: "30px 20px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <select
                        className="custom-select bg-light border-0 px-3"
                        style={{ height: "60px" }}
                        id="course_select"
                      ></select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      style={{ height: "60px" }}
                    >
                      Hoziroq ro'yxatdan otish
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
