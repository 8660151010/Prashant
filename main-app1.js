import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
class MainApp extends Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to="/home">Create ToDos</Link></li>
               <li><Link to="/user">Create Users</Link></li>
               <li><Link to="/showall">Show All</Link></li>
            </ul>
				    <hr /> <br/> <br/><br/>
           {this.props.children}
         </div>
      )
   }
}
export default MainApp

