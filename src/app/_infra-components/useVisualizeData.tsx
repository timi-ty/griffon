"use client";

import { useEffect, useState } from "react";
import { store } from "../_state/store";
import { setVisualizeData } from "../_state/slice.globalui";

function useVisualizeData() {
  const [data, setData] = useState(
    store.getState().globalUIState.visualizeData
  );

  function onStateChanged() {
    setData(store.getState().globalUIState.visualizeData);
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    visualizeData: data,
    setVisualizeData: (data: number[]) =>
      store.dispatch(setVisualizeData(data)),
  };
}

export default useVisualizeData;
