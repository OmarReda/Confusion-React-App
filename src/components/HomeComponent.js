import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import BackgroundVideo from "./BackgroundVideo";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle className="CardTitle">{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle
            style={{ fontWeight: 500, fontSize: 16, paddingBottom: 5 }}
          >
            {item.designation}
          </CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

function Home(props) {
  return (
    <div className="layout">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard item={props.dish} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div>
        </div>
      </div>
      <BackgroundVideo />
    </div>
  );
}

export default Home;
