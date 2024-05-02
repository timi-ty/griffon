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
        progress={`${slot + 1}/${visualizeData.length}`}
        onPrevious={() => setSlot(slot - 1)}
        onNext={() => setSlot(slot + 1)}
      />
      <Image
        src={theme === "dark" ? "dark.svg" : "light.svg"}
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
