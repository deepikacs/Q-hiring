import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import SignupReducers from './SignupReducers';
import QuestionReducers from './QuestionReducers';
import PamentReducers from './PamentReducers';
import AgeupdownReducers from './AgeupdownReducers';
import FormReduxReducers from './FormReduxReducers';
import ReduxExampleReducers from './ReduxExampleReducers';
import UpdateBtnReducers from './UpdateBtnReducers';
import UpdateBtnReducers1 from './UpdateBtnReducers1';
import Signup1Reducers from './Signup1Reducers';
import AlertReducer from './AlertReducer';
// import SelectedOptionReducer from './SelectedOptionReducers';

export default combineReducers({
  LoginReducers,
  SignupReducers,
  QuestionReducers,
  PamentReducers,
  AgeupdownReducers,
  FormReduxReducers,
  ReduxExampleReducers,
  UpdateBtnReducers,
  UpdateBtnReducers1,
  Signup1Reducers,
  AlertReducer
  // SelectedOptionReducer
});