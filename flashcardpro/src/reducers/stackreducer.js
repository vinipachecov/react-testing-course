import * as actionTypes from '../actions/actionTypes';

const initialState = {  
  stacks: [],
  cards: [],
  id: null,
  title: ''
}

export default (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
  case actionTypes.SET_STACK:
    return { ...state, ...action.stack };
  case actionTypes.LOAD_STACKS:
    return { ...state, stacks: action.stacks };    
  case actionTypes.ADD_STACK:
    return { ...state, stacks: [...state.stacks, { ...action.stack, id:state.stacks.length } ]}
  default:
    return state
  }
};
