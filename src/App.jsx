import React, { Component } from 'react';
import Prompt from './Prompt';
import Counter from './Counter';

import './App.css';


export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      prompt: true,
      counters: []
    }
  }

  populateCounters = (quantity) => {
    const counters = [];
    for (let i = 0; i < quantity; i++) {
      counters.push({
        id: 1000 + i
      });
    }
    this.setState({
      prompt: false,
      counters
    });
  }

  render () {
    const counters = this.state.counters.length
    ? this.state.counters.map(item => {
      return (
        <Counter
          key={item.id}
        />
      );
    })
    : null;

    return (
        <div>
          {
            this.state.prompt &&
            <Prompt
              populateCounters={this.populateCounters}
            />
          }
          {
            counters
          }
        </div>
    );
  }
}
