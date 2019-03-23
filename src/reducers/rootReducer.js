import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import books_list from './books_list';

export default combineReducers({
  simpleReducer,
  books_list
});