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
    payload: { error }
  }
}

export function submitSignup(userdata) {
    return dispatch => {
      dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN ));
      HttpWrapper('POST', '/api/user/signup', false, userdata)
        .then(response => {
          dispatch(SuccessFunc(ActionTypes.ADD_SIGNUP_SUCCESS,response.data));
          browserHistory.push('/login');
        })
        .catch(error => {
          dispatch(ErrorFunc(ActionTypes.ADD_SIGNUP_FAILURE,error));
        });
    };
  }

