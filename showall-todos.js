import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
const todos = [
        {
            id: 1,
            task: 'Build and Release activity'
        },
        {
            id: 2,
            task: 'Team meeting'    
        }  
    ]
class ShowAllToDos extends Component {
    renderList() {
        return todos.map((todo) => {
            return (
                <li key={todo.id}>
                    {todo.task}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

export default ShowAllToDos;
