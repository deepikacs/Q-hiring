import * as ActionTypes from '../Actions/types';
const initialState={
  msg:'',
  array:[]
}
export default(state=initialState,action)=>{
    // debugger;
    switch (action.type) {
        case ActionTypes.SIGNUP_FORM_SUBMIT:
        return { ...state,msg:'signup successfuly ',array:action.data };
       
      default:
        return state;
      }

}
