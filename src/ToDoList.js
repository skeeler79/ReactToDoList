import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <div />

        <button onClick={this.props.removeBox}>Delete Box</button>
      </div>
    );
  }
}

export default ToDoList;
