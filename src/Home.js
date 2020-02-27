import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem.js';

export default class Home extends Component {
  state = {
    todos: [],
    addValue: '',
  }

  handleDelete = async (idFromChild) => {
    // const URL = `${process.env.REACT_APP_DB_URL}/api/todos/${idFromChild}`;
    // const todoData = await request.delete(URL);
    // this.setState({ todos: todoData.body });
    this.getAllTodos();
  }

  handleAddSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      task: this.state.addValue,
      complete: false,
    }
    const URL = `${process.env.REACT_APP_DB_URL}/api/todos`;
    const result = await request.post(URL, newTodo);
    console.log('Adding POST result:', result);
    // Is this the best way to refresh the list of todos?
    this.getAllTodos();
  }

  handleAddChange = (e) => {
    this.setState({ addValue : e.target.value });
  }

  getAllTodos = async () => {
    const URL = `${process.env.REACT_APP_DB_URL}/api/todos`;
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name);
    const todoData = await request.get(URL).set('Authorization', user.token);
    this.setState({ todos: todoData.body });
  }

  async componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return (
      <div>
        <header>
          <h1>To-dos</h1>
        </header>
        <div>
          <ul className='todo-list'>
            {this.state.todos.map(todo => <TodoItem todo={todo} handleDelete={this.handleDelete} />)}
          </ul>
        </div>
        <div>
          <form onSubmit={this.handleAddSubmit}>
            <input onChange={this.handleAddChange} value={this.state.addValue} />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}
