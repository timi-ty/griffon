"use client";

import { useEffect, useState } from "react";
import { store } from "../_state/store";
import { addVisualizeData, setSlot } from "../_state/slice.globalui";

function useVisualizeData() {
  const [data, setData] = useState(
    store.getState().globalUIState.visualizeData
  );
  const [slot, setDataSlot] = useState(store.getState().globalUIState.slot);

  function onStateChanged() {
    setData(store.getState().globalUIState.visualizeData);
    setDataSlot(store.getState().globalUIState.slot);
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    visualizeData: data,
    addVisualizeData: (data: number[]) =>
      store.dispatch(addVisualizeData(data)),
    slot: slot,
    setSlot: (value: number) => store.dispatch(setSlot(value)),
  };
}

export default useVisualizeData;
