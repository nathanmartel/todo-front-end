import React from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
// import TodoEdit from './TodoEdit.js';
import './App.css';
import './style.css';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends React.Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/' render={() => 
                isLoggedIn() 
                    ? <Home />
                    : <Redirect to='/login' />
                }/>
        {/* Another time, edit! */}
        {/* <Route exact path='/edit/:id' component={TodoEdit} /> */}
        {/* <Redirect to='/login' /> */}
      </Switch>
    </Router>
  );
  }
}
