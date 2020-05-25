import React, { Component } from "react";
import "./donor.css";

export default class QuickModel extends Component {
  state = {
    companies: {},
    subject: "",
  };

  componentDidMount = (async) => {
    this.setState({ companies: this.props.location.state.comp });
    this.setState({ subject: this.props.location.state.cat });
  };
  render() {
    // console.log(this.state.profession);
    const {
      jobTitle,
      jobLocation,
      jobtype,
      jobdescription,
      email,
      photo,
    } = this.state.companies;
    // console.log);
    return (
      <div>
        <section className="section-bg">
          <div id="portfolio  ">
            <div className="container mt-4  ">
              <div className="page-title text-center">
                <h1 className="text-dark">{jobTitle}</h1>

                <hr className="pg-titl-bdr-btm" />
              </div>

              <div className="" id="" style={{ opacity: 1 }}>
                {/*  */}
                <div className="container ">
                  <div className=" tabletrans ">
                    <div className="well">
                      {/* <div className="row mb-5"></div> */}
                      <div className="card">
                        <div className="container-fliud  ">
                          <div className="wrapper row mb-4">
                            <div className="preview col-md-6 mt-4">
                              <div className="preview-pic tab-content ">
                                <img
                                  src={photo}
                                  alt="img1"
                                  width="100%"
                                  height="100%"
                                />
                              </div>
                            </div>
                            <div className="details col-md-6">
                              {/* <h3 className="product-title mb-5">
                                Doctor Deatail
                              </h3> */}
                              <h3 className="product-title mb-5">{jobTitle}</h3>
                              <i>
                                <h4>{this.state.subject}</h4>
                                <h4><b>LOCATION: </b> {jobLocation}</h4>
                                <h4><b>JOB TYPE:</b>  {jobtype}</h4>
                                <h4><b>SKILLS NEEDED: </b> {jobdescription}</h4>
                                <h4><b>EMAIL:</b>  {email}</h4>

                                {/* <h4>Address: {address}</h4> */}
                              </i>
                              <div className="action ">
                                <br/><br/>
                                <button
                                  className="btn btn-secondary btn-lg btn-block"
                                  type="button"
                                >
                                  APPLY
                                </button>
                                {/* <button
                                  className="like btn btn-default"
                                  type="button"
                                >
                                  <span className="fa fa-heart"></span>
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
