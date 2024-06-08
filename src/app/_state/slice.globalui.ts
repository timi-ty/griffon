import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../_infra-components/theme/ThemeInjector";

interface GlobalUIState {
  theme: Theme;
  visualizeData: any[][];
  slot: number;
}

const defaultGlobalUIState: GlobalUIState = {
  theme: "light",
  visualizeData: [],
  slot: 0,
};

interface VisualizeDataAction {
  type: string;
  payload: any[];
}

interface NumberAction {
  type: string;
  payload: number;
}

interface ThemeAction {
  type: string;
  payload: Theme;
}

const globalUISlice = createSlice({
  name: "globalUIState",
  initialState: defaultGlobalUIState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setTheme(state, theme: ThemeAction) {
      state.theme = theme.payload;
    },
    addVisualizeData(state, action: VisualizeDataAction) {
      const newVisualizeData = [...state.visualizeData];
      newVisualizeData.push([...action.payload]);
      return {
        ...state,
        visualizeData: newVisualizeData,
      };
    },
    resetVisualizeData(state) {
      return {
        ...state,
        visualizeData: [],
      };
    },
    setSlot(state, action: NumberAction) {
      state.slot = Math.min(
        Math.max(0, action.payload),
        state.visualizeData.length
      );
    },
  },
});

export const {
  toggleTheme,
  setTheme,
  addVisualizeData,
  resetVisualizeData,
  setSlot,
} = globalUISlice.actions;

export { type GlobalUIState };

const globalUIStateReducer = globalUISlice.reducer;

export { globalUIStateReducer };
