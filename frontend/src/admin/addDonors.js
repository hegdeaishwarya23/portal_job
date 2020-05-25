
import React, { Component } from "react";
import Employer_nav from "../components/Employer_nav";
import axios from "axios";
import CompanyDisplay from "../components/CompanyDisplay";
import { Link } from "react-router-dom";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
import "./admin.css"
export default class Companydetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      companyname: "",
      tagline: "",
      description: "",
      website: "",
      contactnumber: "",
      address: "",
      jobTitle: "",
      jobLocation: "",
      categories: [],
      jobtype: "",
      jobdescription: "",
      category: "",
      role:"admin"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  componentDidMount = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category",
        config
      );
      this.setState({
        categories: res.data.data,
      });
      console.log(this.state.categories);
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Dropdown change
  handleDropdownChange(e) {
    this.setState({ category: e.target.value });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");

    try {
      const companyDetails = {
        name: this.state.name,
        email: this.state.email,
        companyname: this.state.companyname,
        tagline: this.state.tagline,
        description: this.state.description,
        website: this.state.website,
        contactnumber: this.state.contactnumber,
        address: this.state.address,
        jobTitle: this.state.jobTitle,
        jobLocation: this.state.jobLocation,
        category: this.state.category,
        jobtype: this.state.jobtype,
        jobdescription: this.state.jobdescription,

        // photo: res.data.data,
      };
      const body = JSON.stringify(companyDetails);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      console.log(config1);
      const result = await axios
        .post(`http://localhost:5000/api/v1/companies`, body, config1)
        // .then((res) => {
        //   if (res.status === 201) {
        //     this.props.history.push("/Employer_dashboard");
        //   }
        // });
      // console.log(result.data.data);
      alert(`Company Added `);
    } catch (err) {
      console.error("err");
    }
  };

  render() {
    return (
      <div>
        <br />
        <form id="form" onSubmit={this.onSubmit}>
          <div className="container">
            <h1>ADD COMPANY DETAILS</h1>
          </div>
          <div className="form-group">
            <br />
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ENTER YOUR NAME"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ENTER YOUR EMAILID "
              value={this.state.email}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="companyname"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="COMPANY NAME"
              value={this.state.companyname}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="tagline"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="TAGLINE"
              value={this.state.tagline}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <textarea
              name="description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="DESCRIPTION "
              value={this.state.description}
              onChange={this.handleInput}
            ></textarea>
          </div>

          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="website"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="WEBSITE"
              value={this.state.website}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <input
              type="text"
              name="contactnumber"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="CONTACT NUMBER"
              value={this.state.contactnumber}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <br />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="address"
              placeholder="ADDRESS "
              value={this.state.address}
              onChange={this.handleInput}
            ></textarea>
          </div>

          <br />

          <div className="container">
            // <h2>POST THE JOB HERE...</h2>
            //{" "}
          </div>
          <div className="form-group">
            <br />
            <label htmlFor="exampleFormControlInput1">Job title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="jobTitle"
              placeholder="Job title"
              value={this.state.jobTitle}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div className="form-group">
            <br />
            <label htmlFor="exampleFormControlInput1">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="jobLocation"
              aria-describedby="emailHelp"
              placeholder="location"
              value={this.state.jobLocation}
              onChange={this.handleInput}
            />
          </div>

          <br />
          <label htmlFor="exampleFormControlInput1">category</label>
          <select
            id="dropdown "
            className="btn bg-success"
            onChange={this.handleDropdownChange}
          >
            <option value="no cat">None</option>
            {this.state.categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.catname}
              </option>
            ))}
          </select>

          <br />
          <div className="form-group">
            <br />
            <label htmlFor="exampleFormControlInput1">Job type</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="jobtype"
              aria-describedby="emailHelp"
              placeholder="job type"
              value={this.state.jobtype}
              onChange={this.handleInput}
            />
          </div>
          <br />
          <div class="form-group">
            <br />
            <label htmlFor="exampleFormControlInput1">Job Discription</label>

            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="jobdescription"
              rows="3"
              placeholder="Skills needed"
              value={this.state.jobdescription}
              onChange={this.handleInput}
            ></textarea>
          </div>

          {/* <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="validatedCustomFile"
              required
              name="file"
              id="file"
              onChange={this.onChangeHandler}
            />
            <label className="custom-file-label" htmlFor="validatedCustomFile">
              UPLOAD LOGO..
            </label>
            <br /> */}
          {/* </div> */}
          <br />
          <br />
          <br />

          <button type="submit" className="btn btn-secondary btn-lg btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// import React, { Component, useState, Fragment } from "react";
