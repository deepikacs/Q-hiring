import * as ActionTypes from './types';

export function SuccessFunc(ActionType, result) {
    return {
      type: ActionType,
      payload: result
    }
  }

// export function submitForm(y){
//     debugger
//     let data=[];
//     data.push(y);
//     console.log(data);
//     return function (dispatch) {
//         dispatch({
//             type: "FORMREDUX_SUCCES" ,
//             data
//         });
//     }
//     // return dispatch=>{
//     //     dispatch(SuccessFunc(ActionTypes.FORMREDUX_SUCCES,data)
//     // }
// }


// using existing array
export function submitForm(y){
    debugger
    let data=y;
    // data.push(y);
    console.log(data);
    return function (dispatch) {
        dispatch({
            type: "FORMREDUX_SUCCES" ,
            data
        });
    }
}