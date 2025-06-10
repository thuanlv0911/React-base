import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
// import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   // constructor(props) {
//   //   console.log("constructor");

//   //   super(props);
//   //   this.state = {
//   //     isHandleShowHide: true,
//   //   };
//   // }

//   // handleShowHide = () => {
//   //   this.setState({
//   //     isHandleShowHide: !this.state.isHandleShowHide,
//   //   });
//   // };

//   // componentDidMount() {
//   //   console.log("did mount");
//   //   setTimeout(() => {
//   //     document.title = "Thuan";
//   //   }, 2000);
//   // }

//   // componentDidUpdate(prevProps, prevState, snapshot) {
//   //   console.log("did update", this.props, prevProps);
//   //   if (this.props.listUsers !== prevProps.listUsers) {
//   //     if (this.props.listUsers.length === 5) {
//   //       alert("5");
//   //     }
//   //   }
//   // }

//   // render() {
//   //   console.log("render", this.props);
//   //   // Destructuring object
//   //   const { listUsers } = this.props;
//   //   return (
//   //     <div className="display-infor-container">
//   //       <img src={logo} />
//   //       <div>
//   //         <button
//   //           onClick={() => {
//   //             this.handleShowHide();
//   //           }}
//   //         >
//   //           {this.state.isHandleShowHide === true ? "Hide" : "Show"}
//   //         </button>
//   //       </div>
//   //       {this.state.isHandleShowHide && (
//   //         <React.Fragment>
//   //           {listUsers.map((user, index) => {
//   //             return (
//   //               <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//   //                 <div style={{ color: "blue" }}>My name's {user.name}</div>
//   //                 <div>My age's {user.age}</div>
//   //                 <div>
//   //                   <button
//   //                     onClick={() => {
//   //                       this.props.handleDeleteUser(user.id);
//   //                     }}
//   //                   >
//   //                     X
//   //                   </button>
//   //                 </div>
//   //                 <hr />
//   //               </div>
//   //             );
//   //           })}
//   //         </React.Fragment>
//   //       )}
//   //     </div>
//   //   );
//   // }
//   render() {
//     console.log("render", this.props);
//     // Destructuring object
//     const { listUsers } = this.props;
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <React.Fragment>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//                   <div style={{ color: "blue" }}>My name's {user.name}</div>
//                   <div>My age's {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       X
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </React.Fragment>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  const [isHandleShowHide, setHandleShowHide] = useState(true);

  const handleShowHide = () => {
    setHandleShowHide(!isHandleShowHide);
  };
  console.log("render");

  useEffect(() => {
    setTimeout(() => {
      document.title = "Thuan";
    }, 2000);
    if (listUsers.length === 0) {
      alert("me");
    }
    console.log("Effect");
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      <div>
        <button onClick={() => handleShowHide()}>
          {isHandleShowHide === true ? "Hide" : "Show"}
        </button>
      </div>
      {isHandleShowHide && (
        <React.Fragment>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                <div style={{ color: "blue" }}>My name's {user.name}</div>
                <div>My age's {user.age}</div>
                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    X
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </React.Fragment>
      )}
    </div>
  );
};

export default DisplayInfor;
