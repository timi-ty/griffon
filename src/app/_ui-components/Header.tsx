"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import useTheme from "../_infra-components/theme/useTheme";
import ScrollControls from "./ScrollControls";
import useVisualizeData from "../_infra-components/useVisualizeData";
import { useState } from "react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { visualizeData, slot, setSlot } = useVisualizeData();

  return (
    <header className={styles.header}>
      <div>Griffon</div>
      <ScrollControls
        current={Math.min(slot + 1, visualizeData.length)}
        total={visualizeData.length}
        setCurrent={(value) => {
          setSlot(value - 1);
        }}
        onPrevious={() => setSlot(slot - 1)}
        onNext={() => setSlot(slot + 1)}
        canNext={slot < visualizeData.length - 1}
        canPrevious={slot > 0}
      />
      <Image
        src={theme === "dark" ? "light.svg" : "dark.svg"}
        alt={"toggle theme"}
        className={styles.themeToggle}
        width={32}
        height={32}
        onClick={() => toggleTheme()}
      />
    </header>
  );
}

export default Header;
