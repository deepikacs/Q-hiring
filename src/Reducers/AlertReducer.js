import * as ActionTypes from '../Actions/types';



const initialState={
  message:'',
}
export default(state=initialState,action)=>{
    
    switch (action.type) {
        case ActionTypes.ALERT_MESSAGE:
        return { ...state,message:action.message};
       
      default:
        return state;
      }

}