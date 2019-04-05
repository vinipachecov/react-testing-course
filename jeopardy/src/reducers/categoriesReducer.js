import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: [],    
  categorySelected: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SET_CATEGORIES:
    return { ...state, categories: action.categories };
  case actionTypes.PICK_CATEGORY:
    return { ...state, categorySelected: action.category }
  default:
    return state
  }
};
