import { combineReducers } from 'redux';
import stackReducer from './stackreducer';

export default combineReducers({
  stackData: stackReducer
})