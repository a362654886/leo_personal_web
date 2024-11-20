import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

type LoginState = {
  info: LoginInfo | null;
};

const initialState: LoginState = {
  info: null,
};

const namespace = "login";

export const loginSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    resetModel() {
      return { ...initialState };
    },
    receive<T>(state: LoginState, { payload }: PayloadAction<T>) {
      return {
        ...state,
        ...payload,
      };
    },
  },
});

export default loginSlice.reducer;
