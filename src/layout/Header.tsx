import { Menu } from "lucide-react";

export const Header = ({ toggleMobileSidebar }) => {
  return (
    <header className="bg-[#ffffff] p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Botón para activar el sidebar en mobile/tablet */}
        <button
          onClick={toggleMobileSidebar}
          className="md:hidden flex items-center justify-center p-2 bg-amber-700 rounded-md hover:bg-amber-800 transition-colors"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">UBA ECONOMICAS</h1>
      </div>
    </header>
  );
};
