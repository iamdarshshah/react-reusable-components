import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    let selectedValue = event.target.value;
    this.props.clicked(selectedValue);
  };

  render() {
    const { title, text, btnText, id } = this.props;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary" id={id} onClick={this.handleClick}>
            {btnText}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

Cards.PropTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnText: PropTypes.string,
  clicked: PropTypes.func,
  id: PropTypes.string
};

export default Cards;
