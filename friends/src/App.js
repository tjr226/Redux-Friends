import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Axios from 'axios';

import PrivateRoute from './PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
   
        <p>hey</p>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendslist">Friends List</Link>
          </li>
        </ul>

      <Route path="/login" component={Login}  />
      <PrivateRoute exact path="/friendslist" component={FriendsList} />  
    
    </Router>
  );
}

export default App;
