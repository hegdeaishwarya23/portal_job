import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Emp_signin from "./Login";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      role: "",
      isAuth: false,
      token: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      role: this.props.match.params.role,
    });
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const reg = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };

    const body = JSON.stringify(reg);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        body,
        config
      );

      this.setState({
        isAuth: true,
      });

      if (this.state.role == "employer") {
        this.setState({
          isAuth: true,
          token: res.data.token,
        });
      }

      console.log(this.state.token);
    } catch (error) {
      alert("Error Login!!");
    }
  };
  render() {
    return (
      <Fragment>
        {this.state.isAuth ? (
          this.state.role == "user" ? (
            <Redirect
              token={this.state.token}
              to={{
                pathname: "/",
                state: {
                  token: this.state.token,
                },
              }}
            />
          ) : this.state.role == "employer" ? (
            <Redirect
              token={this.state.token}
              to={{
                pathname: "/",
                state: {
                  token: this.state.token,
                },
              }}
            />
          ) : (
            <Redirect isAuth={this.state.isAuth} to="/main/Home" />
          )
        ) : (
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
                        {/* <input
                        type="text"
                        name="role"
                        className="input-form"
                        autoComplete="off"
                        placeholder="Your Role"
                        required="required"
                        value={this.state.role}
                        onChange={this.handleInputChange}
                      /> */}
                        <button
                          type="submit"
                          className="loginhny-btn btn"
                          value="Register"
                        >
                          Register
                        </button>
                      </form>
                      <p>
                        Already Registered...?{" "}
                        <Link to="/Emp_signin">LOGIN</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Fragment>
    );
  }
}
