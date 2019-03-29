// import * as ActionTypes from '../Actions/types';

// const INPUT_STATE = {
//   loading: false,
//   error: null,
//   optionDetails:'',
// };

// export default (state = INPUT_STATE, action) => {
//   switch (action.type) {
//    case ActionTypes.ADD_SELECTED_OPTION_BEGIN:
//     return { ...state, loading: true, error: null };
//    case ActionTypes.ADD_SELECTED_OPTION_SUCCESS:
//    debugger;
//     return { ...state, loading: false,optionDetails:'option saved successful'}
//   case ActionTypes.ADD_SELECTED_OPTION_FAILURE:
//     return { ...state, loading: false, error: action.payload.message}
//   default:
//     return state;
//   }
// };