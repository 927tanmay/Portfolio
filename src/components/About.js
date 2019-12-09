import React, { Component } from "react";
import Particle from "../components/particle";

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns hover01">
            <figure>
              <img className="profile-pic" src="images/tanmay.jpg" />
            </figure>
          </div>

          <div className="nine columns main-col">
            <Particle />
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>
                    <a
                      href="https://github.com/927tanmay"
                      style={{ color: "#7a7a7a" }}
                    >
                      {resumeData.website}
                    </a>
                  </span>
                  <br></br>
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
