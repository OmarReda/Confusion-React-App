import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  }

  renderComments(dish) {
    if (dish != null) {
      return (
        <div className="comments">
          <h4>Comments</h4>
          <h6>Hello there this is comment 1</h6>
          <h6>-- Omar , Oct 17, 2012</h6>
          <h6>Hello there this is comment 2</h6>
          <h6>-- Keran , Nov 30, 2012</h6>
          <h6>Hello there this is comment 3</h6>
          <h6>-- Ally , Dec 24, 2012</h6>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.Selected)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.Selected)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
