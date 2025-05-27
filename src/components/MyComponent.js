// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Thuan",
    address: "Thanh Hoa",
    age: 20,
  };

  handleClick(event) {
    console.log("click me");
    console.log("My name is");
  }

  handleOnMouseOver(event) {
    //console.log(event.pageX);
  }

  // JSX
  render() {
    return (
      <div>
        Study React with Erik
        <div>hello</div>
        <div>
          My name is {this.state.name} and I am from {this.state.address}
          <button onClick={this.handleClick}>Click me</button>
          <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
