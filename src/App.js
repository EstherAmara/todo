import React from 'react';

import ShowTask from './components/show-task/showtask.component';
import AddTask from './components/add-task/addtask.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todo: [
        {task: "eat", id: 1}
      ]
    }
  }

  addTask = task => {
    task.id = Math.random();
    let tasks = [...this.state.todo, task];
    this.setState({
      todo : tasks
    })
  }

  deleteTask = id => {
    let todo = this.state.todo.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todo: todo
    })
  }

  render() {
    return (
      <div>
        <h1 className="title"> Todo<span>'s</span></h1>
        <ShowTask todo = {this.state.todo} deleteTask = {this.deleteTask} />
        <AddTask addTask = {this.addTask} />
      </div>
    )
  }
}

export default App;
