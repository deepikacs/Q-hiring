import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  questionDetails: [],
  optionDetails: '',
};

export default (state = INPUT_STATE, action) => {
  console.log('main state', state, '-----------', action.type)
  switch (action.type) {
    case ActionTypes.FETCH_QUESTION_BEGIN:
      return { ...state, loading: true, error: null, optionDetails: 'test' };
    case ActionTypes.FETCH_QUESTION_SUCCESS:
      return { ...state, loading: false, questionDetails: action.payload.result }
    case ActionTypes.FETCH_QUESTION_FAILURE:
      return { ...state, loading: false, error: action.payload.message }
    case ActionTypes.ADD_SELECTED_OPTION_BEGIN:
      
    return { ...state, loading: true, error: null };
      
    case ActionTypes.ADD_SELECTED_OPTION_SUCCESS:
    console.log('state=', state, 'action', action.payload.message);
      return { ...state, loading: false, optionDetails: action.payload.message }
    case ActionTypes.ADD_SELECTED_OPTION_FAILURE:
      return { ...state, loading: false, error: action.payload.message }
    default:
      return state;
  }
};

