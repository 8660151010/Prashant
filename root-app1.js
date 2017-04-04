import React, {Component} from 'react';
import { Router, Route,  browserHistory, IndexRoute  } from 'react-router'
import MainApp from '../components/main-app1'
import CreateToDo from '../components/create-todo2'
import CreateUser from '../components/create-user'
import ShowAll from '../components/showall'

export default class RootApp extends Component
{
   render()
   { 
      return( <Router history = {browserHistory}>
                <Route path = "/" component = {MainApp}>
                <IndexRoute component = {CreateToDo} />
                <Route path = "home" component = {CreateToDo} />
                 <Route path = "user" component = {CreateUser} />
                <Route path = "showall" component = {ShowAll} />
            </Route>
        </Router>)
   }
}