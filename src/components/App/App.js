import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Signup from '../Signup';
import Instruction from '../Instruction';
import Main from '../Main';
import Question from '../Questions/Question';
import question1 from '../Questions/question1';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/instruction' component={Instruction}></Route>
          <Route exact path='/main' component={Main}></Route>
          <Route exact path='/question' component={Question}></Route>
          <Route exact path='/question1' component={question1}></Route>

      </Switch> 
      </Router>
    );
  }
}

export default App;
