// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // JSX
  listUsers = [
    {
      id: 1,
      name: "thuan",
      age: 20,
    },
    {
      id: 2,
      name: "thuanlv",
      age: 21,
    },
  ];
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <DisplayInfor listUsers={this.listUsers}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
