import * as ActionTypes from '../Actions/types';

const INPUT_STATE = {
  loading: false,
  error: null,
  message:'',
  Rstarray:[],
  menuarray:[],
  foodarray:[]
};

export default (state = INPUT_STATE, action) => {
  debugger;
  switch (action.type) {
   case ActionTypes.FETCH_LOCATION_BEGIN:
    return { ...state, loading: true, error: null };
   case ActionTypes.FETCH_LOCATION_SUCCESS:
    return { ...state, loading: false,Rstarray:action.payload};
  case ActionTypes.FETCH_LOCATION_FAILURE:
    return { ...state, loading: false, error: action.payload.message}
  // rst
  case ActionTypes.FETCH_RST_BEGIN:
  return { ...state, loading: true, error: null };
 case ActionTypes.FETCH_RST_SUCCESS:
  return { ...state, loading: false,menuarray:action.payload};
  // food
  case ActionTypes.FETCH_FOOD_BEGIN:
  return { ...state, loading: true, error: null };
 case ActionTypes.FETCH_FOOD_SUCCESS:
  return { ...state, loading: false,foodarray:action.payload};
  default:
    return state;
  }
};