import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  questionDetails:[],
};

export default (state = INPUT_STATE, action) => {
  switch (action.type) {
   case ActionTypes.FETCH_QUESTION_BEGIN:
    return { ...state, loading: true, error: null };
   case ActionTypes.FETCH_QUESTION_SUCCESS:
    return { ...state, loading: false,questionDetails:action.payload.result}
  case ActionTypes.FETCH_QUESTION_FAILURE:
    return { ...state, loading: false, error: action.payload.message}
  default:
    return state;
  }
};