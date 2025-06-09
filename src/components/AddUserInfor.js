import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "Thuan",
//     address: "Thanh Hoa",
//     age: 20,
//   };

//   handleOnchangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnchangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         Study React with Erik
//         <div>hello</div>
//         My name is {this.state.name} and I am from {this.state.address} and My
//         age is {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <input
//             type="text"
//             onChange={(event) => {
//               return this.handleOnchangeInput(event);
//             }}
//           />
//           <input
//             type="text"
//             onChange={(event) => {
//               return this.handleOnchangeAge(event);
//             }}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("Thanh Hoa");
  const [age, setAge] = useState("");

  const handleOnchangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnchangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <div>
      Study React with Erik
      <div>hello</div>
      My name is {name} and I am from {address} and My age is {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => {
            return handleOnchangeInput(event);
          }}
        />
        <input
          type="text"
          onChange={(event) => {
            return handleOnchangeAge(event);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
