import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../src/mainNav.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AiOutlineUser } from "react-icons/ai";
export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
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
              <Link to="/Candidate">ABOUT</Link>
            </li>
            <li>
              <Link to="/Employee">CONTACT US</Link>
            </li>
            {/* </ul>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          > */}
            {/* <li class="dropdown">
              <button class="dropbtn">
                LOGIN
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content1">
                <a href="/login/user">CANDIDATE</a><br/>
                <a href="/login/employer">EMPLOYER</a><br/>
                <a href="/login/admin">ADMIN</a><br />

                {/* <a href="#">Link 3</a> */}
            {/* </div>
            </li> */}
            <li className="nav-item dropdown mr-5">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/Login/user">
                  User Login
                </a>
                <a className="dropdown-item" href="/Login/vendor">
                  Admin Login
                </a>
              </div>
            </li>
          </ul>

          {/* {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>xcvxsdcsdc.</DropdownMenu>
                  <DropdownMenu>.dcsdcsdcd..</DropdownMenu>

                </Dropdown> */}
        </div>
      </nav>
    );
  }
}
