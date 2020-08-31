import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <a href={item.url}>
                        <div className="item-wrap">
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            // style={{ width: "240px", height: "260px" }}
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5
                                style={{
                                  color: "#fff",
                                }}
                              >
                                {item.name}
                              </h5>
                              <p
                                style={{
                                  color: "#fff",
                                  fontFamily: "sans-serif ",
                                  marginTop: "15px",
                                }}
                              >
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
