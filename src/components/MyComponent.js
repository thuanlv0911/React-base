// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  // JSX
  render() {
    const myInfor = ["THUANLV", "hi"];
    return (
      <div>
        <UserInfor></UserInfor>
        <DisplayInfor name="thuanlv" age={21} myInfor={myInfor}></DisplayInfor>
      </div>
    );
  }
}

export default MyComponent;
