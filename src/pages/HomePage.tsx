export const HomePage = () => {
  return (
    <section className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-6 sr-only">Home Page</h2>

      <div className="mb-4 flex items-center justify-between space-x-4">
        {/* Input oculto */}
        <input
          type="file"
          accept=".xlsx, .xls"
          className="hidden"
        />

        {/* Botón que dispara el input */}
        <button
          // onClick={handleImport}
          className="text-orange-600 hover:text-orange-400 border-2 px-4 py-2 cursor-pointer disabled:cursor-not-allowed rounded-md border-orange-600 hover:border-orange-400 disabled:opacity-50 disabled:border-orange-600 transition-colors ease-in-out"
        >
          Cargar archivo
        </button>

        {/* Botón de exportación */}
        <button
          // onClick={handleExport}
          // disabled={data.length === 0}
          className="text-white px-4 py-2 cursor-pointer disabled:cursor-not-allowed rounded-md bg-orange-600 hover:bg-orange-400 disabled:opacity-50 disabled:bg-orange-600 transition-colors ease-in-out"
        >
          Exportar
        </button>
      </div>
    </section>
  );
};
