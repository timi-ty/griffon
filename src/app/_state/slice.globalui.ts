import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../_infra-components/theme/ThemeInjector";
import { stat } from "fs";

interface GlobalUIState {
  theme: Theme;
  visualizeData: number[][];
  slot: number;
}

const defaultGlobalUIState: GlobalUIState = {
  theme: localStorage.getItem("theme") as Theme | "light",
  visualizeData: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  slot: 0,
};

interface VisualizeDataAction {
  type: string;
  payload: number[];
}

interface NumberAction {
  type: string;
  payload: number;
}

const globalUISlice = createSlice({
  name: "globalUIState",
  initialState: defaultGlobalUIState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.theme);
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
      state.visualizeData = [];
    },
    setSlot(state, action: NumberAction) {
      state.slot = Math.min(
        Math.max(0, action.payload),
        state.visualizeData.length
      );
    },
  },
});

export const { toggleTheme, addVisualizeData, resetVisualizeData, setSlot } =
  globalUISlice.actions;

export { type GlobalUIState };

const globalUIStateReducer = globalUISlice.reducer;

export { globalUIStateReducer };
