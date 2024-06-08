"use client";

import { setTheme, toggleTheme } from "@/app/_state/slice.globalui";
import { store } from "@/app/_state/store";
import { useState, useEffect, useCallback } from "react";
import { Theme } from "./ThemeInjector";

//useTheme is declared seperately from the theme injector so that any number of components can read and toggle the theme but only the rendered injector actually applies the toggle in one central place.
function useTheme() {
  const [theme, setThemeInternal] = useState(
    store.getState().globalUIState.theme
  );

  const onStateChanged = useCallback(function () {
    setThemeInternal(store.getState().globalUIState.theme);
    localStorage.setItem("theme", store.getState().globalUIState.theme);
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);
    return () => unsubscribe();
  }, [onStateChanged]);

  useEffect(() => {
    store.dispatch(
      setTheme((localStorage.getItem("theme") as Theme) || "light")
    );
  }, []);

  return {
    theme,
    toggleTheme: () => store.dispatch(toggleTheme()),
  };
}

export default useTheme;
