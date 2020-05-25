import React, { Component } from "react";

import axios from "axios";

export default class CompanyDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: {},
      subject: {},
    };
  }

  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const result = await axios.get(
        `http://localhost:5000/api/v1/companies/me`,
        config
      );

      this.setState({
        company: result.data.data,
        subject: result.data.data.subject,
      });
      // console.log(result.data.data.subject);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  render() {
    const {
      name,
      email,
      companyname,
      tagline,
      description,
      website,
      contactnumber,
      address,
      jobTitle,
      jobLocation,
      jobtype,
      jobdescription,
      photo,
    } = this.state.company;
    console.log(this.state.subject.catname)
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
                      <img src={`${photo}`} className='img1' alt='' />
                      <div className="form-row frow">
                        <div className="name">Name:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="name"
                            value={name}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Email:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="email"
                            value={email}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div>

                      <div className="form-row frow">
                        <div className="name">Company Name</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="companyname"
                              placeholder=""
                              value={companyname}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Tagline</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="tagline"
                              placeholder=""
                              value={tagline}
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

                      <div className="form-row frow">
                        <div className="name">Website</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="website"
                              placeholder=""
                              value={website}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">ContactNumber</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="contactnumber"
                              placeholder=""
                              value={contactnumber}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-row frow">
                        <div className="name">Address</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              name="address"
                              placeholder=""
                              value={address}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>

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
                        <div className="name">Job Category</div>
                        <div className="value">
                          <div className="input-group">
                            <input
                              className="input--style-6"
                              type="text"
                              // name="name"
                              placeholder=""
                              value={this.state.subject.catname}
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
                              name="jobdescription"
                              placeholder=""
                              value={jobdescription}
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
