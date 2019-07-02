import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Signup from '../Signup';
import Instruction from '../Instruction';
import Main from '../Main';
import Thankyou from '../Main/Thankyou';
import MultiSelect from '../Main/MultiSelect';
import Graphs from '../Graphs';
import Payment from '../Payment';
import TableMerge from '../Main/TableMerge';
import IncrementDecrement from '../Main/IncrementDecrement';
import Ageupdown from '../Ageupdown';
import Reduxtask2 from '../Reduxtask2/Reduxtask2';
import FormRedux from '../FormRedux';
import ReduxExample from '../ReduxExample';
import UpdateBtn from '../UpdateBtn/UpdateBtn';
import Card from '../Card';
import Signup1 from '../Signup1';
import Login1 from '../Login1';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/signup' component={Signup}></Route>
          <Route exact path='/instruction' component={Instruction}></Route>
          <Route exact path='/main' component={Main}></Route>
          <Route exact path='/thankyou' component={Thankyou}></Route>
          <Route exact path='/select' component={MultiSelect}></Route>
          <Route exact path='/graphs' component={Graphs}></Route>
          <Route exact path='/payment' component={Payment}></Route>
          <Route exact path='/table' component={TableMerge}></Route>
          <Route exact path="/amount" component={IncrementDecrement}></Route>
          <Route exact path="/age" component={Ageupdown}></Route>
          <Route exact path="/form" component={Reduxtask2}></Route>
          <Route exact path="/f" component={FormRedux}></Route>
          <Route exact path="/example" component={ReduxExample}></Route>
          <Route exact path="/btn" component={UpdateBtn}></Route>
          <Route exact path="/card" component={Card}></Route>
          <Route exact path="/signup1" component={Signup1}></Route>
          <Route exact path="/login1" component={Login1}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;