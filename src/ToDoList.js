import React, { Component } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import './TodoList.css';

class ToDoList extends Component {
constructor(props){
    super(props);
    this.state = {todos:[]};
    this.createTodo=this.createTodo.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.update=this.update.bind(this);
    this.toggleCompletion=this.toggleCompletion.bind(this)
}

createTodo(newTodo){
    this.setState({
        todos:[...this.state.todos, newTodo,]
    })
}

removeTask(id){
    this.setState({
        todos: this.state.todos.filter(task => task.id !== id)
    })
}

update(id, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
        if(todo.id === id){
            return{...todo, task: updatedTask};
        }
        return todo;
    });
    this.setState({todos:updatedTodos});
}

toggleCompletion(id){
    const updatedTodos = this.state.todos.map(todo => {
        if(todo.id === id){
            return{...todo, completed: !todo.completed};
        }
        return todo;
    });
    this.setState({todos:updatedTodos});
}


  render() {
      const todos= this.state.todos.map(todo =>(
          <ToDo 
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeItem={this.removeTask}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
          />
      ));
    return (
      <div className="TodoList">
          <h1>Today's Todos</h1>
          <span>Make the most of your day with a plan!</span>
          <ul>
              <li>{todos}</li>
          </ul>
        <NewToDoForm createTodo={this.createTodo}/>
      </div>
    );
  }
}

export default ToDoList;
