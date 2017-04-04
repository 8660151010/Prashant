import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createUser} from '../actions/user-action'
import TodoList from './todo-list';
import _ from "lodash";
class CreateUser extends Component {
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
    const updatedUser= _.concat(this.props.existingUsers,this.state.items)
    this.props.createUser(updatedUser);
  }
  render() {
    return (
      <div>
        <h3>Add Users</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add User #' + (this.state.items.length + 1)}</button>
        </form>
        <br/>
         <button onClick={this.saveToReducer}>Add User to Reducer</button>
        
      </div>
    );
  }


}
function mapStateToProps(state) {
  debugger;
    return {
      existingUsers : state.userInfo.Users
        //existingUsers: ((state.userInfo != null && state.userInfo.Users != null ) ? state.userInfo.Users : [] )
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({createUser: createUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateUser);