import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class todoItem extends Component {
    render() {
        return (
            <li style={{textDecoration: this.props.todo.complete ? 'line-through' : 'inherit'}}>
                {this.props.todo.task}
                <button onClick={() => this.props.handleComplete(this.props.todo)}>COMPLETE</button>
                {/* Another time, edit! */}
                {/* <Link to={`/edit/${this.props.todo.id}`}><button>EDIT</button></Link> */}
                <button onClick={() => this.props.handleDelete(this.props.todo.id)}>DELETE</button>
            </li>
        )
    }
}
