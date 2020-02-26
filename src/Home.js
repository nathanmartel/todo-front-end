import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem.js';

export default class Home extends Component {
  state = {
    todos: [],
  }

  async componentDidMount() {
    const URL = `http://localhost:3000/api/todos`;
    const todoData = await request.get(URL);
    this.setState({ todos: todoData.body });
  }

  render() {
    return (
      <div>
        <header>
          <h1>To-dos</h1>
        </header>
        <div>
          <ul className='todo-list'>
            {this.state.todos.map(todo => <TodoItem todo={todo} />)}
          </ul>
        </div>
      </div>
    )
  }
}
