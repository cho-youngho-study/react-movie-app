import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };
  handleOnClick_add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  handleOnClick_min = () => {
    const { count } = this.state;
    this.setState({
      count: count - 1
    });
  };
  render() {
    return (
      <div>
        <h1>Hello {this.state.count}</h1>
        <button onClick={this.handleOnClick_add}>Add</button>
        <button onClick={this.handleOnClick_min}>min</button>
      </div>
    );
  }
}

export default App;
