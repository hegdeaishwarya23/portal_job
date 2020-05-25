import React, { Component } from "react";
import Candidate_Nav from "../Candidates/Candidate_Nav";
import Hero from "../components/Hero";
import {Link} from "react-router-dom"
export default class Addresume extends Component {
  render() {
    return (
      <div>
        <Candidate_Nav />

        <form id="form">
          <div className="container">
            <h1>ADD RESUME</h1>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
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
            />
          </div>
         
          
          <div className="form-group">
            <br />
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Location"
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
            ></textarea>
          </div>
          <br />
          <div className="container">
            <h2>HIGHER EDUCATION</h2>
          </div>
          <div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="College Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Qualification"
              />
            </div>
          </div>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Percentage/CGPA"
            />
          </div>
          <br />

          <br />
          <div className="container">
            <h2>EXPERIENCE</h2>
          </div>
          <div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Company Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Job title"
              />
            </div>
          </div>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Experience"
          />
        <br />
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="validatedCustomFile"
              required
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              Upload photo..
            </label>
            <br /> <br />
          </div>
          <div class="btn btn-secondary btn-lg btn-block">
            Submit
          </div>
        </form>
      </div>
    );
  }
}
