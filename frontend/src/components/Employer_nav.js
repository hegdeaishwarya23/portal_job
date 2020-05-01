import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Employer_nav extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="Felony Friendly Jobs" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/Jobpost">POST THE JOB</Link>
              </li>
              <li>
                <Link to="/Viewjob">VIEW JOB</Link>
              </li>
              <li>
                <Link to="/Manageresume">MANAGE RESUME</Link>
              </li>
              <li>
                <Link to="/Pricing">PRICING</Link>
              </li>
              <li>
                <Link to="/CompanyDisplay">COMPANY DETAILS</Link>
              </li>
              <li>
                <button className="btn-primary">LOGOUT</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
