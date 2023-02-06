import React, { Component } from "react";
import uuid from 'react-uuid';

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
        const newTodo = {...this.state, id: uuid()}
        this.props.createTodo(newTodo);
        this.setState({task:''})
        
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo: </label>
          <input
          type='text'
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Add task</button>
        </form>
        
      </div>
    );
  }
}

export default NewToDoForm;
