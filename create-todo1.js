import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveTodos} from '../actions/todo-create-action'
import TodoList from './todo-list';

class CreateToDo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     this.saveToReducer = this.saveToReducer.bind(this);
    this.state = {items: [], text: ''};
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
  saveToReducer(e)
  {
    this.props.SaveTodos(this.state.items);
  }
  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
         <button onClick={this.saveToReducer}>Save</button>
      </div>
    );
  }


}
function mapStateToProps(state) {
    return {
        todos: state.initial
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({SaveTodos: saveTodos}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateToDo);