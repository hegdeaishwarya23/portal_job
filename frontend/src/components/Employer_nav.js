import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import "../../src/nav.css";
import { Link } from "react-router-dom";
//  .navbar {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100 %;
//   padding: 0.75rem 2rem;
//   background:  #cfcfcf;
//   z - index: 1;
// }
// .nav - header {
//   display: flex;
//   justify - content: space - between;
// }
// .nav - btn {
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   outline: none;
// }
// .nav - icon {
//   font - size: 1.5rem;
//   color: var(--primaryColor);
//   float: left;
// }
// .nav - links {
//   height: 0;
//   overflow: hidden;
//   transition: var(--mainTransition);
//   list - style - type: none;
// }
// .nav - links a {
//   display: block;
//   text - decoration: none;
//   padding: 1rem 0;
//   color: var(--mainBlack);
//   transition: var(--mainTransition);
//   text - align: center;
//   font - size: 1rem;
//   font - weight: 600;
//   letter - spacing: var(--mainSpacing);
// }
// .nav - links a: hover {
//   color: var(--primaryColor);
// }

// .show - nav {
//   height: 200px;
// }
// @media screen and(min - width: 768px) {
//   .nav - btn {
//     display: none;
//   }
//   .nav - center {
//     max - width: 1170px;
//     margin: 0 auto;
//     display: flex;
//   }
//   .nav - links {
//     height: auto;
//     display: flex;
//     margin - left: 4rem;
//   }
//   .nav - links a {
//     margin: 0 1rem;
//     padding: 0.5rem 0;
//   }
// }
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
              {/* <li>
                <Link to="/Jobpost">POST THE JOB</Link>
              </li> */}
              <li>
                <Link to="/Companydetails">ADD COMPANIES</Link>
              </li>
              {/* <li>
                <Link to="/Manageresume">MANAGE RESUME</Link>
              </li> */}
              <li>
                {/* <a href={`/CompanyDisplay`}>COMPANY DETAILS</a> */}
                <Link to="/CompanyDisplay">COMPANY DETAILS</Link>
              </li>
              <li>
                <Link to="/Pricing">PRICING</Link>
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
