"use client";

import { useEffect, useState } from "react";
import useVisualizeData from "../_infra-components/useVisualizeData";
import styles from "./DataVisualizer.module.css";

function DataNode({ value }: Readonly<{ value: any }>) {
  const [animateChange, setAnimateChange] = useState(true);
  function formatObject(obj: any) {
    if (typeof obj === "number") {
      // Convert number to string and slice it to maximum of 6 characters
      let str = String(obj);
      if (str.length > 6) {
        return obj.toExponential(0);
      } else {
        return str;
      }
    } else {
      // For non-number objects, simply slice to maximum of 6 characters
      return String(obj).slice(0, 6);
    }
  }
  useEffect(() => {
    setAnimateChange(true);
    const handle = setTimeout(() => setAnimateChange(false), 1000);
    return () => clearTimeout(handle);
  }, [value]);
  return (
    <div
      className={`${styles.node} ${animateChange ? styles.animateNode : ""}`}
    >
      {formatObject(value)}
    </div>
  );
}

function DataVisualizer() {
  const { visualizeData, slot } = useVisualizeData();

  return (
    <div className={styles.main}>
      {visualizeData[slot]?.map((item, index) => (
        <DataNode key={index} value={item} />
      ))}
    </div>
  );
}

export default DataVisualizer;
