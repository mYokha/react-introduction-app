import React, { Component } from 'react';
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import PropTypes from 'prop-types';

class Prompt extends Component {
  constructor (props) {
    super(props);

    extendObservable(this, {
      value: ''
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.populateCounters(this.value);
  }

  handleChange = event => {
    let value = event.target.value;
    if (/(^$|\d+$)/.test(value)) {
      this.value = parseInt(value, 10) || '';
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
              value={this.value}
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

export default observer(Prompt);

Prompt.propTypes = {
  populateCounters: PropTypes.func.isRequired
};
