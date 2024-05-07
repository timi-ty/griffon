import Image from "next/image";
import styles from "./ActionStrip.module.css";

function ActionStrip({
  onClickRun,
  isStale,
}: Readonly<{ onClickRun: () => void; isStale: boolean }>) {
  return (
    <div className={styles.main}>
      <div className={styles.languageTag}>Javascript</div>
      <button className={styles.actionButton} onClick={onClickRun}>
        <Image
          className={styles.actionImage}
          src={isStale ? "repeat.svg" : "play.svg"}
          alt={"Run code"}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default ActionStrip;
