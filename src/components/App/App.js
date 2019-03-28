import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Signup from '../Signup';
import Instruction from '../Instruction';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/instruction' component={Instruction}></Route>
      </Switch> 
      </Router>
    );
  }
}

export default App;
