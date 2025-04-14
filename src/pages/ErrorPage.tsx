import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const ErrorPage = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[700px] max-h-[800px] overflow-hidden text-white">
      <h2 className="text-6xl font-bold mb-4">404</h2>
      <p className="text-xl mb-8">Página no encontrada</p>
      <Link
        to="/"
        className="flex flex-row px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
      >
        <ArrowLeft size={24} />
        Volver al Dashboard
      </Link>
    </section>
  );
};
