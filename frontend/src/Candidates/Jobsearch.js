import React, { Component } from "react";
import Candidate_Nav from "./Candidate_Nav";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./donor.css"

export default class Jobsearch extends Component {
  state = {
    comp: [],
    subject: "",
  };

  componentDidMount = (async) => {
    this.setState({
      comp: this.props.company,
      subject: this.props.subject,
    });
  };
  render() {
    const { _id, companyname, jobtype, description,photo } = this.state.comp;

    // console.log(this.props);
    return (
      <div>
        {/* <Hero hero="candidate_dashboard_hero"> */}
        <Candidate_Nav />
        {/* <div className="card" key={_id}>
          <div className="card-header">{companyname}</div>
          <div className="card-body">
    <h5 className="card-title">{jobtype}</h5>
            <p className="card-text">
             {description}
            </p>
            <Link class="btn btn-secondary btn-sm btn-block" color="secondary" size="lg" block to={{
              pathname: "/user/Showcompany",
              state: {
                comp: this.state.comp,
                cat: this.state.category,
              },
            }}>
              MORE
              </Link>
          </div>
         
        </div>
        <br /> <br />
        ; */}
        <div
          className="col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated"
          key={_id}
        >
          <div className="product-top">
            <img src={`${photo}`} className='img1' alt='' />
            <div className="product-bottom text-center">
              <h3>{companyname}</h3>
              {/* <h4>{this.state.subject}</h4>

              <h4>{jobtype}</h4>
              <h4>{description}</h4> */}
              <Link
                type="button"
                className="btn btn-secondary"
                // title="Quick Shop"
                data-toggle="modal"
                data-target="#quickModel"
                to={{
                  pathname: "/user/ShowCompany",
                  state: {
                    comp: this.state.comp,
                    cat: this.state.subject,
                  },
                }}
              >
               VIEW JOB
              </Link>
            </div>
            {/* <div className="overlay">
              <Link
                type="button"
                className="btn btn-secondary"
                title="Quick Shop"
                to={{
                  pathname: "/user/ShowCompany",
                  state: {
                    comp: this.state.comp,
                    cat: this.state.subject,
                  },
                }}
              >
                <i className="fa fa-eye"></i>
              </Link> */}

              {/* <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
                data-toggle=""
                data-target=""
              >
                <i className="fa fa-shopping-cart"></i>
              </button> */}
            {/* </div> */}
          </div>
          <div className="product-bottom text-center"></div>
        </div>
        {/* <form id="form"> 
        {/* <div key={_id}>
          <Card >
            <Card.Header>{this.state.category}</Card.Header>
            <Card.Body>
              <Card.Title>{companyname}</Card.Title>
                <Card.Header>{jobtype}</Card.Header>
              <Card.Text>{description}</Card.Text>
              <br />
              <Link className="btn-primary" color="secondary" size="lg" block to={{
                pathname: "/user/Showcompany",
                state: {
                  comp: this.state.comp,
                  cat: this.state.category,
                },
              }}>
                MORE
              </Link>
            </Card.Body>
          </Card>
          <br />
          </div> */}
        {/* <br />
          <Card>
            <Card.Header>Driver jobs</Card.Header>
            <Card.Body>
              <Card.Title>Full Time</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <br />
              <Button className="bttn" color="secondary" size="lg" block>
                MORE
              </Button>
            </Card.Body>
          </Card>
          <br />
          <br />
          <Card>
            <Card.Header>Mechanic jobs</Card.Header>
            <Card.Body>
              <Card.Title>Full Time</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <br />
              <Button variant="primary" color="secondary" size="lg" block>
                MORE
              </Button>
            </Card.Body>
          </Card>
          <br />
          <br />
          <Card>
            <Card.Header>Warehouse jobs</Card.Header>
            <Card.Body>
              <Card.Title>Full Time</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <br />
              <Button variant="primary" color="secondary" size="lg" block>
                MORE
              </Button>
            </Card.Body>
          </Card>
          <br />
          <br />
          <Card>
            <Card.Header>Construction jobs</Card.Header>
            <Card.Body>
              <Card.Title>Full Time</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <br />
              <Button variant="primary" color="secondary" size="lg" block>
                MORE
              </Button>
            </Card.Body>
          </Card> */}
        {/* </form> */}
        {/* </Hero> */}
      </div>
    );
  }
}
