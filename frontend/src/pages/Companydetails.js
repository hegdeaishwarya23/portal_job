import React, { Component } from "react";
import Employer_nav from "../components/Employer_nav";
import axios from "axios";
import CompanyDisplay from "../components/CompanyDisplay";
import {Link} from "react-router-dom"
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";

export default class Companydetails extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      companyname: "",
      tagline: "",
      description: "",
      website: "",
      contactnumber: "",
      address: "",
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    fetch("/api/v1/companies", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer ",
      }
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/Employer_dashboard");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("could not create the compant, please try again");
      });
  };

  render() {
    return (
      <div>
        <br />
        <form id="form" onSubmit={this.onSubmit}>
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
          <div class="form-group">
            <br />
            <textarea
              name="description"
              class="form-control"
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
              type="number"
              name="contactnumber"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="CONTACT NUMBER"
              value={this.state.contactnumber}
              onChange={this.handleInput}
            />
          </div>
          <div class="form-group">
            <br />
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="address"
              placeholder="ADDRESS "
              value={this.state.address}
              onChange={this.handleInput}
            ></textarea>
          </div>

          <br />
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="validatedCustomFile"
              required
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              UPLOAD LOGO..
            </label>
            <br />
          </div>
          <br />
          <br />
          <br />
          <Link to="/Employer_dashboard">
          <button type="submit" class="btn btn-secondary btn-lg btn-block">
            Submit
          </button>
          </Link>
        </form>
      </div>
    );
  }
}
