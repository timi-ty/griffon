"use client";

import { toggleTheme } from "@/app/_state/slice.globalui";
import { store } from "@/app/_state/store";
import { useState, useEffect } from "react";

//useTheme is declared seperately from the theme injector so that any number of components can read and toggle the theme but only the rendered injector actually applies the toggle in one central place.
function useTheme() {
  const [theme, setTheme] = useState(store.getState().globalUIState.theme);

  function onStateChanged() {
    setTheme(store.getState().globalUIState.theme);
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    theme,
    toggleTheme: () => store.dispatch(toggleTheme()),
  };
}

export default useTheme;
