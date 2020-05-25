import React, { Component } from "react";

import axios from "axios";

export default class CompanyDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addresume: {},
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
        `http://localhost:5000/api/v1/addresume/me`,
        config
      );

      this.setState({
        addresume: result.data.data,
      });
      // console.log(result.data.data.subject);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  render() {
    const {
      fname,
      lname,
      email,
      address,
      contactnumber,
      skills,
      collegename,
      qualification,
      percentage,
      cname,
      jobtitle,
      experience,
      photo,
    } = this.state.addresume;
    return (
      <form id="form" 
      // onSubmit={this.onSubmit} 
      encType="multipart/form-data">
        <div className="container">
          <h1>CANDIDATE DETAILS</h1>
        </div>
        <img src={`${photo}`} className="img1" alt="" />
        {/* <div className="form-row frow">
                        <div className="name">First Name:</div>
                        <div className="value">
                          <input
                            className="input--style-6"
                            type="text"
                            name="fname"
                            value={fname}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div> */}
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="fname"
              value={fname}
            />
          </div>
          <br />
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lname"
              value={lname}
            />
          </div>
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            name="address"
            value={address}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Contact Number"
            name="contactnumber"
            value={contactnumber}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Skills"
            name="skills"
            value={skills}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="College Name"
            name="collegename"
            value={collegename}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Qualification"
            name="qualification"
            value={qualification}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Percentage"
            name="percentage"
            value={percentage}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
            name="cname"
            value={cname}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Job Title"
            name="jobtitle"
            value={jobtitle}
          />
        </div>
        <br />
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Experience"
            name="experience"
            value={experience}
          />
        </div>
        <br />
        <div className="card-footer">
          <button className="btn btn--radius-2 btn-dark" type="submit" href="">
            {" "}
            Edit
          </button>
        </div>
      </form>
    );
  }
}
