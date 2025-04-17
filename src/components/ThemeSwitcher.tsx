import { Moon, Sun } from "lucide-react"

export const ThemeSwitcher = () => {
  return (
    <label className="flex cursor-pointer gap-3">
      <Sun />
      <input type="checkbox" value="dark" className="toggle theme-controller" />
      <Moon />
    </label>
  )
}
