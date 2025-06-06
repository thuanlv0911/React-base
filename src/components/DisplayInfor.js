import React from "react";

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
      <div>
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
                  <div>My name's {user.name}</div>
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