// import MainNavbar from "./MainNavbar";
// import axios from "axios";
// import { Redirect, Link } from "react-router-dom";

// class showmentor extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       companyname: "",
//       email: "",
//       address: "",
//       contactnumber: "",
//       website: "",
//       role: "admin",
//     };
//     this.onChange = this.onChange.bind(this);
//   }
//   componentDidMount() {}
//   // Input on change
//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   // register
//   onSubmit = async (e) => {
//     e.preventDefault();
//     const token = sessionStorage.getItem("token");
//     const reg = {
//       companyname: this.state.companyname,
//       email: this.state.email,
//       address: this.state.address,
//       contactnumber: this.state.contactnumber,
//       website: this.state.website,
//       role: this.state.role,
//     };

//     const body = JSON.stringify(reg);
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       await axios.post(`http://localhost:5000/api/v1/companies`, body, config);
//     } catch (error) {
//       alert("Error Login!!");
//     }
//   };
//   render() {
//     console.log(this.state.role);
//     return (
//       <Fragment>
//         <MainNavbar />
//         <div className="container ">
//           <div className="container mt-5  ">
//             <div className=" mt-5 pt-5">
//               {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
//               <div className="jumbotron" id="login-second">
//                 <div className="">
//                   <div className="wrapper wrapper--w900">
//                     <div className="card cardH card-6 bg-dark">
//                       <div className="card-heading">
//                         <h2 className="title text-primary ">Add Mentors</h2>
//                       </div>
//                       <div className="card-body  text-light">
//                         <form onSubmit={this.onSubmit}>
//                           <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                               <span
//                                 className="input-group-text"
//                                 // style={{ background: social }}
//                               >
//                                 <i className="fa fa-user"></i>
//                               </span>
//                             </div>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="companyname"
//                               placeholder="Company Name"
//                               value={this.state.companyname}
//                               onChange={this.onChange}
//                             />
//                           </div>
//                           {/* <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                               <span
//                                 className="input-group-text"
//                                 // style={{ background: social }}
//                               >
//                                 <i className="fa fa-user"></i>
//                               </span>
//                             </div>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="address"
//                               placeholder="address"
//                               value={this.state.address}
//                               onChange={this.onChange}
//                             />
//                           </div> */}
//                           <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                               <span
//                                 className="input-group-text"
//                                 // style={{ background: social }}
//                               >
//                                 <i className="fa fa-user"></i>
//                               </span>
//                             </div>
//                             <input
//                               type="email"
//                               className="form-control"
//                               name="email"
//                               placeholder="Email"
//                               value={this.state.email}
//                               onChange={this.onChange}
//                             />
//                           </div>
//                           <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                               <span
//                                 className="input-group-text"
//                                 // style={{ background: social }}
//                               >
//                                 <i className="fa fa-key"></i>
//                               </span>
//                             </div>
//                             <input
//                               type="text"
//                               id="address"
//                               name="address"
//                               className="form-control"
//                               placeholder="address"
//                               value={this.state.address}
//                               onChange={this.onChange}
//                             />
//                           </div>
//                           <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                               <span
//                                 className="input-group-text"
//                                 // style={{ background: social }}
//                               >
//                                 <i className="fa fa-key"></i>
//                               </span>
//                             </div>
//                             <input
//                               type="text"
//                               id="contactnumber"
//                               name="contactnumber"
//                               className="form-control"
//                               placeholder="Contact Number"
//                               value={this.state.contactnumber}
//                               onChange={this.onChange}
//                             />
//                           </div>

//                           <div className="input-group form-group">
//                             <div className="input-group-prepend">
//                               <span
//                                 className="input-group-text"
//                                 // style={{ background: social }}
//                               >
//                                 <i className="fa fa-key"></i>
//                               </span>
//                             </div>
//                             <input
//                               type="text"
//                               id="website"
//                               name="website"
//                               className="form-control"
//                               placeholder="Website"
//                               value={this.state.website}
//                               onChange={this.onChange}
//                             />
//                           </div>

//                           <div className="form-group">
//                             <button
//                               type="submit"
//                               value="Login"
//                               name="submit"
//                               className="btn btn-dark float-right login_btn btn-block mb-1"
//                               // style={{
//                               //   backgroundColor: social,
//                               // }}
//                             >
//                               Add
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fragment>
//     );
//   }
// }
// export default showmentor;
