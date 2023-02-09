import React, { Component } from "react";
import uuid from 'react-uuid';
import './NewTodoForm.css'

class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state={task:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(evt){
       this.setState({[evt.target.name]:evt.target.value})
    }

    handleSubmit(evt){
        evt.preventDefault();
        const newTodo = {...this.state, id: uuid(), completed: false}
        this.props.createTodo(newTodo);
        this.setState({task:''})
        
    }
  render() {
    return (
      <div>
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          
          <label htmlFor="task"></label>
          <input
            className="task"
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            autoComplete='off'
          />
          <button>Add task</button>
        </form>
      </div>
    );
  }
}

export default NewToDoForm;
