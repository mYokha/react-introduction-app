import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      value: ''
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
  //  handleChange (event) {
    const value = event.target.value;
    console.log(value);
    if (/(^$|\d+$)/.test(value)) {
      this.setState({value: parseInt(value, 10) || ''});
    }
  }

  handleSubmit = event => {
    //console.log('Submit triggered!');
    const sum = this.state.value + this.state.sum;
    this.setState({sum});
    this.setState({value: ''});
    event.preventDefault();
  }

  render () {
    return (
      <div className="App">
        <h1>{this.state.sum < 1000000000000 ? this.state.sum : 'Oh Snap!'}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          {/* <button>Submit</button> */}
        </form>
      </div>

    );
  }
}
