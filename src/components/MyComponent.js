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
    console.log("My name is", this.state.name);
    // console.log("My age", Math.floor(Math.random() * 100) + 1);

    // merge State => react class
    this.setState({
      name: "ThuanLV",
      age: Math.floor(Math.random() * 100) + 1,
    });
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
          My name is {this.state.name} and I am from {this.state.address} and My
          age is {this.state.age}
          <button onClick={(event) => this.handleClick(event)}>Click me</button>
          <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
