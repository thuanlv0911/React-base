// import logo from "./logo.svg";
import { Button } from "bootstrap";
import "./App.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
// import MyComponent from "./components/MyComponent";
// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="app-container">
//         {/* Hello world with Erik */}
//         <MyComponent></MyComponent>
//       </div>
//     );
//   }
// }

const App = () => {
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();

  return (
    <div className="app-container">
      <Header />
    </div>
  );
};

export default App;
