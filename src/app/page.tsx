import styles from "./page.module.css";
import Header from "./_ui-components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
