import { combineReducers } from 'redux';
import LoginReducers from './LoginRducers';
import SignupReducers from './SignupReducers';

export default combineReducers({
  LoginReducers,
  SignupReducers
});