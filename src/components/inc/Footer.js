import React from "react";
import { Link } from "react-router-dom";
import "../../../src/App.css";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Website information-</h6>
            <hr />
            <p>
              Made by Ishan Patni (22B0377) for assignment of web convener of
              ITC.
              <br />
              gmail- ishanpatni123@gmail.com , 22B0377@iitb.ac.in
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/Projects">Projects</Link>
            </div>
            <div>
              <Link to="/Login">Login</Link>
            </div>
            <div>
              <Link to="/Register">Register</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Social Media Handles</h6>
            <hr />
            <div>
              {" "}
              <Link to="https://itc.gymkhana.iitb.ac.in/">ITC website</Link>
            </div>
            <div>
              {" "}
              <Link to="https://www.instagram.com/tech.iitb/?hl=en">
                Instagram
              </Link>
            </div>
            <div>
              {" "}
              <Link to="https://www.youtube.com/@STABiitb">Youtube</Link>
            </div>
            <div>
              {" "}
              <Link to="https://www.linkedin.com/company/itc-iitb/">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
