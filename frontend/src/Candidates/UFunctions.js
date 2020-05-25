import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Jobsearch from "./Jobsearch";
// import fRegistration from "./Registration";
import Candidate_Nav from "./Candidate_Nav";
import CompanyHome from "./CompanyHome"
import Category from "./Category";
import Doctors from "./Doctors";
import axios from "axios";
import QuickModel from "./QuickModel";
import Addresume from "./Addresume";
import Viewresume from "./Viewresume";



export default class All extends Component {
  state = {
    users: [],
    companies: [],
    category: [],
  };

  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  getCompanies = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/companies`,
        config
      );
      this.setState({
        companies: res.data.data,
       
      });
      console.log(res.data.data)
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  
  render() {
    return (
      <Router>
        <div className=''>
          <Candidate_Nav />
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            <Route
              exact
              path={"/user/Home"}
              render={(props) => (
                <CompanyHome
                  {...props}
                  user={this.state.user}
                  getCompanies={this.getCompanies}
                  // getCategory={this.getCategory}
                  companies={this.state.companies}
                  // category={this.state.category}
                />
              )}
            />
            {/* <Route exact path={"/user/Home"} component={CompanyHome} /> */}
            <Route
              exact
              path={"/user/Category"}
              render={(props) => (
                <Category
                  user={this.state.user}
                  getCompanies={this.getCompanies}
                  getCategory={this.getCategory}
                  companies={this.state.companies}
                  category={this.state.category}
                />
              )}
            />
            <Route path={"/user/companies"} component={Doctors} />
            <Route path={"/user/Showcompany"} component={QuickModel} />
            <Route path={"/user/Addresume" }component={Addresume} />
            <Route path={"/user/Viewresume"} component={Viewresume} />

          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
