"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import useTheme from "../_infra-components/theme/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div>Griffon</div>
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
