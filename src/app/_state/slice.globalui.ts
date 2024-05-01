import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../_infra-components/theme/ThemeInjector";

interface GlobalUIState {
  theme: Theme;
  visualizeData: number[];
}

const defaultGlobalUIState: GlobalUIState = {
  theme: "dark",
  visualizeData: [1, 2],
};

interface VisualizeDataAction {
  type: string;
  payload: number[];
}

const globalUISlice = createSlice({
  name: "globalUIState",
  initialState: defaultGlobalUIState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setVisualizeData(state, action: VisualizeDataAction) {
      state.visualizeData = action.payload;
    },
  },
});

export const { toggleTheme, setVisualizeData } = globalUISlice.actions;

export { type GlobalUIState };

const globalUIStateReducer = globalUISlice.reducer;

export { globalUIStateReducer };
