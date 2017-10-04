import React, { Component } from 'react';
import Prompt from './Prompt';
import Counter from './Counter';
//import Input from './Input';

import './App.css';


export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      prompt: {
        value: '',
        active: true
      },
      counters: []
    }
  }

  handlePromptInput = event => {
    let value = event.target.value;

    if (/(^$|\d+$)/.test(value)) {
      value = parseInt(value, 10) || '';
      const prompt = Object.assign({}, this.state.prompt, {value});
      this.setState({prompt});
    }
  }

  populateCounters = () => {
    const prompt = Object.assign({}, this.state.prompt, {active: false});
    const quantity = this.state.prompt.value;
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
      prompt,
      counters
    });
  }

  render () {
    return (
        <div>
          {
            this.state.prompt.active &&
            <Prompt
              value={this.state.prompt.value}
              handleInput={this.handlePromptInput}
              populateCounters={this.populateCounters}
            />
          }
          {
            this.state.counters.length &&
            this.state.counters.map(item => {
              return (
                <Counter
                  key={item.id}
                  prompt={item}
                />
              );
            })
          }
        </div>
    );
  }

}
