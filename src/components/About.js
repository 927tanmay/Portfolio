import React, { Component } from "react";
// import Particle from "../components/particle";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns hover01">
            <figure>
              <img
                className="profile-pic"
                src="images/tanmay.jpg"
                style={{ width: "300px" }}
              />
            </figure>
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <span>
                    {/* <a
                      href="https://tanmay-portfolio.herokuapp.com/"
                      style={{ color: "#7a7a7a" }}
                    > */}
                    {resumeData.website}
                    {/* </a> */}
                  </span>
                  <br />
                  <span>{resumeData.Phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
