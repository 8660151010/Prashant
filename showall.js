import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class ShowAll extends Component {
    renderDefaultTodo() {
       return this.props.todosDefault.map((todo) => {
            return (

                <li key={todo.id}>
                    {todo.task}
                </li>
      );
        });
    }
    renderNewToto() {
     return this.props.todosNew.map((todo) => {
            return (

                <li key={todo.id}>
                    {todo.text}
                </li>
      );
        });
    }
     renderUsers() {
     return this.props.users.map((user) => {
            return (

                <li key={user.id}>
                    {user.text}
                </li>
      );
        });
    }
    render() {
        return (
            <div><h1>Default ToDo Details </h1>
                <ul>
                    {this.renderDefaultTodo()}
                </ul>
                <h1>New ToDo Details </h1>
                <ul>
                    {this.renderNewToto()}
                </ul>
                <h1>User Details </h1>
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        todosDefault: state.initial,
        todosNew : state.userInfo.ToDos,
        users : state.userInfo.Users
    };
}

export default connect(mapStateToProps)(ShowAll);
