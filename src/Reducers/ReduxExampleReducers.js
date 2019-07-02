import * as ActionTypes from '../Actions/types';

// const initialState={
//   message:'',
//   // option1:''
//   option1:[]
// }
// export default(state=initialState,action)=>{
//     debugger;
//     switch (action.type) {
//         case ActionTypes.FORM_SUBMIT:
//         let array=[];
//        array.push(action.data)
//         return { ...state,message:'successfuly added',option1:array};

//         // without using array here
//         // return { ...state,message:'successfuly added',option1:action.data};
       
//       default:
//         return state;
//       }

// }

const initialState={
  message:'',
  // option1:''
  option1:[]
}
export default(state=initialState,action)=>{
    switch (action.type) {
        case ActionTypes.FORM_SUBMIT:
        let array=state.option1;
       array.push(action.data)
        return { ...state,message:'successfuly added',option1:array};

        // without using array here
        // return { ...state,message:'successfuly added',option1:action.data};
       
      default:
        return state;
      }

}