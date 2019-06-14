import * as ActionTypes from '../Actions/types';

// const initialState = {
//     age:20
// };
// const AgeupdownReducers = (state=initialState, action) => {
//     const newState = {...state};

//     switch(action.type){
//         case 'AGE_UP': 
//             newState.age += action.value;
//             break;
        
//         case 'AGE_DOWN': 
//             newState.age -= action.value;
//             break;
//     }
//     return newState;
// };

// export default AgeupdownReducers;

const initialState = {
    age:20
  };
  
  export default (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
     case ActionTypes.AGE_UP:
     newState.age += action.value;
            break;

    case ActionTypes.AGE_DOWN:
    newState.age -= action.value;
    break;
    //   return { ...state, loading: true, error: null };
    //  case ActionTypes.FETCH_LOGIN_SUCCESS:
    //   return { ...state, loading: false,message:'logged in'}
    // case ActionTypes.FETCH_LOGIN_FAILURE:
    //   return { ...state, loading: false, error: action.payload.message}
    // default:
    //   return state;
    }
    return newState;
  };