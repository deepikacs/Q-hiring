import * as ActionTypes from '../Actions/types';

const initialState={
  message:'',
}
export default(state=initialState,action)=>{
    // debugger;
    switch (action.type) {
        case ActionTypes.FORM_SUBMIT:
        return { ...state,message:'successfuly added'};
       
      default:
        return state;
      }

}