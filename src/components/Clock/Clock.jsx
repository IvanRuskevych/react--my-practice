import React, { Component } from 'react';
import css from './Clock.module.css';
export default class Clock extends Component {
  state = {
    time: new Date().toLocaleDateString(),
  };

  intervalId = null;

  componentDidMount = () => {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={css.Clock__face}>{this.state.time}</div>;
  }
}
