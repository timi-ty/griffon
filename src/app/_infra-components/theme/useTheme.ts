"use client";

import { setTheme } from "@/app/_state/slice.globalui";
import { store } from "@/app/_state/store";
import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setLocalTheme] = useState(store.getState().globalUIState.theme);

  function onStateChanged() {
    setLocalTheme(store.getState().globalUIState.theme);
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);

    return () => unsubscribe();
  }, []);

  function toggleTheme() {
    store.dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
}

export default useTheme;
