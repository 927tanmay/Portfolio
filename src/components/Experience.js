import React, { Component } from "react";
import "../css/experience.css";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="work">
        <div className="row">
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <ul class="timeline">
            <li class="event">
                <div className="text">
                  Frontend Engineering Intern -&nbsp;
                  <span>
                    <a
                      href="https://www.hackerearth.com/"
                      style={{ color: "lightseagreen" }}
                      className="company"
                    >
                      <span>HackerEarth</span>
                    </a>
                  </span>
                </div>
                <div style={{ marginBottom: "20px" }}>Jan 2021 – May 2021</div>
                <div style={{ marginBottom: "15px" }}>
                  - Worked on the recruiting platform at hackerearth to build scalable
                    UI components using ReactJS for platform being used by over 2.5M
                    developers. 
                </div>
                <div style={{ marginBottom: "15px" }}>
                  - Worked on revamping the frontend code editor with added features
                    for babel support and console errors
                </div>
              </li>
              <li class="event">
                <div className="text">
                  Software Development Intern -&nbsp;
                  <span>
                    <a
                      href="https://innovaccer.com/"
                      style={{ color: "lightseagreen" }}
                      className="company"
                    >
                      <span>Innovaccer</span>
                    </a>
                  </span>
                </div>
                <div style={{ marginBottom: "20px" }}>May 2020 – July 2020</div>
                <div style={{ marginBottom: "15px" }}>
                  - Worked with the Innovaccer’s Payer Solution’s team to build
                  products Intake and Worklist, with the aim to automate the
                  prior-auth process in the Healthcare industry and built
                  several accessible and modular UI components using ReactJS and
                  ReduxJS.
                </div>
                <div style={{ marginBottom: "15px" }}>
                  - Identified and resolved minor bugs, performance and
                  scalability related issues.
                </div>
              </li>
              <li class="event">
                <div className="text">
                  Web Development Intern -&nbsp;
                  <span>
                    <a
                      href="https://www.prographer.com/"
                      style={{ color: "lightseagreen" }}
                      className="company"
                    >
                      <span>Prographer</span>
                    </a>
                  </span>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  February 2020 – April 2020
                </div>
                <div style={{ marginBottom: "15px" }}>
                  - Collaborated with UI designers to build the official
                  playstore application for Prographer using ReactJS, Redux and
                  MaterialUI
                </div>
                <div style={{ marginBottom: "15px" }}>
                  - Built stable, maintainable and reusable ReactJS components
                  for internal use, implemented Redux flow in existing codebase
                  and integrated the REST APIs
                </div>
              </li>
              <li class="event">
                <div className="text">
                  Full Stack Developer Intern -&nbsp;
                  <span>
                    <a
                      href="https://trybotics.com/"
                      style={{ color: "lightseagreen" }}
                      className="company"
                    >
                      <span>Trybotics</span>
                    </a>
                  </span>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  October 2019 – December 2019
                </div>
                <div style={{ marginBottom: "15px" }}>
                  - Refactored the code for server side rendering, improving the
                  performance by upto 90%
                </div>
                <div style={{ marginBottom: "15px" }}>
                  - Implemented the REST APIs structure and created
                  documentation formatted in YAML using Swagger.
                </div>
                <div style={{ marginBottom: "15px" }}>
                  - Technologies Used: ReactJS, NodeJS, MongoDB, ReduxJS,
                  MaterialUI, Git, BitBucket
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
