import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useFirebase } from "../../FirebaseProvider/FirebaseProvider";

function Team() {
  const { getDocuments } = useFirebase();
  const [data, setData] = useState([]);

  const GetData = useCallback(() => {
    getDocuments({
      collectionName: "teachers",
      withDocumentId: true,
      filters: [],
    })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [getDocuments]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    GetData();
  }, [GetData]);

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="section-title text-center position-relative mb-5">
            <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
              O'qituvchilar
            </h6>
            <h1 className="display-4">Bizning professor o'qituvchilar</h1>
          </div>
          <div
            className="owl-carousel team-carousel position-relative"
            style={{ margin: "0 30px" }}
          >
            <Carousel responsive={responsive}>
              {data?.map((el) => (
                <div className="team-item p-2 " style={{ borderRadius: "8px" }}>
                  <img
                    className="img-fluid "
                    style={{ height: "450px" }}
                    src={el?.imgUrl}
                    alt=""
                  />
                  <div
                    className="bg-light text-center p-4"
                    style={{
                      height: "180px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      borderBottomRightRadius: "8px",
                      borderBottomLeftRadius: "8px",
                    }}
                  >
                    <div>
                      <h5 className="mb-3">{el?.fullName}</h5>
                    </div>
                    <div>
                      <div>
                        <p className="mb-2">{el?.position}</p>
                      </div>
                      <div className="d-flex justify-content-center">
                        <a className="mx-1 p-1" href={el?.url?.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="mx-1 p-1" href={el?.url?.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="mx-1 p-1" href={el?.url?.linkedin}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="mx-1 p-1" href={el?.url?.instagram}>
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a className="mx-1 p-1" href={el?.url?.youtube}>
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
