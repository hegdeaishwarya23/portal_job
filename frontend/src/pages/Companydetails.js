import React, { Component } from "react";
import Employer_nav from "../components/Employer_nav";
import axios from "axios";
import CompanyDisplay from "../components/CompanyDisplay";
import { Link } from "react-router-dom";

export default class Companydetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      companyname: "",
      tagline: "",
      description: "",
      website: "",
      contactnumber: "",
      address: "",
      jobTitle: "",
      jobLocation: "",
      categories: [],
      jobtype: "",
      jobdescription: "",
      category: "",
      file: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category",
        config
      );
      this.setState({
        categories: res.data.data,
      });
      console.log(this.state.categories);
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Dropdown change
  handleDropdownChange(e) {
    this.setState({ category: e.target.value });
  }

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
        `http://localhost:5000/api/v1/companies/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const companyDetails = {
        name: this.state.name,
        email: this.state.email,
        companyname: this.state.companyname,
        tagline: this.state.tagline,
        description: this.state.description,
        website: this.state.website,
        contactnumber: this.state.contactnumber,
        address: this.state.address,
        jobTitle: this.state.jobTitle,
        jobLocation: this.state.jobLocation,
        subject: this.state.category,
        jobtype: this.state.jobtype,
        jobdescription: this.state.jobdescription,

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
        .post(`http://localhost:5000/api/v1/companies`, body, config1)
        .then((res) => {
          if (res.status === 201) {
            this.props.history.push("/Employer_dashboard");
          }
        });
      // console.log(result.data.data);
      alert(`Company Added `);
    } catch (err) {
      console.error("err");
    }
  };

  render() {
    return (
      <div>
        <br />
        <form id="form" onSubmit={this.onSubmit} encType="multipart/form-data">
          <div className="container">
            <h1>ADD COMPANY DETAILS</h1>
          </div>
          <div className="form-group">
            <br />
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ENTER YOUR NAME"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ENTER YOUR EMAILID "
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="companyname"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="COMPANY NAME"
              value={this.state.companyname}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="tagline"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="TAGLINE"
              value={this.state.tagline}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <textarea
              name="description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="DESCRIPTION "
              value={this.state.description}
              onChange={this.handleInput}
            ></textarea>
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="website"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="WEBSITE"
              value={this.state.website}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="contactnumber"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="CONTACT NUMBER"
              value={this.state.contactnumber}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <br />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="address"
              placeholder="ADDRESS "
              value={this.state.address}
              onChange={this.handleInput}
            ></textarea>
          </div>
          <br />
          <div className="container">
            <h2>POST THE JOB HERE...</h2>{" "}
          </div>
          <div className="form-group">
            <br />
            {/* <label htmlFor="exampleFormControlInput1">Job title</label> */}
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="jobTitle"
              placeholder="Job title"
              value={this.state.jobTitle}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            {/* <label htmlFor="exampleFormControlInput1">Location</label> */}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="jobLocation"
              aria-describedby="emailHelp"
              placeholder="location"
              value={this.state.jobLocation}
              onChange={this.handleInput}
            />
          </div>
          <br />
          {/* <label htmlFor="exampleFormControlInput1">subject</label> */}
          <select
            id="dropdown "
            className="btn btn- btn-block"
            onChange={this.handleDropdownChange}
          >
            <option value="no cat">SELECT CATEGORY</option>
            {this.state.categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.catname}
              </option>
            ))}
          </select>
          <br />
          <div className="form-group">
            <br />
            {/* <label htmlFor="exampleFormControlInput1">Job type</label> */}
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="jobtype"
              aria-describedby="emailHelp"
              placeholder="job type"
              value={this.state.jobtype}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div class="form-group">
            <br />
            {/* <label htmlFor="exampleFormControlInput1">Job Discription</label> */}

            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="jobdescription"
              rows="3"
              placeholder="Skills needed"
              value={this.state.jobdescription}
              onChange={this.handleInput}
            ></textarea>
          </div>
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
