import React from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import TodoEdit from './TodoEdit.js';
import './App.css';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends React.Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => 
                isLoggedIn() 
                    ? <Home />
                    : <Redirect to='login' />
                }/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/edit/:id" component={TodoEdit} />
        {/* <Route path="/?" component={Home} /> */}
      </Switch>
    </Router>
  );
  }
}
