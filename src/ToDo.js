import React, { Component } from "react";

class ToDo extends Component {
    constructor(props){
        super(props);
        this.handleRemove=this.handleRemove.bind(this);
    }
 //Todo has access to the props that are specified in ToDoList 
handleRemove(){
    this.props.removeItem(this.props.id);
}

  render() {
    return (
      <div>
          <button>Edit</button>
          <button onClick={this.handleRemove}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default ToDo;
