import * as ActionTypes from '../Actions/types';

const initialState={
    B:1
  }
  export default(state=initialState,action)=>{
      switch (action.type) {
  
          case ActionTypes.UPDATE_B:
          
          return { ...state,B:state.B+action.payloadA};
         
        default:
          return state;
        }
  
  }