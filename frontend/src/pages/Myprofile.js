import React, { Component } from "react";
import Candidate_Nav from "../Candidates/Candidate_Nav";
import { Button } from "reactstrap";
export default class Myprofile extends Component {
  render() {
    return (
      <div>
        <Candidate_Nav />
        <div id="form">
          <h2>PERSONAL DETAILS</h2>
          First name:
          <br />
          <br /> Last name:
          <br />
          <br /> Location:
          <br />
          <br /> Resume Content:
          <br />
          <br /> <h2>HIGHER EDUCATION DETAILS</h2>
          <br />
          College Name:
          <br />
          <br />
          Qualification:
          <br />
          <br /> Start/end date:
          <br />
          <br /> <h2>EXPERIENCE</h2>
          <br />
          Job title:
          <br />
          <br /> Start/end date:
          <br />
                <br />
           <div className="btn-update">
            <Button color="secondary" size="lg">
              UPDATE
            </Button>
            </div>
                <div className="btn-delete">
                         <Button color="danger" size="lg">
              DELETE
            </Button>
          </div>
                <br />
                <br />
        </div>
      </div>
    );
  }
}
