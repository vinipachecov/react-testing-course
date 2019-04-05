import categoriesReducer from './categoriesReducer';
import { combineReducers } from 'redux'


export default combineReducers({
  categoriesData: categoriesReducer
})