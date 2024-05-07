import { useEffect, useState } from "react";
import useTheme from "../_infra-components/theme/useTheme";
import styles from "./ScrollControls.module.css";
import Image from "next/image";

function ScrollControls({
  current,
  total,
  onPrevious,
  onNext,
  setCurrent,
  canNext,
  canPrevious,
}: Readonly<{
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  setCurrent: (value: number) => void;
  canNext: boolean;
  canPrevious: boolean;
}>) {
  const { theme } = useTheme();
  const [currentInput, setCurrentInput] = useState(current.toString());
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => setCurrentInput(current.toString()), [current]);

  return (
    <div className={styles.main}>
      <button
        disabled={!canPrevious}
        className={styles.button}
        onClick={onPrevious}
      >
        <Image
          className={styles.icon}
          src={`${
            theme === "dark" ? "previous_light.svg" : "previous_dark.svg"
          }`}
          alt={"Previous"}
          width={24}
          height={24}
        />
      </button>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setCurrent(Number.parseInt(currentInput));
        }}
      >
        <div>
          <input
            value={isFocused ? currentInput : current}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(ev) => setCurrentInput(ev.target.value)}
            className={styles.input}
          />{" "}
          / {total}
        </div>
      </form>
      <button disabled={!canNext} className={styles.button} onClick={onNext}>
        <Image
          className={styles.icon}
          src={`${theme === "dark" ? "next_light.svg" : "next_dark.svg"}`}
          alt={"Next"}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default ScrollControls;
