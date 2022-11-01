import { combineReducers } from '@reduxjs/toolkit';
import loginReducer, { loginSliceName } from './login/slice';

const rootReducersObj = {
  [loginSliceName]: loginReducer
};

export default combineReducers(rootReducersObj);
