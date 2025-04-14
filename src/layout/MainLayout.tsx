import { useState } from "react";
import { Outlet } from "react-router-dom";
import { routes } from "@/router/routes";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => {

  // Para escritorio: controla expansión (w-64 / w-20)
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  // Para tablet/mobile: controla visibilidad del overlay
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);

  // Toggle para desktop
  const toggleSidebarExpanded = () => {
    setSidebarExpanded((prev) => !prev);
  };

  // Toggle para mobile
  const toggleMobileSidebar = () => {
    setMobileSidebarVisible((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col p-3 box-border gap-3">
      {/* Header */}
      <Header toggleMobileSidebar={toggleMobileSidebar} />

      <div className="relative flex flex-1 gap-3 overflow-hidden">

          <>
            {/* Sidebar para desktop */}
            <div className="hidden md:flex">
              <Sidebar
                expanded={sidebarExpanded}
                toggleSidebar={toggleSidebarExpanded}
                isMobile={false}
              />
            </div>

            {/* Sidebar overlay para tablet/mobile */}
            {mobileSidebarVisible && (
              <div className="md:hidden fixed inset-0 z-50 flex">
                <div className="w-64">
                  <Sidebar
                    expanded={true}
                    toggleSidebar={toggleMobileSidebar}
                    isMobile={true}
                  />
                </div>
                {/* Clic fuera para cerrar */}
                <div
                  className="flex-1"
                  onClick={toggleMobileSidebar}
                />
              </div>
            )}
          </>

        {/* Contenido principal */}
        <main className="flex-1 p-4 rounded-lg overflow-y-scroll bg-[#ffffff] hide-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
