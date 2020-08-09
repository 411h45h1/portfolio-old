import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 style={{ color: "black", fontSize: 20 }}>
              Check Out Some of My Projects.
            </h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div
                        className="item-wrap"
                        style={{
                          backgroundColor: "silver",
                          boxShadow: "10px 10px 7px gray",
                          minHeight: 200,
                          borderRadius: 22,
                          padding: 20,
                        }}
                      >
                        <a
                          href={item.repourl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`${item.imgurl}`}
                            className="item-img"
                            alt="portfolio item"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
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
