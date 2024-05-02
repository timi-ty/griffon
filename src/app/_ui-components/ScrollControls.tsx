import styles from "./ScrollControls.module.css";

function ScrollControls({
  progress,
  onPrevious,
  onNext,
  canNext,
  canPrevious,
}: Readonly<{
  progress: string;
  onPrevious: () => void;
  onNext: () => void;
  canNext: boolean;
  canPrevious: boolean;
}>) {
  return (
    <div className={styles.main}>
      <button
        disabled={!canPrevious}
        className={styles.button}
        onClick={onPrevious}
      >
        <img className={styles.icon} src="previous.png" />
      </button>
      <div>{progress}</div>
      <button disabled={!canNext} className={styles.button} onClick={onNext}>
        <img className={styles.icon} src="next.png" />
      </button>
    </div>
  );
}

export default ScrollControls;
