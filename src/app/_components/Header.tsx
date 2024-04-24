import Image from "next/image";
import styles from "@/app/_components/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>Griffon</div>
      <Image src={"light.svg"} alt={"toggle theme"} width={32} height={32} />
    </header>
  );
}

export default Header;
