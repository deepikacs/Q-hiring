import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Signup from '../Signup';
import Instruction from '../Instruction';
import Main from '../Main';
import Thankyou from '../Main/Thankyou';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Signup}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/Instruction' component={Instruction}></Route>
          <Route exact path='/main' component={Main}></Route>
          <Route exact path='/thankyou' component={Thankyou}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
