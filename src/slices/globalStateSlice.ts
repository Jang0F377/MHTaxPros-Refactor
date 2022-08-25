import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitGlobalState {
  success: boolean;
  failed: boolean;
}

const initialState: InitGlobalState = {
  success: false,
  failed: false,
};

export const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setSuccess: (state) => {
      state.success = true;
      state.failed = false;
    },
    setFailed: (state) => {
      state.success = false;
      state.failed = true;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { setSuccess, setFailed, resetState } = globalStateSlice.actions;

export const getSuccessState = (state: RootState) => state.global.success;
export const getFailedState = (state: RootState) => state.global.failed;

export default globalStateSlice.reducer;
