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

    dispatch(BeginFunc(ActionTypes.FETCH_LOGIN_BEGIN));
    // HttpWrapper('POST', '/user/login', false, logindata)
    //   .then(response => {
    //     dispatch(SuccessFunc(ActionTypes.FETCH_LOGIN_SUCCESS, response.data));
    //     localStorage.setItem('token', response.data.token);
    //     localStorage.setItem('userid', response.data.userId);
    //     browserHistory.push('/instruction');
    //   })
    


      // .catch(error => {
      //   dispatch(ErrorFunc(ActionTypes.FETCH_LOGIN_FAILURE, error.response.data));
      // });

      let array =[
        {
          "mobileno":"1234567890",
          "password":"admin1"
        },{
          "mobileno":"1456237890",
          "password":"admin1"
        }
      ];
      let result;
      array.find((element) => {
        debugger;
        if(element.mobileno === logindata.mobileno){
          if(element.password === logindata.password){
            result={ "status":true,"message":"successful login"};
            dispatch(SuccessFunc(ActionTypes.FETCH_LOGIN_SUCCESS,result ));
            browserHistory.push('/instruction');
          }
          else{
            result={ "status":false,"message":"incorrect password"};
          
            dispatch(ErrorFunc(ActionTypes.FETCH_LOGIN_FAILURE, result));
          }

        }
        else{
          result={ "status":false,"message":"user not found"};
          
          dispatch(ErrorFunc(ActionTypes.FETCH_LOGIN_FAILURE, result));
        }
        

      })



  };
}