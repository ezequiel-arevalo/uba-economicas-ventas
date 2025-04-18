import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Header = ({ toggleMobileSidebar }) => {
  const { t } = useTranslation();

  return (
    <header className="w-full">
      <nav className="navbar bg-base-100 shadow-sm h-16 px-4 text-base-content">
        {/* navbar-start */}
        <div className="navbar-start">
          {/* Botón para activar el sidebar en mobile/tablet */}
          <button
            onClick={toggleMobileSidebar}
            className="md:hidden btn btn-ghost btn-circle"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* navbar-center */}
        <div className="navbar-center">
          <h1 className="text-xl font-bold">
            {t("appName")}
          </h1>
        </div>
      </nav>
    </header>
  );
};
