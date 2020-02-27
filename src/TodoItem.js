import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class todoItem extends Component {
    render() {
        return (
            <li key={this.props.todo.id}>
                <p>
                    {this.props.todo.task}
                    &nbsp;|&nbsp; 
                    {JSON.stringify(this.props.todo.complete)}
                    &nbsp;&nbsp; 
                    <Link to={`/edit/${this.props.todo.id}`}><button>EDIT</button></Link>
                    &nbsp;&nbsp; 
                    <button onClick={this.props.handleDelete}>DELETE</button>
                </p>
            </li>
        )
    }
}
