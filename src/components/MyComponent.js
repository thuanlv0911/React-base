// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Thuan",
    address: "Thanh Hoa",
    age: 20,
  };

  handleClick() {}
  // JSX
  render() {
    return (
      <div>
        Study React with Erik
        <div>hello</div>
        <div>
          My name is {this.state.name} and I am from {this.state.address}
          <button onClick={this.handleClick}>Click me</button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
