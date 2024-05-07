"use client";

import { store } from "@/app/_state/store";
import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

function injectStyles(styles: string) {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = styles;

  const removeStyles = () => {
    document.head.removeChild(styleElement);
  };

  document.head.appendChild(styleElement);

  return removeStyles;
}

function injectLightTheme() {
  return injectStyles(`
  :root{
    --background-color: #ffffff;
    --background-accent-color: #d4d4d4;
    --card-background-color: #ffddc2;
    --primary-text-color: #000000;
    --secondary-text-color: #1f1f1f;
    --primary-color: #c94848;
}`);
}

function injectDarkTheme() {
  return injectStyles(`
  :root{
    --background-color: #121212;
    --background-accent-color: #2d2d2d;
    --card-background-color: #010d0b;
    --primary-text-color: #ffffff;
    --secondary-text-color: #c2c2c2;
    --primary-color: #c94848;
}`);
}

function ThemeInjector() {
  const [theme, setTheme] = useState(store.getState().globalUIState.theme);

  const onStateChanged = useCallback(function () {
    setTheme(store.getState().globalUIState.theme);
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);
    return () => unsubscribe();
  }, [onStateChanged]);

  useEffect(() => {
    const unloadTheme =
      theme === "dark" ? injectDarkTheme() : injectLightTheme();
    return () => unloadTheme();
  }, [theme]);

  return <></>;
}

export default ThemeInjector;
