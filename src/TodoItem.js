import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class todoItem extends Component {
    render() {
        return (
            <li>
                <p>{this.props.todo.task} | {JSON.stringify(this.props.todo.complete)}</p>
                { console.log('complete?', this.props.todo.complete)} 
                <Link to={`/edit/${this.props.todo.id}`}>EDIT</Link>
                {/* <a onClick={this.props.handleDelete}>DELETE</a> */}
            </li>
        )
    }
}
