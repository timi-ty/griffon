import styles from "./ActionStrip.module.css";

function ActionStrip({
  onClickRun,
  isStale,
}: Readonly<{ onClickRun: () => void; isStale: boolean }>) {
  return (
    <div className={styles.main}>
      <div className={styles.languageTag}>Javascript</div>
      <button className={styles.actionButton} onClick={onClickRun}>
        <img
          className={styles.actionImage}
          src={isStale ? "repeat.svg" : "play.svg"}
        />
      </button>
    </div>
  );
}

export default ActionStrip;
