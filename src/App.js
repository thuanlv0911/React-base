import "./App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container">
          <div>
            Test
            <div>
              <button>
                <Link to="/user">Go to user page</Link>
              </button>
              <button>
                <Link to="/admin">Go to admin page</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
