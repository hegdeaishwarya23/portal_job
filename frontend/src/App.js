import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./animate.css";
import Home from "./pages/Home";
import Candidate from "./pages/Candidate";
import Employee from "./pages/Employee";
import Can_signup from "./pages/Can_signup";
// import Can_signin from "./pages/Can_signin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Viewjob from "./pages/Viewjob";

import Candidate_dashboard from "./Candidates/Candidate_dashboard";
import Employer_dashboard from "./pages/Employer_dashboard";
import Jobsearch from "./Candidates/Jobsearch";
import Jobcategory from "./pages/Jobcategory";
import Myprofile from "./pages/Myprofile";
import Jobpost from "./pages/Jobpost";
import Companydetails from "./pages/Companydetails";
import Pricing from "./pages/Pricing";
import Manageresume from "./pages/Manageresume";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { render } from "react-dom";

import UFunctions from "./Candidates/UFunctions"

import MainHome from "./admin/MainHome";
import MainNavbar from "./admin/MainNavbar";
import ShowCompany from "./admin/ShowDoctors";
import ShowUser from "./admin/ShowPatients";
import addCompany from "./admin/addDonors";
import Category from "./admin/Category";
import addUser from "./admin/AddUser";
import ShowEmployer from "./admin/showEmployer"
import addEmployer from "./admin/addEmployer"
import CompanyDisplay from "./components/CompanyDisplay";

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Candidate" component={Candidate} />
        <Route exact path="/Employee" component={Employee} />
        {/* <Route exact path="/Can_signup" component={Can_signup} /> */}
        {/* <Route exact path="/Can_signin" component={Can_signin} /> */}
        <Route exact path="/signup/:role" component={Signup} />
        <Route exact path="/login/:type" component={Login} />

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
       
        <Route exact path="/Jobcategory" component={Jobcategory} />
        <Route exact path="/Myprofile" component={Myprofile} />
        <Route exact path="/Jobpost" component={Jobpost} />
        <Route exact path="/Manageresume" component={Manageresume} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route exact path="/Companydetails" component={Companydetails} />
        <Route exact path="/CompanyDisplay" component={CompanyDisplay} />

        <Route exact path="/Viewjob" component={Viewjob} />
        <Route exact path={"/main/Home"} component={MainHome} />
        {/* <Route exact path={"/main/add"} component={Register} /> */}
        {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
        <Route path={"/main/ShowCompany"} component={ShowCompany} />
        <Route path={"/main/ShowUser"} component={ShowUser} />
        <Route path={"/main/category"} component={Category} />
        <Route path={"/main/addCompany"} component={addCompany} />
        <Route path={"/main/addUser"} component={addUser} />
        <Route path={"/main/showEmployer"} component={ShowEmployer} />
        <Route path={"/main/addEmployer"} component={addEmployer} />




        <Route role="user" path={"/user/"} component={UFunctions} />

        <Route component={Error} />
      </Switch>
      {/* <Footer/> */}
    </>
  );
}
// }
export default App;
