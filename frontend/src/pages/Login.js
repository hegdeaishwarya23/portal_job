import React, { Component,Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
export default class Emp_signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "",
      isAuth: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
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

    const login = {
      email: this.state.email,
      password: this.state.password,
    };

    const body = JSON.stringify(login);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //console.log(body)

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        body,
        config
      );
      console.log(res.data.token);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("isAuth", true);
      console.log(sessionStorage);
      this.setState({
        isAuth: true,
      });
    } catch (error) {
      alert("Error Login!!");
    }
  };

 
  render() {
    const type = this.state.type;
    // console.log(type);

    let signup

    signup = <a href={`/signup/${type}`}>Sign Up</a>;

    console.log(type);
    return (
      <Fragment>
        {this.state.isAuth ? (
          type == "user" ? (
            <Redirect isAuth={this.state.isAuth} to='/user/Home' />
          ) : type == "employer" ? (
            <Redirect isAuth={this.state.isAuth} to='/Employer_dashboard' />
            ) : type == "admin" ? (
              <Redirect isAuth={this.state.isAuth} to='/main/Home' />
            ): (
                <Redirect isAuth={this.state.isAuth} to='/' />
              )
        ) : (
        <section className="w3l-forms-23">
          <div className="forms23-block-hny">
            <div className="wrapper">
              {/* <h1>EMPLOYER LOGIN</h1> */}

              <div className="d-grid forms23-grids">
                <div className="form23">
                  <div className="main-bg">
                    <h6 className="sec-one">LOGIN</h6>
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
                      {/* <Link to="/Emp_signup">Register Here</Link> */}
                      {signup}
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
