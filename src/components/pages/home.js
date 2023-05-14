import React from "react";
import "../../../src/App.css";
import HeroSection from "../HeroSection";
import Footer from "../inc/Footer";

function Home() {
  return (
    <div>
      <HeroSection />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="firstheading">WHAT IS ITSP</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
              <h4 className="knowmore">
                To know more about the body that conducts ITSP, click here:
              </h4>
              <div>
                <a href="https://itc.gymkhana.iitb.ac.in/">
                  <button className="btn btn-warning shadow">KNOW MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading" style={{ fontSize: 40 }}>
                VISION, MISSION AND GOALS
              </h3>
              <div className="underline mx-auto"></div>
              <div className="row">
                <div className="col-md-4 text-center">
                  <h6 className="h6font">
                    <span style={{ color: "white" }}></span>Vision
                  </h6>
                  <p>
                    {" "}
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <h6 className="h6font">Mission</h6>
                  <p>
                    {" "}
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <h6 className="h6font">Goal</h6>
                  <p>
                    {" "}
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
