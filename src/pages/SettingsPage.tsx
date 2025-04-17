import { ThemeSwitcher } from "@/components/ThemeSwitcher"

export const SettingsPage = () => {
  return (
    <section>
      <h2 className="text-center text-2xl sr-only">Settings Page</h2>

      <menu>
        <h3 className="sr-only">Settings</h3>
        <ul className="menu bg-base-200 rounded-box w-56">
          <li>
            <a className="flex flex-row justify-between">
              <span>Tema: </span>
              <ThemeSwitcher />
            </a>
          </li>
        </ul>
      </menu>
    </section>
  )
}
