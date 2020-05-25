import React, { Component } from "react";

import axios from "axios";

export default class CompanyDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: {},
      id: "",
    };
  }

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    console.log(id);

    const token = sessionStorage.getItem("token");
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.get(
        // `http://localhost:5000/api/v1/companies/:companyId/jobs`,

        config
      );
      this.setState({
        company: result.data.data,
      });
      console.log(result.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  render() {
    const {
      jobTitle,
      jobLocation,
      categories,
      jobtype,
      description,
      // category:""
      // photo,
    } = this.state.jobs;

    return (
      <div className="container itmtop">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div className="page-wrapper p-t-50 p-b-50">
              <div className="wrapper wrapper--w900 ">
                <div className="card cardH card-6 bg-dark">
                  <div className="card-heading m-4 ">
                    <h2 className="title address3 text-dark">
                      COMPANY DETAILS
                    </h2>
                  </div>
                  <div className="card-body">
                    <form
                      // onSubmit={this.onSubmit}
                      encType="multipart/form-data"
                    >
                      {/* <img src={`${photo}`} className='img1' alt='' /> */}
                      <div className="form-row frow">
                        <div className="name">jobTitle:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="jobTitle"
                            value={jobTitle}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="form-row frow">
                                            <div className="name">jobLocation:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                                                    name="jobLocation"
                                                    value={jobLocation}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div>

                      <div className="form-row frow">
                                            <div className="name">categories</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                                                        name="categories"
                              placeholder=""
                                                        value={categories}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                                            <div className="name">jobtype</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                                                        name="jobtype"
                              placeholder=""
                                                        value={jobtype}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-row frow">
                        <div className="name">description</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="description"
                              placeholder=""
                              value={description}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>

                     
                      <div className="card-footer">
                        <button
                          className="btn btn--radius-2 btn-dark"
                          type="submit"
                          href="/doctor/edit"
                        >
                          {" "}
                          Edit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
