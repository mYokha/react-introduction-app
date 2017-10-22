import React, { Component } from 'react';
import { extendObservable } from "mobx";
import { observer } from "mobx-react";

class Counter extends Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      value: '',
      sum: 0
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const sum = this.value + this.sum;
    this.sum = sum;
    this.value = '';
  }

  handleChange = event => {
    const value = event.target.value;
    if (/(^$|\d+$)/.test(value)) {
      this.value = parseInt(value, 10) || '';
    }
  }

  render () {
    const sum = this.sum;

    return (
      <div className="App">
        <h2>{sum < 1000000000000 ? sum : 'You\'ve got a huge number!'}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Enter a number here"
              value={this.value}
              onChange={this.handleChange}
            />
          </label>
          <button
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default observer(Counter);
