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

// const initialState = {
//     age:20
//   };
  
//   export default (state = initialState, action) => {
//     const newState = {...state};

//     switch (action.type) {
//      case ActionTypes.AGE_UP:
//      newState.age += action.value;
//             break;

//     case ActionTypes.AGE_DOWN:
//     newState.age -= action.value;
//     break;

//     // default:
//     // return newState;
    
//     //   return { ...state, loading: true, error: null };
//     //  case ActionTypes.FETCH_LOGIN_SUCCESS:
//     //   return { ...state, loading: false,message:'logged in'}
//     // case ActionTypes.FETCH_LOGIN_FAILURE:
//     //   return { ...state, loading: false, error: action.payload.message}
//     // default:
//     //   return state;
//     }
//     return newState;
//   };


// error

  // const initialState = {
  //   age:20
  // };
  
  // export default (state = initialState, action) => {
  //   // const newState = {...state};

  //   switch (action.type) {
  //    case "AGE_UP":{
  //     state.age +=action.value;
  //     console.log(state.age);
  //     break;
  //    }
     
  //   //  return {...state,age:age+action.value}
  //   //  newState.age += action.value;

  //   case "AGE_DOWN":{
  //     state.age -=action.value;
  //     break;
  //   }
    
  //   // return {...state,age:age-action.value}
  //   // newState.age -= action.value;

  //   // default:
  //   // return state;
    
    
  //   }
  //   return state;
  //   // return newState;
  // };

// working fine
  // const initialState = {
  //   age:20
  // };
  // export default (state = initialState, action) => {
  
  //     switch (action.type) {
  //      case "AGE_UP":{
  //        state={...state,age : state.age+action.value}
  //       // state.age +=action.value;
  //       // console.log(state.age);
  //       break;
  //      }
  //      case "AGE_DOWN":{
  //       state={...state,age : state.age-action.value}
  //      // state.age +=action.value;
  //      // console.log(state.age);
  //      break;
  //     }
  //     }
  //      return state;

  // }

  const initialState = {
    age:20,
    ageupMessage:'ageup successfuly'
  };
  export default (state = initialState, action) => {
  
      switch (action.type) {
       case ActionTypes.AGE_UP:{
         return{...state,age:state.age+action.value}
        // state.age +=action.value;
        // console.log(state.age);
        // break;
        // age:state.age+action.value;
        // return{...state
        // state.age +=action.value
        // }
       }
       case ActionTypes.AGE_DOWN:{
        return{...state,age : state.age-action.value}
       // state.age +=action.value;
       // console.log(state.age);
      }
      default:
      return state;
      }
      //  return state;

  }


