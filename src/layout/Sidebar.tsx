import { Link } from "react-router-dom";
import { routes } from "@/router/routes";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const Sidebar = ({ expanded, toggleSidebar, isMobile }) => {
  return (
    <aside
      className={`flex flex-col h-full bg-base-100 text-base-content p-4 transition-all duration-300 ${
        isMobile ? "w-64" : expanded ? "w-64" : "w-20"
      }`}
    >
      {/* Botón para expandir/contraer o cerrar overlay en mobile */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center w-full p-2 bg-primary text-primary-content hover:bg-secondary hover:text-secondary-content rounded-md transition-colors cursor-pointer"
      >
        {isMobile ? (
          <ChevronLeftIcon size={24} />
        ) : expanded ? (
          <ChevronLeftIcon size={24} />
        ) : (
          <ChevronRightIcon size={24} />
        )}
      </button>

      {/* Navegación */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {routes
            .filter((route) => route.view) // Solo muestra rutas con view: true
            .map((route) => (
              <li
                key={route.id}
                className="hover:bg-base-200 rounded-lg transition-colors"
              >
                <Link
                  to={route.path}
                  className="flex items-center gap-3 p-2 pl-3 text-base-content/70"
                >
                  {route.icon && <span>{route.icon}</span>}
                  {(isMobile || expanded) && <span>{route.name}</span>}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      {/* Footer del sidebar: Perfil */}
      <div className="border-t border-[#ccc] pt-4">
        <Link
          to={routes[5].path}
          className="flex items-center gap-3 p-2 pl-3 text-base-content/70 hover:bg-base-200 rounded-lg transition-colors"
        >
          <span>{routes[5].icon}</span>
          {(isMobile || expanded) && <span>{routes[5].name}</span>}
        </Link>
      </div>
    </aside>
  );
};
