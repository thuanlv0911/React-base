// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // JSX
  state = {
    listUsers: [
      {
        id: 1,
        name: "thuan",
        age: "16",
      },
      {
        id: 2,
        name: "thuanlv",
        age: "21",
      },
      {
        id: 3,
        name: "thuanlv09",
        age: "20",
      },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
        <hr />
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
