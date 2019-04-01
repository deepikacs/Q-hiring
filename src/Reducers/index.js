import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import SignupReducers from './SignupReducers';
import QuestionsReducers from './QuestionsReducers';

export default combineReducers({
  LoginReducers,
  SignupReducers,
  QuestionsReducers
});