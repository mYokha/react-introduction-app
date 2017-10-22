import React, { Component } from 'react';
import { extendObservable } from "mobx";
import { observer } from "mobx-react";
import Prompt from './Prompt';
import Counter from './Counter';

import './App.css';


class App extends Component {
  constructor (props) {
    super(props);

    extendObservable(this, {
      prompt: true,
      counters: []});
    }

  populateCounters = (quantity) => {
    const counters = [];
    for (let i = 0; i < quantity; i++) {
      counters.push({
        id: 1000 + i
      });
    }

    this.prompt = false;
    this.counters = counters;
  }

  render () {
    const counters = this.counters.length
    ? this.counters.map(item => {
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
            this.prompt &&
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

export default observer(App);
