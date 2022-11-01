import _ from 'lodash';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { queryMenu } from './api';

export interface ILoginState {
  menu: Array<any>;
  accessToken: any;
  permissions: any;
}

export interface IUpdateAuthPayload extends Pick<ILoginState, 'accessToken' | 'permissions'> {}

const initialState: ILoginState = {
  menu: [],
  accessToken: '',
  permissions: ''
};

export const loginSliceName = 'login';
const slice = createSlice({
  name: loginSliceName,
  initialState,
  reducers: {
    updateMenu: (state: ILoginState, { payload }: PayloadAction<{ menu: any[] }>) => {
      const { menu } = payload;
      if (Array.isArray(menu)) {
        return { ...state, menu };
      }
      return state;
    },
    updateAuth: (state: ILoginState, { payload }: PayloadAction<IUpdateAuthPayload>) => {
      const { accessToken, permissions } = payload;
      return {
        ...state,
        accessToken,
        permissions
      };
    }
  }
});

export const { updateMenu, updateAuth } = slice.actions;

// #region -------- async thunk ----------

export const queryMenuAsyncThunk = createAsyncThunk('/menu/list', async (params: any) => {
  const res = await queryMenu(params);
  const { data } = res;
  return {
    menu: data
  };
});

// #endregion -------- async thunk ---------

// #region -------- custom thunk -----------

export const queryMenuThunk = () => async (dispatch: any, getState: any) => {
  const params = {};
  const { menu } = await dispatch(queryMenuAsyncThunk(params)).unwrap();
  dispatch(updateMenu({ menu }));
};

// #endregion -------- custom thunk -----------

export default slice.reducer;
