import React from "react";

function Testimonial() {
  return (
    <div>
      <div
        className="container-fluid bg-image py-5"
        style={{ margin: "90px 0" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="section-title position-relative mb-4">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Oquvchilar bahosi
                </h6>
                <h1 className="display-4">
                  Oquvchilarimizning bizning universitet kurslari haqida fikri
                </h1>
              </div>
              <p className="m-0">
                Kurslar va o'qitish men oylanimday, online kurslar ayniqsa menga
                yoqadi, vaqtni tejaydi va o'qish sifatini oshiradi, hammaga
                universitetning aynan shu kafedrasida o'qishni maslaxat bergan
                bolardim
              </p>
            </div>
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel">
                <div className="bg-white p-5">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <p>
                    Kurslar va o'qitish men oylanimday, online kurslar ayniqsa
                    menga yoqadi, vaqtni tejaydi va o'qish sifatini oshiradi,
                    hammaga universitetning aynan shu kafedrasida o'qishni
                    maslaxat bergan bolardim
                  </p>
                  <div className="d-flex flex-shrink-0 align-items-center mt-4">
                    <img
                      className="img-fluid mr-4"
                      src="img/testimonial-2.jpg"
                      alt=""
                    />
                    <div>
                      <h5>Beketov G'alimjon</h5>
                      <span>Web dasturchi</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <p>
                    Kurslar va o'qitish men oylanimday, online kurslar ayniqsa
                    menga yoqadi, vaqtni tejaydi va o'qish sifatini oshiradi,
                    hammaga universitetning aynan shu kafedrasida o'qishni
                    maslaxat bergan bolardim
                  </p>
                  <div className="d-flex flex-shrink-0 align-items-center mt-4">
                    <img
                      className="img-fluid mr-4"
                      src="img/testimonial-1.jpg"
                      alt=""
                    />
                    <div>
                      <h5>Beketov G'alimjon</h5>
                      <span>Web dasturchi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
