import React, { Component } from "react";
import "./Todo.css";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
      //this puts the pre-existing task to edit into the input field
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  //Todo has access to the props that are specified in ToDoList
  handleRemove() {
    this.props.removeItem(this.props.id);
  }

  handleEdit() {
    this.setState({ isEditing: true });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            ></input>
            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <div className="Todo-buttons">
            <button onClick={this.handleEdit}>
              <i class="fas fa-pen" />{" "}
            </button>
            <button onClick={this.handleRemove}>
              <i class="fas fa-trash" />
            </button>
          </div>
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }
    return result;
  }
}

export default ToDo;
