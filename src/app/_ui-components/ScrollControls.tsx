import styles from "./ScrollControls.module.css";

function ScrollControls({
  progress,
  onPrevious,
  onNext,
}: Readonly<{ progress: string; onPrevious: () => void; onNext: () => void }>) {
  return (
    <div className={styles.main}>
      <button className={styles.button} onClick={onPrevious}>
        <img className={styles.icon} src="previous.png" />
      </button>
      <div>{progress}</div>
      <button className={styles.button} onClick={onNext}>
        <img className={styles.icon} src="next.png" />
      </button>
    </div>
  );
}

export default ScrollControls;
