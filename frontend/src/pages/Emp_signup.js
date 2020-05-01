import React, { Component } from "react";
import { Link } from "react-router-dom";
import Emp_signin from "./Emp_signin";
import Axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/Emp_signin");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
  render() {
    return (
      <div>
        <section className="w3l-forms-23">
          <div className="forms23-block-hny">
            <div className="wrapper">
              {/* <h1>Trendz Login Form</h1> */}

              <div className="d-grid forms23-grids">
                <div className="form23">
                  <div className="main-bg">
                    <h6 className="sec-one">REGISTRATION FORM</h6>
                  </div>
                  <div className="bottom-content">
                    <form onSubmit={this.onSubmit}>
                      <input
                        type="text"
                        name="name"
                        required="required"
                        className="input-form"
                        autoComplete="off"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                      <input
                        type="email"
                        name="email"
                        className="input-form"
                        autoComplete="off"
                        placeholder="Your Email"
                        required="required"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />

                      <input
                        type="password"
                        name="password"
                        className="input-form"
                        autoComplete="off"
                        placeholder="Your Password"
                        required="required"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                      <input
                        type="text"
                        name="role"
                        className="input-form"
                        autoComplete="off"
                        placeholder="Your Role"
                        required="required"
                        value={this.state.role}
                        onChange={this.handleInputChange}
                      />
                      <button
                        type="submit"
                        className="loginhny-btn btn"
                        value="Register"
                      >
                        Register
                      </button>
                    </form>
                    <p>
                      Already Registered...? <Link to="/Emp_signin">LOGIN</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //login-section */}
      </div>
    );
  }
}
