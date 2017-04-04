import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveTodos, removeTodos} from '../actions/todo-action'
import TodoList from './todo-list';
import _ from "lodash";
class CreateToDo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveToReducer = this.saveToReducer.bind(this);
    this.removeFromReducer = this.removeFromReducer.bind(this);
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
  componentWillReceiveProps(newProps) {  
   const newToDos =  _.concat(this.props.allTodoData,this.state.items)
   this.setState({items: newToDos})  
      
   }
  saveToReducer(e)
  {
   const newToDos =  _.concat(this.props.allTodoData,this.state.items)
   this.setState({items: newToDos})
    this.props.saveTodos(this.state.items);
  }
   removeFromReducer(e)
  {
    let updatedTodo = _.slice(this.state.items, 0, this.state.items.length - 1);
    this.setState({items: updatedTodo})
    this.props.RemoveTodos(updatedTodo);
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
        <br/>
         <button onClick={this.saveToReducer}>Save to Reduncer</button>
         <button onClick={this.removeFromReducer}>Remove from Reduncer</button>
      </div>
    );
  }


}
function mapStateToProps(state) {
  debugger;
    return {
        allTodoData: (state.userInfo != null ? state.userInfo.ToDos : [])
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({saveTodos: saveTodos, RemoveTodos: removeTodos}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateToDo);