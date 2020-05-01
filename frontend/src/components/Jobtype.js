import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import Title from "./Title";
import Construction from "../images/construction.jpg";
import Kitchen from "../images/kitchen.jpg";
import Mechanic from "../images/mechanic.jpg";
import Driver from "../images/driver.jpg";
import Labour from "../images/labour.jpg";
import Warehouse from "../images/warehouse.jpg";

export default class Jobtype extends Component {
  render() {
    return (
      <Container>
        <Title title="Jobs You Can Get With A Criminal Record" />
        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src={Construction} alt="Card image cap" />
            <div class="card-body">
              <Link
                to=""
                class="btn btn-secondary btn-lg btn-block"
                color="secondary"
                size="lg"
                block
              >
                Construction Jobs
              </Link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={Kitchen} alt="Card image cap" />
            <div class="card-body">
              <Link
                to=""
                class="btn btn-secondary btn-lg btn-block"
                color="secondary"
                size="lg"
                block
              >
                Kitchen Jobs
              </Link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={Mechanic} alt="Card image cap" />
            <div class="card-body">
              <Link
                to=""
                class="btn btn-secondary btn-lg btn-block"
                color="secondary"
                size="lg"
                block
              >
                Mechanic Jobs
              </Link>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />

        {/* second cardgroup */}

        <div class="card-deck">
          <div class="card">
            <img class="card-img-top" src={Driver} alt="Card image cap" />
            <div class="card-body">
              <Link
                to=""
                class="btn btn-secondary btn-lg btn-block"
                color="secondary"
                size="lg"
                block
              >
                Driver Jobs
              </Link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={Labour} alt="Card image cap" />
            <div class="card-body">
              <Link
                to=""
                class="btn btn-secondary btn-lg btn-block"
                color="secondary"
                size="lg"
                block
              >
                Labour Jobs
              </Link>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={Warehouse} alt="Card image cap" />
            <div class="card-body">
              <Link
                to=""
                class="btn btn-secondary btn-lg btn-block"
                color="secondary"
                size="lg"
                block
              >
                Warehouse Jobs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
