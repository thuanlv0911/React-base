import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Thuan",
    address: "Thanh Hoa",
    age: 20,
  };

  handleOnchangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        Study React with Erik
        <div>hello</div>
        My name is {this.state.name} and I am from {this.state.address} and My
        age is {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              return this.handleOnchangeInput(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
