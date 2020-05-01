import React from "react";
import Employer_nav from "../components/Employer_nav";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
export default function Employer_dashboard() {
  return (
    <div>
      <Employer_nav />
      <Hero hero="employer_dashboard_hero">
        <section
          className="home-section section-hero overlay bg-image"
          id="home-section"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="mb-5 text-center">
                  <h1 className="text-white font-weight-bold">
                    Welcome To Employers Dashboard
                  </h1>
                  {/* <h3>
                    Put your skills to work or learn a new trade...Discover your
                    new career and rebuild your life..
                  </h3> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Hero>
    </div>
  );
}
