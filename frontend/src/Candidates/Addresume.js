import React, { Component } from "react";
import Candidate_Nav from "../Candidates/Candidate_Nav";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Addresume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      address: "",
      contactnumber: "",
      skills: "",
      collegename: "",
      qualification: "",
      percentage: "",
      cname: "",
      jobtitle: "",
      experience: "",
      file: [],
    };
    this.handleInput = this.handleInput.bind(this);
    // this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  //   // Dropdown change
  //   handleDropdownChange(e) {
  //     this.setState({ category: e.target.value });
  //   }

  //fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
    console.log(this.state.file);
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    const token = sessionStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/addresume/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const companyDetails = {
        fname: this.state.fname,
        lname: this.state.lname,
        email: this.state.email,
        address: this.state.address,
        contactnumber: this.state.contactnumber,
        skills: this.state.skills,
        collegename: this.state.collegename,
        contactnumber: this.state.contactnumber,
        qualification: this.state.qualification,
        percentage: this.state.percentage,
        cname: this.state.cname,
        jobtitle: this.state.jobtitle,
        experience: this.state.experience,

        photo: res.data.data,
      };
      const body = JSON.stringify(companyDetails);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      console.log(config1);
      const result = await axios
        .post(`http://localhost:5000/api/v1/addresume`, body, config1)
        .then((res) => {
          if (res.status === 201) {
            this.props.history.push("/Candidate_dashboard");
          }
        });
      // console.log(result.data.data);
      alert(`Resume Added `);
    } catch (err) {
      console.error("err");
    }
  };

  render() {
    return (
      <div>
        <Candidate_Nav />

        <form id="form" onSubmit={this.onSubmit} encType="multipart/form-data">
          <div className="container">
            <h3>ADD RESUME</h3>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="fname"
                value={this.state.fname}
                onChange={this.handleInput}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="lname"
                value={this.state.lname}
                onChange={this.handleInput}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Location"
              name="address"
              value={this.state.address}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <br />
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Contact Number"
              name="contactnumber"
              value={this.state.contactnumber}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <div class="form-group">
              <br />
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Skills"
                name="skills"
                value={this.state.skills}
                onChange={this.handleInput}
              ></textarea>
            </div>
            <br />
            <div className="container">
              <h3>HIGHER EDUCATION</h3>
            </div>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="College Name"
                  name="collegename"
                  value={this.state.collegename}
                  onChange={this.handleInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Qualification"
                  name="qualification"
                  value={this.state.qualification}
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Percentage/CGPA"
              name="percentage"
              value={this.state.percentage}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <br />
          <div className="container">
            <h3>EXPERIENCE</h3>
          </div>
          <div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Company Name"
                name="cname"
                value={this.state.cname}
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Job title"
                name="jobtitle"
                value={this.state.jobtitle}
                onChange={this.handleInput}
              />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Experience"
            name="experience"
            value={this.state.experience}
            onChange={this.handleInput}
          />
          <br />
          <div className="form-row frow">
            <div className="name">UPLOAD LOGO</div>
            <div className="value">
              <div className="input-group js-input-file">
                <input
                  className="input-file"
                  type="file"
                  name="file"
                  id="file"
                  onChange={this.onChangeHandler}
                />
                <label className="label-file" htmlFor="file">
                  Choose file
                </label>
                <span value={this.state.file}>No file chosen</span>
              </div>
              <div className="label--desc">
                Upload Image. Max file size 50 MB
              </div>
            </div>
          </div>{" "}
          <br />
          <br />
          <br />
          <button type="submit" className="btn btn-secondary btn-lg btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
