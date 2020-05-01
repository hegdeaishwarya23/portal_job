import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export default class Emp_signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/Companydetails");
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
              {/* <h1>EMPLOYER LOGIN</h1> */}

              <div className="d-grid forms23-grids">
                <div className="form23">
                  <div className="main-bg">
                    <h6 className="sec-one">EMPLOYER LOGIN</h6>
                    {/* <div className="speci-login first-look">
                    <img src="images/user.png" alt className="img-responsive" />
                  </div> */}
                  </div>
                  <div className="bottom-content">
                    <form onSubmit={this.onSubmit}>
                      <input
                        type="email"
                        name="email"
                        className="input-form"
                        placeholder="Your Email"
                        required="required"
                        autoComplete="off"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        className="input-form"
                        placeholder="Your Password"
                        required="required"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                      <button type="submit" className="loginhny-btn btn">
                        Login
                      </button>
                    </form>
                    <p>
                      Not a member yet?{" "}
                      <Link to="/Emp_signup">Register Here</Link>
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
