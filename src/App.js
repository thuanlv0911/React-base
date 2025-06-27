import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container" xs={3}></div>
        <div className="app-content" xs={9}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
