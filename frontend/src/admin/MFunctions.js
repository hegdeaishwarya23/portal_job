import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowCompany from "./ShowDoctors";
import ShowUser from "./ShowPatients";
import addCompany from "./addDonors";
import Category from "./Category";
import addUser from "./AddUser";

function App() {
  return (
    <Router>
      <div className=''>
        <MainNavbar />

        <Switch>
          <Route exact path={"/main/Home"} component={MainHome} />

          <Route path={"/main/ShowCompany"} component={ShowCompany} />
          <Route path={"/main/ShowUser"} component={ShowUser} />
          <Route path={"/main/category"} component={Category} />
          <Route path={"/main/addCompany"} component={addCompany} />
          <Route path={"/main/addUser"} component={addUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
