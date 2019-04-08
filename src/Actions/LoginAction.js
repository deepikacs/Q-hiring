import * as ActionTypes from './types';
import HttpWrapper from '../utils/HttpWrapper';
import browserHistory from '../utils/browserHistory';

export function BeginFunc(ActionType) {
  return { type: ActionType }
}

export function SuccessFunc(ActionType, result) {
  return {
    type: ActionType,
    payload: result
  }
}

export function ErrorFunc(ActionType, error) {
  return {
    type: ActionType,
    payload: error
  }
}

export function submitLogin(logindata) {
  return dispatch => {
    debugger;

    dispatch(BeginFunc(ActionTypes.FETCH_LOGIN_BEGIN));
    HttpWrapper('POST', '/api/user/login', false, logindata)
      .then(response => {
        debugger
        console.log(logindata);
        dispatch(SuccessFunc(ActionTypes.FETCH_LOGIN_SUCCESS, response.data));
        browserHistory.push('/Instruction');
      })
      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.FETCH_LOGIN_FAILURE, error));
      });
  };
}
