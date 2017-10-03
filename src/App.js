import React, { Component } from 'react';
import Counter from './Counter';
import Input from './Input';

import './App.css';


export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      counter: {
        value: '',
        active: true
      },
      counters: []
    }
  }

  handleCounterInput = event => {
    let value = event.target.value;

    if (/(^$|\d+$)/.test(value)) {
      value = parseInt(value, 10) || '';
      const counter = Object.assign({}, this.state.counter, {value});
      this.setState({counter});
    }
  }

  populateInputs = () => {
    const counter = Object.assign({}, this.state.counter, {active: false});
    const quantity = this.state.counter.value;
    console.log(quantity);
    const counters = [];
    for (let i = 0; i < quantity; i++) {
      counters.push({
        id: 1000 + i,
        value: '',
        sum: 0
      });
    }
    this.setState({
      counter,
      counters
    });
  }

  render () {
    return (
        <div>
          {
            this.state.counter.active &&
            <Counter
              value={this.state.counter.value}
              handleInput={this.handleCounterInput}
              populateInputs={this.populateInputs}
            />
          }
          {
            this.state.counters.length &&
            this.state.counters.map(item => {
              return (
                <Input
                  key={item.id}
                  counter={item}
                />
              );
            })
          }
        </div>
    );
  }

}
