import React, { Component } from "react";

import CounterPageLayout from "../components/layout";

import { PARITY_TYPES } from "../constants";

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      parityType: PARITY_TYPES.EVEN,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.countValue !== this.state.countValue) {
      const parityType =
        this.state.countValue % 2 === 0 ? PARITY_TYPES.EVEN : PARITY_TYPES.ODD;

      this.setState({ ...this.state, parityType });
    }
  }

  handleIncrement = () => {
    this.setState({ ...this.state, countValue: this.state.countValue + 1 });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ ...this.state, countValue: this.state.countValue - 1 });
    }
  };

  handleReset = () => {
    this.setState({ ...this.state, countValue: 0 });
  };

  render() {
    return (
      <CounterPageLayout
        countValue={this.state.countValue}
        parityType={this.state.parityType}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
      />
    );
  }
}

export default CounterPageContainer;
