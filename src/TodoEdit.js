import React, { Component } from 'react'

export default class TodoEdit extends Component {
    state = {
        todos: [],
        addValue: '',
        userName: '', 
        userToken: '',
        userId: '' 
    }

    render() {
        return (
            <div>
            <li style={{textDecoration: this.props.todo.complete ? 'line-through' : 'inherit'}}>
                {this.props.todo.task}
                {JSON.stringify(this.props.todo.complete)}
            </li>                
            </div>
        )
    }
}
