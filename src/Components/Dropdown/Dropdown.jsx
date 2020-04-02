import React, { Component } from "react";
import PropTypes from "prop-types";

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  //On the change event for the select box pass the selected value back to the parent
  handleChange = event => {
    let selectedValue = event.target.value;
    this.props.onSelectChange(selectedValue);
  };

  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map(data => (
      <option key={data.id} value={data.id}>
        {data.name}
      </option>
    ));

    return (
      <select
        name={this.props.name || null}
        className={this.props.className || null}
        onChange={this.handleChange}
      >
        <option>Select Item</option>
        {options}
      </select>
    );
  }
}

Dropdown.propTypes = {
  arrayOfData: PropTypes.array,
  onSelectChange: PropTypes.func,
  handleChange: PropTypes.func
};

export default Dropdown;
