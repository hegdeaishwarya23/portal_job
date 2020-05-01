import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Candidate from "./pages/Candidate";
import Employee from "./pages/Employee";
import Can_signup from "./pages/Can_signup";
import Can_signin from "./pages/Can_signin";
import Emp_signup from "./pages/Emp_signup";
import Emp_signin from "./pages/Emp_signin";
import Viewjob from "./pages/Viewjob";

import Candidate_dashboard from "./pages/Candidate_dashboard";
import Employer_dashboard from "./pages/Employer_dashboard";
import Jobsearch from "./pages/Jobsearch";
import Addresume from "./pages/Addresume";
import Myjob from "./pages/Myjob";
import Myprofile from "./pages/Myprofile";
import Jobpost from "./pages/Jobpost";
import Companydetails from "./pages/Companydetails";
import Pricing from "./pages/Pricing";
import Manageresume from "./pages/Manageresume";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { render } from "react-dom";

// import Companydetails from "./pages/Companydetails";
// import CompanyDisplay from "./components/CompanyDisplay";

// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import injectTapEventPlugin from "react-tap-event-plugin";
// import Footer from './components/Footer'

// injectTapEventPlugin();

function App() {
  //    state = {
  //      data: [],
  //      editIdx: -1,
  //    };

  //    handleRemove = (i) => {
  //      this.setState((state) => ({
  //        data: state.data.filter((row, j) => j !== i),
  //      }));
  //    };

  //    startEditing = (i) => {
  //      this.setState({ editIdx: i });
  //    };

  //    stopEditing = () => {
  //      this.setState({ editIdx: -1 });
  //    };

  //    handleChange = (e, name, i) => {
  //      const { value } = e.target;
  //      this.setState((state) => ({
  //        data: state.data.map((row, j) =>
  //          j === i ? { ...row, [name]: value } : row
  //        ),
  //      }));
  //    };
  // render() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Candidate" component={Candidate} />
        <Route exact path="/Employee" component={Employee} />
        <Route exact path="/Can_signup" component={Can_signup} />
        <Route exact path="/Can_signin" component={Can_signin} />
        <Route exact path="/Emp_signup" component={Emp_signup} />
        <Route exact path="/Emp_signin" component={Emp_signin} />

        <Route
          exact
          path="/Candidate_dashboard"
          component={Candidate_dashboard}
        />
        <Route
          exact
          path="/Employer_dashboard"
          component={Employer_dashboard}
        />
        <Route exact path="/Jobsearch" component={Jobsearch} />
        <Route exact path="/Addresume" component={Addresume} />
        <Route exact path="/Myjob" component={Myjob} />
        <Route exact path="/Myprofile" component={Myprofile} />
        <Route exact path="/Jobpost" component={Jobpost} />
        <Route exact path="/Manageresume" component={Manageresume} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route exact path="/Companydetails" component={Companydetails} />
        <Route exact path="/Viewjob" component={Viewjob} />


        <Route component={Error} />
        {/* 
        <MuiThemeProvider>
          <div className="App">
            <Companydetails
              onSubmit={(submission) =>
                this.setState({
                  data: [...this.state.data, submission],
                })
              }
            />
            <CompanyDisplay
              handleRemove={this.handleRemove}
              startEditing={this.startEditing}
              editIdx={this.state.editIdx}
              stopEditing={this.stopEditing}
              handleChange={this.handleChange}
              data={this.state.data}
              header={[
                {
                  name: "First name",
                  prop: "firstName",
                },
                {
                  name: "Last name",
                  prop: "lastName",
                },
                {
                  name: "Username",
                  prop: "username",
                },
                {
                  name: "Email",
                  prop: "email",
                },
              ]}
            />
          </div>
        </MuiThemeProvider> */}
      </Switch>
      {/* <Footer/> */}
    </>
  );
}
// }
export default App;
