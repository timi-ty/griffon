"use client";

import useVisualizeData from "../_infra-components/useVisualizeData";
import styles from "./DataVisualizer.module.css";

function DataNode({ value }: Readonly<{ value: number }>) {
  return <div className={styles.node}>{value}</div>;
}

function DataVisualizer() {
  const { visualizeData } = useVisualizeData();

  return (
    <div className={styles.main}>
      {visualizeData.map((item, index) => (
        <DataNode key={index} value={item} />
      ))}
    </div>
  );
}

export default DataVisualizer;
