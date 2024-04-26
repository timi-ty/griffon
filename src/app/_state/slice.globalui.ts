import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../_infra-components/theme/ThemeInjector";

interface GlobalUIState {
  theme: Theme;
}

const defaultGlobalUIState: GlobalUIState = {
  theme: "dark",
};

const globalUISlice = createSlice({
  name: "globalUIState",
  initialState: defaultGlobalUIState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = globalUISlice.actions;

export { type GlobalUIState };

const globalUIStateReducer = globalUISlice.reducer;

export { globalUIStateReducer };
