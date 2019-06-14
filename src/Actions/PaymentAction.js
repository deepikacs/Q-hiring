import * as ActionTypes from './types';

// export const displayToken = (name) => (dispatch) => {
//   debugger
//     dispatch({
//       type: ActionTypes.FETCH_PAYMENTDETAILS_SUCCESS,
//       name
//     })
//   }

export function displayToken(name) {
  return dispatch => {

    dispatch({type:ActionTypes.FETCH_PAYMENTDETAILS_SUCCESS,
      name
    });
    // HttpWrapper('POST', '/user/login', false, logindata)
    //   .then(response => {
    //     dispatch(SuccessFunc(ActionTypes.FETCH_LOGIN_SUCCESS, response.data));
    //     localStorage.setItem('token', response.data.token);
    //     localStorage.setItem('userid', response.data.userId);
    //     browserHistory.push('/instruction');
    //   })

    //   .catch(error => {
    //     dispatch(ErrorFunc(ActionTypes.FETCH_LOGIN_FAILURE, error.response.data));
    //   });
  };
}