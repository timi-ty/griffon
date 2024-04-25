"use client";

import { StoreState, store } from "@/app/_state/store";
import { useEffect, useState } from "react";

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

function useLightTheme() {
  return injectStyles(`
  :root{
    --background-color: #ffffff;
    --primary-text-color: #000000;
  }`);
}

function useDarkTheme() {
  return injectStyles(`
  :root{
    --background-color: #000000;
    --primary-text-color: #ffffff;
  }`);
}

function ThemeInjector() {
  const [theme, setTheme] = useState(store.getState().globalUIState.theme);

  function onStateChanged() {
    setTheme(store.getState().globalUIState.theme);
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unloadTheme = theme === "dark" ? useDarkTheme() : useLightTheme();

    return () => unloadTheme();
  }, [theme]);

  return <></>;
}

export default ThemeInjector;
