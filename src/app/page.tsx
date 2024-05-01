import ActionStrip from "./_ui-components/ActionStrip";
import CodeEditor from "./_ui-components/CodeEditor";
import DataVisualizer from "./_ui-components/DataVisualizer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <DataVisualizer />
      <CodeEditor />
    </main>
  );
}
