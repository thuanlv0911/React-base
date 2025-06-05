// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
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
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <hr />
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
