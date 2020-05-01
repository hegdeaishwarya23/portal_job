import React from "react";
import Employer_nav from "../components/Employer_nav";

export default function Jobpost() {
  return (
    <div>
      <Employer_nav />
      <br />
      <form id="form">
        <div className="container">
          <h2>POST THE JOB HERE...</h2>
        </div>
        <br />
        <div className="form-group">
          <br />
          <label htmlFor="exampleFormControlInput1">Email address</label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <br />
        <div className="form-group">
          <br />
          <label htmlFor="exampleFormControlInput1">Job title</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Job title"
          />
        </div>
        <br />
        <div className="form-group">
          <br />
          <label htmlFor="exampleFormControlInput1">location</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="location"
          />
        </div>

        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="validatedCustomFile"
            required
          />
        </div>
        <br />
        <label htmlFor="exampleFormControlInput1">job type</label>
        <select className="form-control form-control-lg">
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internhip</option>
        </select>
        <br />
        <label htmlFor="exampleFormControlInput1">category</label>
        <select className="custom-select" size={3}>
          <option value={1}>Web Developers</option>
          <option value={2}>Mobile Developers</option>
          <option value={3}>Designers &amp; Creatives</option>
          <option value={4}>Writers</option>
          <option value={5}>Virtual Assistants</option>
          <option value={6}>Customer Service Agents</option>
          <option value={7}>Sales &amp; Marketing Experts</option>
          <option value={8}>Accountants &amp; Consultants</option>
        </select>
        <br />

        <br />
        <div class="form-group">
          <br />
          <label htmlFor="exampleFormControlInput1">Job Discription</label>

          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
           
          ></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    // </div>
  );
}
