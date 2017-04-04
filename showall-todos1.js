import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class ShowAllToDos extends Component {
    renderDefaultTodo() {
        return this.props.todosDefault.map((todo) => {
            return (
                <li key={todo.id}>
                    {todo.task}
                </li>
         );
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.renderDefaultTodo()}
                </ul>
                
            </div>
        );
    }

}

function mapStateToProps(state) {
    debugger
    return {
        todosDefault: state.initial
    };
}

export default connect(mapStateToProps)(ShowAllToDos);
