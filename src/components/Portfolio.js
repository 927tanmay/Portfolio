import React, { Component } from "react";
import Tilt from "react-tilt";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div className="columns portfolio-item">
                      <Tilt
                        className="Tilt br2 shadow-2"
                        options={{ max: 25 }}
                        style={{ height: 220, width: 220 }}
                      >
                        <a href={item.url}>
                          <div className="item-wrap">
                            {/* <img src={`${item.imgurl}`} className="item-img" /> */}
                            <div className="Tilt-inner">
                              <img
                                src={`${item.imgurl}`}
                                className="item-img"
                              ></img>
                            </div>

                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Tilt>
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
