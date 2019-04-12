import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import SignupReducers from './SignupReducers';
import QuestionReducers from './QuestionReducers';
// import SelectedOptionReducer from './SelectedOptionReducers';

export default combineReducers({
  LoginReducers,
  SignupReducers,
  QuestionReducers,
  // SelectedOptionReducer
});