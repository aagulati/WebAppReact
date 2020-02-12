import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id:1, content: "test 11"},
      {id:2, content: "test 21"}
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
    
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState ({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos= [...this.state.todos, todo];
    this.setState ({
      todos
    });
  }

  render () {
  return (
    <div className="App">
      <h1 className="centre blue-text">
        Todo List
      </h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
    </div>
  );
  }
}

export default App;
