import React from "react";
import project1img from "../../components/images/project1img.jpg";
import "../pages/Project1.css";
import Footer from "../inc/Footer";

function Project1() {
  return (
    <div className="projectbg">
      <div className="row">
        <div className="col-md-12 text-center heading">
          <h1>PROJECT 1 (HEADING)</h1>
          <div className="underline mx-auto"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <img src={project1img} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="container">
            <h2>Project name - AI-Bot</h2>
            <h3 style={{ fontSize: 25 }}>
              Members - Thor, Tony, Steve, Natasha
            </h3>
            <h3 style={{ fontSize: 25 }}>Type - Haedware + Software</h3>
            <h3 style={{ fontSize: 25 }}>Mentor - Thanos</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <h4 style={{ fontSize: 30 }}> Project Description and Timeline</h4>
        <p style={{ fontSize: 20 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
        <p style={{ fontSize: 20 }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <p style={{ fontSize: 20 }}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Project1;
