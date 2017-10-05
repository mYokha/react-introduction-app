import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      sum: 0
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const sum = this.state.value + this.state.sum;
    this.setState({
      sum,
      value: ''
    });
  }

  handleChange = event => {
    const value = event.target.value;
    if (/(^$|\d+$)/.test(value)) {
      this.setState({value: parseInt(value, 10) || ''});
    }
  }

  render () {
    const { sum } = this.state;

    return (
      <div className="App">
        <h2>{sum < 1000000000000 ? sum : 'You\'ve got a huge number!'}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Enter a number here"
              value={this.state.value}
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
