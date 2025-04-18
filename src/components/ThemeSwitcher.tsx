import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="flex cursor-pointer gap-3 items-center">
      <Sun />
      <input
        type="checkbox"
        className="toggle theme-controller"
        checked={theme === "dark-custom"}
        onChange={toggleTheme}
      />
      <Moon />
    </label>
  );
};
