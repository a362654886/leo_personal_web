import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: { api: unknown };
}>();

export type ThunkAPIType = {
  dispatch: AppDispatch;
  extra: { api: unknown };
  getState: () => RootState;
};
