import { configureStore } from "@reduxjs/toolkit";
import { GlobalUIState, globalUIStateReducer } from "./slice.globalui";

interface StoreState {
  globalUIState: GlobalUIState;
}

const store = configureStore({
  reducer: {
    globalUIState: globalUIStateReducer,
  },
});

export { store, type StoreState };
