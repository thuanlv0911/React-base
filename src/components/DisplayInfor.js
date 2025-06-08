import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  state = {
    isHandleShowHide: true,
  };

  handleShowHide = () => {
    this.setState({
      isHandleShowHide: !this.state.isHandleShowHide,
    });
  };

  render() {
    console.log(this.props);
    // Destructuring object
    const { listUsers } = this.props;
    return (
      <div className="display-infor-container">
        <div>
          <button
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isHandleShowHide === true ? "Hide" : "Show"}
          </button>
        </div>
        {this.state.isHandleShowHide && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                  <div style={{ color: "blue" }}>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
