import { Link } from "react-router-dom";
import { routes } from "@/router/routes";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface SidebarProps {
  expanded: boolean;
  toggleSidebar: () => void;
  isMobile: boolean;
}

export function Sidebar({ expanded, toggleSidebar, isMobile }: SidebarProps) {
  const appRoutes = routes();

  return (
    <aside
      className={`flex flex-col h-full bg-base-100 text-base-content p-4 transition-all duration-300 ${
        isMobile ? "w-64" : expanded ? "w-64" : "w-20"
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center w-full p-2 bg-primary text-primary-content hover:bg-secondary hover:text-secondary-content rounded-md transition-colors"
      >
        {expanded || isMobile ? (
          <ChevronLeftIcon size={24} />
        ) : (
          <ChevronRightIcon size={24} />
        )}
      </button>

      {/* Main navigation */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {appRoutes
            .filter((route) => route.view)
            .map((route) => (
              <li key={route.id} className="hover:bg-base-200 rounded-lg transition-colors">
                <Link
                  to={route.path}
                  className="flex items-center gap-3 p-2 pl-3 text-base-content/70"
                >
                  {route.icon}
                  {(expanded || isMobile) && <span>{route.name}</span>}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      {/* Footer/Profile link */}
      <div className="border-t border-[#ccc] pt-4">
        {(() => {
          const profileRoute = appRoutes.find((r) => r.id === 5)!;
          return (
            <Link
              to={profileRoute.path}
              className="flex items-center gap-3 p-2 pl-3 text-base-content/70 hover:bg-base-200 rounded-lg transition-colors"
            >
              {profileRoute.icon}
              {(expanded || isMobile) && <span>{profileRoute.name}</span>}
            </Link>
          );
        })()}
      </div>
    </aside>
  );
}
