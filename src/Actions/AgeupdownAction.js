import * as ActionTypes from './types';
// export function onAgeUp(ActionType, error){
//    return  dispatch({ type: "AGE_UP", value: 1 });

// }

// export function onAgeUp = (ActionType, error)=>(dispatch)=> {
//     return  dispatch({ type: "AGE_UP", value: 1 });
 
//  }
// export function onAgeUp(ActionType, error){
//     return  dispatch =>(
//         { type: "AGE_UP", value: 1 }
//         );
 
//  }
 export function onAgeUp() {
    return function (dispatch) {
        dispatch({
            type: "AGE_UP",value: 1 
        });
    }
}
export function onAgDown(){
    return function (dispatch){
        dispatch({
            type:"AGE_DOWN",value:1
        });
    }
}


// export function onAgeDown(ActionType, error){
//    return dispatch({ type: "AGE_DOWN", value: 1 });

// }