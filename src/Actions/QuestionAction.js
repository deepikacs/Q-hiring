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
export function Question() {
  return dispatch => {
    dispatch(BeginFunc(ActionTypes.FETCH_QUESTION_BEGIN));
    HttpWrapper('GET', '/group/getall', true)
      .then(response => {
        console.log(response)
        dispatch(SuccessFunc(ActionTypes.FETCH_QUESTION_SUCCESS, response.data));
      })

      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.FETCH_QUESTION_FAILURE, error));
      });
  };
}

export function AddOptionsDetails(selectedoption) {
  return (dispatch, getState) => {
    dispatch(BeginFunc(ActionTypes.ADD_SELECTED_OPTION_BEGIN));
    HttpWrapper('POST', '/userquestions/addall', true, selectedoption)
      .then(response => {
        console.log(response)
        
        dispatch(SuccessFunc(ActionTypes.ADD_SELECTED_OPTION_SUCCESS, response.data));
        console.log('after dospatch', getState())
        debugger;
        // browserHistory.push('/thankyou');

      })

      .catch(error => {
        dispatch(ErrorFunc(ActionTypes.ADD_SELECTED_OPTION_FAILURE, error));
      });
  };
}

export const nextPage = (page) => (dispatch) => {
  debugger
  dispatch({
    type: ActionTypes.NEXT_PAGE,
    page
  })
}

// for groups