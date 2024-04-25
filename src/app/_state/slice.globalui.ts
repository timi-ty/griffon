import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../_infra-components/theme/Theme";

interface GlobalUIState {
  theme: Theme;
}

const defaultGlobalUIState: GlobalUIState = {
  theme: "dark",
};

interface ThemeAction {
  type: string;
  payload: Theme;
}

const globalUISlice = createSlice({
  name: "globalUIState",
  initialState: defaultGlobalUIState,
  reducers: {
    setTheme(state, action: ThemeAction) {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = globalUISlice.actions;

export { type GlobalUIState };

const globalUIStateReducer = globalUISlice.reducer;

export { globalUIStateReducer };
