import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  message:''
};

export default (state = INPUT_STATE, action) => {
  switch (action.type) {
   case ActionTypes.FETCH_LOGIN_BEGIN:
    return { ...state, loading: true, error: null };
   case ActionTypes.FETCH_LOGIN_SUCCESS:
    return { ...state, loading: false,message:'logged in successfuly'}
  case ActionTypes.FETCH_LOGIN_FAILURE:
    return { ...state, loading: false, error: action.payload.message}
  default:
    return state;
  }
};

// new

// import * as ActionTypes from '../Actions/types';

// const INPUT_STATE = {
//   loading: false,
//   error: null,
//   message:''
// };

// export default (state = INPUT_STATE, action) => {
//   switch (action.type) {
//    case ActionTypes.FETCH_LOGIN_BEGIN:
//     return { ...state, loading: true, error: null };
//    case ActionTypes.FETCH_LOGIN_SUCCESS:
//     return { ...state, loading: false,message:action.payload.message}
//   case ActionTypes.FETCH_LOGIN_FAILURE:
//     return { ...state, loading: false, error: action.payload.message}
//   default:
//     return state;
//   }
// };