import React, { Component } from 'react';

export default class Counter extends Component{

  handleSubmit = event => {
    event.preventDefault();
    this.props.populateInputs();
  }

  handleChange = event => {
    this.props.handleInput(event);
  }

  render () {
    const value = this.props.value;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Amount of boxes"
              value={value}
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
