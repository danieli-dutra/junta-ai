import { Logo } from "@/components/Logo";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo width={170} />

      <div className={styles.actions}>
        {/* ThemeToggle virá aqui */}
      </div>
    </header>
  );
}