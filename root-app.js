import React, {Component} from 'react';
import { Router, Route,  browserHistory, IndexRoute  } from 'react-router'
import MainApp from '../components/main-app'
import CreateToDo from '../components/create-todo2'
import ShowAllToDos from '../components/showall-todos2'

export default class RootApp extends Component
{
   render()
   { 
      return( <Router history = {browserHistory}>
                <Route path = "/" component = {MainApp}>
                <IndexRoute component = {CreateToDo} />
                <Route path = "home" component = {CreateToDo} />
                <Route path = "showall" component = {ShowAllToDos} />
            </Route>
        </Router>)
   }
}