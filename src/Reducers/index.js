import { combineReducers } from 'redux';
import LoginReducers from './LoginRducers';
import SignupReducers from './SignupReducers';
import QuestionReducers from './QuestionReducers';

export default combineReducers({
  LoginReducers,
  SignupReducers,
  QuestionReducers
});