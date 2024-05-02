"use client";

import { useEffect, useState } from "react";
import useVisualizeData from "../_infra-components/useVisualizeData";
import styles from "./DataVisualizer.module.css";

function DataNode({ value }: Readonly<{ value: number }>) {
  const [animateChange, setAnimateChange] = useState(true);
  useEffect(() => {
    setAnimateChange(true);
    const handle = setTimeout(() => setAnimateChange(false), 1000);
    return () => clearTimeout(handle);
  }, [value]);
  return (
    <div
      className={`${styles.node} ${animateChange ? styles.animateNode : ""}`}
    >
      {value}
    </div>
  );
}

function DataVisualizer() {
  const { visualizeData, slot } = useVisualizeData();

  useEffect(() => console.log(visualizeData.length), [visualizeData]);

  return (
    <div className={styles.main}>
      {visualizeData[slot]?.map((item, index) => (
        <DataNode key={index} value={item} />
      ))}
    </div>
  );
}

export default DataVisualizer;
