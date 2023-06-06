import React from "react";

function About() {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="section-title position-relative mb-4">
              <h1 className="display-6">ATDT kafedrasi haqida qisqacha...</h1>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-7 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  src="img/aboutATDT.jpg"
                  alt="img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <p>
                Axborot texnologiyalarining dasturiy ta’minoti (ATDT) kafedrasi
                o‘z faoliyatini 2005 yil avgust oyida Vazirlar mahkamasining
                qarori va TATU rektorining shu yilning 17-avgustidagi 147/01
                buyrug‘iga asosan ish faoliyatini boshladi.
              </p>
              <p>
                2005-2010 yillarda kafedraga t.f.d, akademik, M.M.Kamilov,
                2010-2014 yillarda t.f.d. A.X.Nishanov va f.-m.f.n.
                A.T.Rahmonov, 2014-2016 yillarda t.f.d. B.B.Akbaraliev,
                2016-2017 yillarda t.f.d. Z.B.Mingliqulov, 2017-2021 yillarda
                t.f.d. O.J.Babomuradovlar mudirlik qildilar. 2022 yilning yanvar
                oyidan boshlab kafedraga t.f.d., prof. B.B.Moʻminov mudirlik
                qilib kelmoqda.
              </p>
              <p>
                Kafedra faoliyatining asosiy maqsadi axborot texnologiyalarining
                dasturiy ta’minotini ishlab chiqish borasida yetuk bakalavr
                hamda magistrlar tayyorlash, o‘quv-uslubiy, ilmiy-tadqiqot,
                ma’naviy-tarbiyaviy ishlarni olib borishdan iborat.
              </p>
              <p>
                Ayni vaqtda kafedra “Dasturiy injiniring” fakulteti tarkibida
                faoliyat ko‘rsatmoqda.
              </p>
            </div>
          </div>

          <div className="row" align="center">
            <div className="row pt-3 mx-0">
              <div className="col-3 px-0">
                <div className="bg-success text-center p-4">
                  <h1 className="text-white" data-toggle="counter-up">
                    24
                  </h1>
                  <h6 className="text-uppercase text-white">
                    O'qituvchilar<span className="d-block">soni</span>
                  </h6>
                </div>
              </div>
              <div className="col-3 px-0">
                <div className="bg-primary text-center p-4">
                  <h1 className="text-white" data-toggle="counter-up">
                    12
                  </h1>
                  <h6 className="text-uppercase text-white">
                    O'qitiladigan<span className="d-block">fanlar</span>
                  </h6>
                </div>
              </div>
              <div className="col-3 px-0">
                <div className="bg-secondary text-center p-4">
                  <h1 className="text-white" data-toggle="counter-up">
                    160
                  </h1>
                  <h6 className="text-uppercase text-white">
                    Bitiruvchilar<span className="d-block">soni</span>
                  </h6>
                </div>
              </div>
              <div className="col-3 px-0">
                <div className="bg-warning text-center p-4">
                  <h1 className="text-white" data-toggle="counter-up">
                    10
                  </h1>
                  <h6 className="text-uppercase text-white">
                    Iqtidorli<span className="d-block">talabalar</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
