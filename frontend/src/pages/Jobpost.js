// import React, { Component } from "react";
// import Employer_nav from "../components/Employer_nav";
// import axios from "axios";
// export default class Jobpost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       jobTitle: "",
//       jobLocation: "",
//       categories: [],
//       jobtype: "",
//       description: "",
//       category: "",
//     };
//     this.onChange = this.onChange.bind(this);
//     this.handleDropdownChange = this.handleDropdownChange.bind(this);
//   }

//   componentDidMount = async () => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//   }
// }

//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/v1/category",
//         config
//       );
//       this.setState({
//         categories: res.data.data,
//       });
//       console.log(this.state.categories);
//     } catch (err) {
//       console.log("Can't load the items");
//     }
//   };

//   // Input on change
//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }
//   // Dropdown change
//   handleDropdownChange(e) {
//     this.setState({ category: e.target.value });
//   }

//   onSubmit = async (e) => {
//     e.preventDefault();

//     const token = sessionStorage.getItem("token");

//     try {
//       const job = {
//         jobTitle: this.state.jobTitle,
//         jobLocation: this.state.jobLocation,
//         category: this.state.category,
//         jobtype: this.state.jobtype,
//         description: this.state.description,
//         // categories: this.state.categories,

//         // photo: res.data.data,
//       };
//       const body = JSON.stringify(job);
//       console.log(body);
//       const config1 = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       };
//       const result = await axios.post(
//         // `http://localhost:5000/api/v1/companies/${_id}/jobs`,
//         body,
//         config1
//       );
//       console.log(result.data.data);
//       alert(`Job Added`);
//     } catch (err) {
//       // console.log("Can't load the items");
//     }
//   };
//   render() {
//     return (
//       <div>
//         <Employer_nav />
//         <br />
//         <form id="form">
//           <div className="container">
//             <h2>POST THE JOB HERE...</h2>
//           </div>
//           <br />
//           {/* <div className="form-group">
//           <br />
//           <label htmlFor="exampleFormControlInput1">Email address</label>

//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//         </div> */}
//           <br />
//           <div className="form-group">
//             <br />
//             <label htmlFor="exampleFormControlInput1">Job title</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputPassword1"
//               name="jobTitle"
//               placeholder="Job title"
//               value={this.state.jobTitle}
//               onChange={this.onChange}
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <br />
//             <label htmlFor="exampleFormControlInput1">Location</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               name="jobLocation"
//               aria-describedby="emailHelp"
//               placeholder="location"
//               value={this.state.jobLocation}
//               onChange={this.onChange}
//             />
//           </div>

//           {/* <div className="custom-file">
//           <input
//             type="file"
//             className="custom-file-input"
//             id="validatedCustomFile"
//             required
//           />
//         </div> */}

//           {/* </div> */}
//           {/* <label htmlFor="exampleFormControlInput1">job type</label> */}

//           {/* <select className="form-control form-control-lg">
//           <option>Full Time</option>
//           <option>Part Time</option>
//           <option>Internhip</option>
//         </select> */}
//           <br />
//           <label htmlFor="exampleFormControlInput1">category</label>
//           <select
//             id="dropdown "
//             className="btn bg-success"
//             onChange={this.handleDropdownChange}
//           >
//             <option value="no cat">None</option>
//             {this.state.categories.map((category) => (
//               <option key={category._id} value={category._id}>
//                 {category.catname}
//               </option>
//             ))}
//             {/* <option value="N/A">N/A</option>
//                           <option value="1">1</option>
//                           <option value="2">2</option>
//                           <option value="3">3</option>
//                           <option value="4">4</option> */}
//           </select>
//           {/* <select className="custom-select" size={3}> */}
//           {/* <option value={1}>Web Developers</option>
//           <option value={2}>Mobile Developers</option>
//           <option value={3}>Designers &amp; Creatives</option>
//           <option value={4}>Writers</option>
//           <option value={5}>Virtual Assistants</option>
//           <option value={6}>Customer Service Agents</option>
//           <option value={7}>Sales &amp; Marketing Experts</option>
//           <option value={8}>Accountants &amp; Consultants</option> */}
//           {/* </select> */}
//           <br />
//           <div className="form-group">
//             <br />
//             <label htmlFor="exampleFormControlInput1">Job type</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               name="jobtype"
//               aria-describedby="emailHelp"
//               placeholder="job type"
//               value={this.state.jobtype}
//               onChange={this.onChange}
//             />
//           </div>
//           <br />
//           <div class="form-group">
//             <br />
//             <label htmlFor="exampleFormControlInput1">Job Discription</label>

//             <textarea
//               class="form-control"
//               id="exampleFormControlTextarea1"
//               name="description"
//               rows="3"
//               value={this.state.description}
//               onChange={this.onChange}
//             ></textarea>
//           </div>
//           <br />
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//       // </div>
//     );
//   }
// }
