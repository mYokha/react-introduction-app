import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      value: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const sum = this.state.value + this.state.sum;
    this.setState({sum});
    this.setState({value: ''});
  }

  handleChange = event => {
    const value = event.target.value;
    if (/(^$|\d+$)/.test(value)) {
      this.setState({value: parseInt(value, 10) || ''});
    }
  }

  render () {
    const { sum, value, id } = this.props.counter;

    return (
      <div className="App">
        <h2>{sum < 1000000000000 ? sum : 'You\'ve got a huge number!'}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Enter a number here"
              value={value}
              onChange={this.handleChange}
            />
          </label>
          <button
            type="submit"
            onClick={this.handleSubmit}
            disabled={!value}>
            Add
          </button>
        </form>
      </div>
    );
  }
}
