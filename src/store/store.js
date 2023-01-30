import { combineReducers } from '@reduxjs/toolkit';
import commentReducer from '../reducers/commentReducer.js';
import adminReducer from '../reducers/adminReducer.js';
import drinkReducer from '../reducers/drinkReducer.js'

export default combineReducers({
  comments: commentReducer,
  admin: adminReducer,
  drinks: drinkReducer,
});
