import CodeEditor from "./_ui-components/CodeEditor";
import ErrorLog from "./_ui-components/ErrorLog";
import DataVisualizer from "./_ui-components/DataVisualizer";
import HowTo from "./_ui-components/HowTo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <DataVisualizer />
      <CodeEditor />
      <ErrorLog />
      <HowTo />
    </main>
  );
}
