import styles from "./ActionStrip.module.css";

function ActionStrip({ onClickRun }: Readonly<{ onClickRun: () => void }>) {
  return (
    <div className={styles.main}>
      <button onClick={onClickRun}>Run</button>
    </div>
  );
}

export default ActionStrip;
