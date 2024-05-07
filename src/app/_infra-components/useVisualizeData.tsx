"use client";

import { useCallback, useEffect, useState } from "react";
import { store } from "../_state/store";
import {
  addVisualizeData,
  resetVisualizeData,
  setSlot,
} from "../_state/slice.globalui";

function useVisualizeData() {
  const [data, setData] = useState(
    store.getState().globalUIState.visualizeData
  );
  const [slot, setDataSlot] = useState(store.getState().globalUIState.slot);
  const [resetListeners, setResetListeners] = useState([() => {}]);

  const onStateChanged = useCallback(
    function () {
      setData(store.getState().globalUIState.visualizeData);
      setDataSlot(store.getState().globalUIState.slot);
      if (store.getState().globalUIState.visualizeData.length === 0) {
        resetListeners.forEach((listener) => listener());
      }
    },
    [resetListeners]
  );

  useEffect(() => {
    const unsubscribe = store.subscribe(onStateChanged);
    return () => unsubscribe();
  }, [onStateChanged]);

  return {
    visualizeData: data,
    addVisualizeData: (data: number[]) =>
      store.dispatch(addVisualizeData(data)),
    slot: slot,
    addResetListener: (listener: () => void) => {
      setResetListeners((listeners) => {
        const newListeners = [...listeners];
        newListeners.push(listener);
        return newListeners;
      });
      return function removeListener() {
        setResetListeners((listeners) => {
          return listeners.filter((oldListener) => oldListener !== listener);
        });
      };
    },
    resetVisualizeData: () => {
      store.dispatch(resetVisualizeData());
    },
    setSlot: (value: number) => store.dispatch(setSlot(value)),
  };
}

export default useVisualizeData;
