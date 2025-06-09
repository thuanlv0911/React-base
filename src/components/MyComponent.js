// class component
// function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   // JSX
//   state = {
//     listUsers: [
//       {
//         id: 1,
//         name: "thuan",
//         age: "16",
//       },
//       {
//         id: 2,
//         name: "thuanlv",
//         age: "21",
//       },
//       {
//         id: 3,
//         name: "thuanlv09",
//         age: "20",
//       },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userID) => {
//     let listUserClone = [...this.state.listUsers];
//     listUserClone = listUserClone.filter((user) => {
//       return userID !== user.id;
//     });
//     this.setState({
//       listUsers: listUserClone,
//     });
//   };

//   render() {
//     const test = "Hello world with React";
//     return (
//       <React.Fragment>
//         {test}
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
//           <hr />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           ></DisplayInfor>
//         </div>
//         <div className="b"></div>
//       </React.Fragment>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
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
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userID) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((user) => {
      return userID !== user.id;
    });
    setListUsers(listUserClone);
  };
  const test = "Hello world with React";
  return (
    <React.Fragment>
      {test}
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser}></AddUserInfor>
        <hr />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        ></DisplayInfor>
      </div>
      <div className="b"></div>
    </React.Fragment>
  );
};

export default MyComponent;
