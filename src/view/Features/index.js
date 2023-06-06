import React from "react";

function Features() {
  return (
    <div>
      <div className="container-fluid bg-image" style={{ margin: "90px 0px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 my-5 pt-5 pb-lg-5">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Nimaga aynan bizni tanlashingiz kerak?
                </h6>
                <h1 className="display-4">
                  Dasturlashni nimaga biz bilan o'rganishni boshlashingiz kerak?
                </h1>
              </div>
              <p className="mb-4 pb-2">
                Toshkent axborot texnologiyalar universiteti "Axborot
                texnologiyalarining dasturiy ta'minoti" (ATDT) kafedrasi bu
                online darslarni qollab quvvatlaydi va sizning samarali bilim
                olishingizga, sifatli bilim olishingizni ta'minlaydi
              </p>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-primary mr-4">
                  <i className="fa fa-2x fa-graduation-cap text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Malakali mutaxassislar</h4>
                  <p>
                    Xar bir sohada o'zining ustasi bolgan malakali
                    oqituvchilardan dars olishingiz mumkun
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div className="btn-icon bg-secondary mr-4">
                  <i className="fa fa-2x fa-certificate text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Xalqaro sertifikat</h4>
                  <p>
                    Kurs yakunida sizga xalqaro sertifikatlar bilan ta'minlanadi
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="btn-icon bg-warning mr-4">
                  <i className="fa fa-2x fa-book-reader text-white"></i>
                </div>
                <div className="mt-n1">
                  <h4>Online darslar</h4>
                  <p className="m-0">
                    Online darslar sizga har qanday sharoitda va kunning qanday
                    vaqti bo'lishidan qattiy nazar sizga as qotishi mumkun, va
                    vazifalarni o'z vaqtida ishlashingizga, samarali
                    o'qishingizga yordam beradi
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
