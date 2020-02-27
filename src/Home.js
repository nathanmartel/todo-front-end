import React, { Component } from 'react'
import request from 'superagent';
import TodoItem from './TodoItem.js';

export default class Home extends Component {
  state = {
    todos: [],
    addValue: '',
    userName: '', 
    userToken: '',
    userId: '' 
}

  handleComplete = async (todo) => {
    console.log('marking as complete (or incomplete)');
    const updatedTodo = {
      id: todo.id,
      task: todo.task,
      user_id: todo.user_id,
      complete: !todo.complete,
    }
    const URL = `${process.env.REACT_APP_DB_URL}/${todo.id}`;
    const result = await request.put(URL, updatedTodo).set('Authorization', this.state.userToken);
    console.log('Adding PUT result:', result);
    this.getAllTodos();
  }

  handleDelete = async (idFromChild) => {
    console.log('should delete', idFromChild);
    const URL = `${process.env.REACT_APP_DB_URL}/${idFromChild}`;
    const todoData = await request.delete(URL).set('Authorization', this.state.userToken);;
    this.getAllTodos();
  }

  handleAddSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      task: this.state.addValue,
      user_id: this.state.userId,
      complete: false,
    }
    const URL = `${process.env.REACT_APP_DB_URL}`;
    const result = await request.post(URL, newTodo).set('Authorization', this.state.userToken);;
    console.log('Adding POST result:', result);
    this.getAllTodos();
  }

  handleAddChange = (e) => {
    this.setState({ addValue : e.target.value });
  }

  getAllTodos = async () => {
    console.log('Getting all todos');
    console.log('userToken is ', this.state.userToken);
    const URL = `${process.env.REACT_APP_DB_URL}`;
    const todoData = await request.get(URL).set('Authorization', this.state.userToken);
    this.setState({ todos: todoData.body });
  }

  getUser = () => {
    console.log('Getting user');
    const user = JSON.parse(localStorage.getItem('user'));
    this.setState({ 
      userName: user.display_name, 
      userToken: user.token,
      userId: user.id 
    });
  }

  // Make sure user info is loaded into state for authorization use before making API calls
  componentWillMount() {
    this.getUser();
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
            {this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleComplete={this.handleComplete} handleDelete={this.handleDelete} />)}
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
