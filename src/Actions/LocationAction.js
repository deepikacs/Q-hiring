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

export function LocationDetails(Location1) {
  debugger;
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.FETCH_LOCATION_BEGIN));
    let path="/users/getbyLocId/";
    HttpWrapper('GET', `${path}${Location1}`, false, Location1)
      .then(response => {

        dispatch(SuccessFunc(ActionTypes.FETCH_LOCATION_SUCCESS, response.data.result));
        console.log(response)
        // localStorage.setItem('token', response.data.token);
        // localStorage.setItem('userid', response.data.userId);
        // browserHistory.push('/rst');
      })
    


    //   .catch(error => {
    //     dispatch(ErrorFunc(ActionTypes.FETCH_LOCATION_FAILURE, error.response.data));
    //   });

      
  };
}

export function RestDetails(rstId) {
  debugger;
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.FETCH_RST_BEGIN));
    let path="/users/getmenulist/";
    HttpWrapper('GET', `${path}${rstId}`, false, rstId)
      .then(response => {

        dispatch(SuccessFunc(ActionTypes.FETCH_RST_SUCCESS, response.data.result));
        console.log(response)
        
      })    
  };
}
// food details
export function foodDetails(menuId) {
  debugger;
  return dispatch => {

    dispatch(BeginFunc(ActionTypes.FETCH_FOOD_BEGIN));
    let path="/users/getfoodlist/";
    HttpWrapper('GET', `${path}${menuId}`, false, menuId)
      .then(response => {

        dispatch(SuccessFunc(ActionTypes.FETCH_FOOD_SUCCESS, response.data.result));
        console.log(response)
        
      })    
  };
}