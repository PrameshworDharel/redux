import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Buttons extends Component {
  render() {
    return (
      <div className="mt-3">
        <button type="button" onClick={this.props.onIncrement}>
          INCREMENT
        </button>
        <button type="button" onClick={this.props.onDecrement}>
          DECREMENT
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

Buttons = connect(
  undefined,
  mapDispatchToProps
)(Buttons);

export default Buttons;
