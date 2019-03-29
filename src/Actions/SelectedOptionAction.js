// import * as ActionTypes from './types';
// import HttpWrapper from '../utils/HttpWrapper';
// import browserHistory from '../utils/browserHistory';

// export function BeginFunc(ActionType) {
//     return { type: ActionType }
// }

// export function SuccessFunc(ActionType, result) {
//     return {
//         type: ActionType,
//         payload: result
//     }
// }

// export function ErrorFunc(ActionType, error) {
//     return {
//         type: ActionType,
//         payload: error 
//     }
// }
// export function selectedOptionsDetails(selectedoption) {
//     debugger;
//     return dispatch => {
//       dispatch(BeginFunc(ActionTypes. ADD_SELECTED_OPTION_BEGIN ));
//       debugger;
//       HttpWrapper('POST', '/userquestions/addall', true,selectedoption)
//         .then(response => {
//       debugger;
//         console.log(response)
//           dispatch(SuccessFunc(ActionTypes.ADD_SELECTED_OPTION_SUCCESS,response.data));
//         })
        
//         .catch(error => {
//           debugger;
//           dispatch(ErrorFunc(ActionTypes.ADD_SELECTED_OPTION_FAILURE,error));
//         });
//     };
//   }