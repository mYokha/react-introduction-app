import React, { Component } from 'react';

export default class Prompt extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.populateCounters(this.state.value);
  }

  handleChange = event => {
    let value = event.target.value;

    if (/(^$|\d+$)/.test(value)) {
      value = parseInt(value, 10) || '';
      this.setState({value});
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Amount of boxes"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button
            type="submit"
            >
            Create
          </button>
        </form>
      </div>
    );
  }
}
