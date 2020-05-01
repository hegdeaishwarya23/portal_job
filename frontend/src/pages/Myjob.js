import React, { Component } from "react";
import Candidate_Nav from "../components/Candidate_Nav";
import { Link } from "react-router-dom";
export default class Myjob extends Component {
  render() {
    return (
      <div>
        <Candidate_Nav />

        <div className="myjob">
          <br />
          <div className="sidenav">
            <Link to="">Saved</Link>
            <br />
            <a href="#services">Alert</a>
            <br />
            <a href="#clients">History</a>
          </div>
          <div className="main"></div>
        </div>
      </div>
    );
  }
}
