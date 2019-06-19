import * as ActionTypes from '../Actions/types';



// const initialState={
//   message:'',
//   array:[]
// }
// export default(state=initialState,action)=>{
//     debugger;
//     switch (action.type) {
//         case ActionTypes.FORMREDUX_SUCCES:
//         return { ...state,message:'successfuly added',array:action.data };
       
//       default:
//         return state;
//       }

// }

// using existing array

const initialState={
   message:'',
   array:[{
     name1:"deepika",
     age1:"22"
   },
  {
    name1:"gsfgsf",
    age1:'25'
  }]
}

export default(state=initialState,action)=>{
  debugger;
  console.log(state.array);
  // let array1=[];
  // array1.push(state.array);
  switch (action.type) {
      case ActionTypes.FORMREDUX_SUCCES: 
      let array1=state.array;
      array1.push(action.data);
      return { ...state,message:'successfuly added',array:array1};
     
    default:
      return state;
    }

}