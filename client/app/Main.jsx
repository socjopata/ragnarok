import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Main extends Component {
  static propTypes = {
    testTextPropTypes: PropTypes.string.isRequired,
  }

  static defaultProps = {
    testTextPropTypes: "Kreator Postaci Ragnarok™® - Radosław Jędryszczak™®",
  }

  add = (a, b) => a + b

  render() {
    return (
      <div>
        <h3 className="test-class">
          {this.props.testTextPropTypes}
        </h3>
      </div>
    );
  }
}
