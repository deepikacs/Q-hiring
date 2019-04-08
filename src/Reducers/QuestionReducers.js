import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  questionDetails: [],
  optionDetails: '',
  page: 0,
  pagesNames:[],
};

export default (state = INPUT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTION_BEGIN:
      return { ...state, loading: true, error: null, optionDetails: 'test' };
    case ActionTypes.FETCH_QUESTION_SUCCESS:
    const pagesNames = action.payload.result.map(item => item.name);
      return { ...state, loading: false, questionDetails: action.payload.result, pagesNames }
    case ActionTypes.FETCH_QUESTION_FAILURE:
      return { ...state, loading: false, error: action.payload.message }
    case ActionTypes.ADD_SELECTED_OPTION_BEGIN:
      
    return { ...state, loading: true, error: null };

      // selected options
    case ActionTypes.ADD_SELECTED_OPTION_SUCCESS:
      return { ...state, loading: false, optionDetails: action.payload.message }
    case ActionTypes.ADD_SELECTED_OPTION_FAILURE:
      return { ...state, loading: false, error: action.payload.message }
    case ActionTypes.NEXT_PAGE:
    return {
      ...state,
      page: action.page
    }
    default:
      return state;
  }
};

