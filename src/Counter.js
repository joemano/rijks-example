import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0
    }
  }

  handleClick = () => {
    this.setState({clicks: this.state.clicks + 1})
  }

  render() {
    return(
      <div>
        <p>Count: {this.state.clicks}</p>
        <button onClick={this.handleClick}>CLICK</button>
      </div>
    );
  }
}

export default Counter