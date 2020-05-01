import React, { Component } from "react";
import Candidate_Nav from "../components/Candidate_Nav";
import { Card, Button } from "react-bootstrap";
import Hero from "../components/Hero";
export default class Jobsearch extends Component {
  render() {
    return (
      <div>
        {/* <Hero hero="candidate_dashboard_hero"> */}
        <Candidate_Nav />
        
        <form id="form">
          <Card>
            <Card.Header>Kitchen Jobs</Card.Header>
            <Card.Body>
              <Card.Title>Full Time</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text><br/>
              <Button className="btn-primary"
                color="secondary"
                size="lg"
                block >MORE</Button>
            </Card.Body>
          </Card>
          <br />
          <br />
          <Card>
            <Card.Header>Driver jobs</Card.Header>
            <Card.Body>
              <Card.Title>Full Time</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text><br />
              <Button className="bttn"
                color="secondary"
                size="lg"
                block>MORE</Button>
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
              </Card.Text><br />
              <Button variant="primary"
                color="secondary"
                size="lg"
                block>MORE</Button>
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
              </Card.Text><br />
              <Button variant="primary"
                color="secondary"
                size="lg"
                block>MORE</Button>
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
              </Card.Text><br />
              <Button variant="primary"
                color="secondary"
                size="lg"
                block>MORE</Button>
            </Card.Body>
          </Card>
        </form>
        {/* </Hero> */}
      </div>
    );
  }
}
