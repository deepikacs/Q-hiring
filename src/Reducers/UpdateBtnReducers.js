// import * as ActionTypes from '../Actions/types';

// const initialState={
//     A:1,
//     B:1
//   }
//   export default(state=initialState,action)=>{
//       debugger;
//       switch (action.type) {
//           case ActionTypes.UPDATE_A:
          
//           return { ...state,A:state.A+state.B};
  
//           case ActionTypes.UPDATE_B:
          
//           return { ...state,B:state.A+state.B};
         
//         default:
//           return state;
//         }
  
//   }

import * as ActionTypes from '../Actions/types';

const initialState={
    A:1,
  }
  export default(state=initialState,action)=>{
      switch (action.type) {
          case ActionTypes.UPDATE_A:
          
          return { ...state,A:state.A+action.payloadB};
  
          
         
        default:
          return state;
        }
  
  }