import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import { getTheme, toggleTheme, THEMES } from "@/utils/theme";

import "./ThemeSwitch.css";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(getTheme);

  function handleToggleTheme() {
    const nextTheme = toggleTheme();
    setTheme(nextTheme);
  }

  const isDark = theme === THEMES.DARK;

  return (
    <button
      type="button"
      className={`theme-switch ${isDark ? "is-dark" : "is-light"}`}
      onClick={handleToggleTheme}
      aria-label={`Alternar para tema ${isDark ? "claro" : "escuro"}`}
      aria-pressed={isDark}
    >
      <span className="theme-switch__thumb">
        {isDark ? (
          <Moon size={14} strokeWidth={2.4} />
        ) : (
          <Sun size={14} strokeWidth={2.4} />
        )}
      </span>
    </button>
  );
}