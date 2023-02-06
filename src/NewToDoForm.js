import React, { Component } from "react";

class NewToDoForm extends Component {
  render() {
    return (
      <div>
        <div />

        <button onClick={this.props.removeBox}>Delete Box</button>
      </div>
    );
  }
}

export default NewToDoForm;
