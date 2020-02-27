import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import TodoEdit from './TodoEdit.js';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/edit/:id" component={TodoEdit} />
        <Route exact path="/:name?" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
