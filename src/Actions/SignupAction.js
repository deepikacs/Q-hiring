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
      HttpWrapper('POST', '/signup', false, userdata)
        .then(response => {
            debugger;
            console.log(response)
          dispatch(SuccessFunc(ActionTypes.ADD_SIGNUP_SUCCESS,response.data));
          browserHistory.push('/');
        })
        .catch(error => {
          debugger;
          dispatch(ErrorFunc(ActionTypes.ADD_SIGNUP_FAILURE,error));
        });
    };
  }