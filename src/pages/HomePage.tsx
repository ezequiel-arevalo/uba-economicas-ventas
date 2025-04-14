import React, { useState } from 'react';
import { Star, StarOff } from 'lucide-react';

const sampleData = [
  {
    id: 1,
    nombre: 'Brenda',
    apellido: 'Alegre',
    telefono: '541133716097',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 2,
    nombre: 'Julio Rodrigo',
    apellido: 'Álvarez',
    telefono: '541133466061',
    diplomatura: 'Coaching Organizacional',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
  {
    id: 3,
    nombre: 'Mirna',
    apellido: 'Soto',
    telefono: '541134906676',
    diplomatura: 'Diplomatura en Liderazgo de Equipos',
  },
];

export const HomePage = () => {
  const [rowStates, setRowStates] = useState(
    sampleData.map(() => ({ status: '', favorite: false }))
  );

  const setStatus = (index, status) => {
    const updated = [...rowStates];
    updated[index].status = status;
    setRowStates(updated);
  };

  const toggleFavorite = (index) => {
    const updated = [...rowStates];
    updated[index].favorite = !updated[index].favorite;
    setRowStates(updated);
  };

  const getRowColor = (status) => {
    switch (status) {
      case 'no-respondio':
        return 'bg-red-100';
      case 'contactado':
        return 'bg-orange-100';
      case 'vendido':
        return 'bg-green-100';
      default:
        return '';
    }
  };

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-6">Home Page</h2>

      <div className="flex flex-col md:flex-row md:justify-start gap-2 mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Cargar Excel
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Exportar Excel
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Apellido</th>
              <th className="px-4 py-2 border">Teléfono</th>
              <th className="px-4 py-2 border">Diplomatura</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((item, index) => (
              <tr key={item.id} className={`${getRowColor(rowStates[index].status)}`}>
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.nombre}</td>
                <td className="px-4 py-2 border">{item.apellido}</td>
                <td className="px-4 py-2 border">{item.telefono}</td>
                <td className="px-4 py-2 border">{item.diplomatura}</td>
                <td className="px-4 py-2 border space-y-1">
                  <div className="flex flex-wrap gap-2">
                    <button
                      className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => setStatus(index, 'no-respondio')}
                    >
                      No respondió
                    </button>
                    <button
                      className="bg-orange-500 text-white text-sm px-2 py-1 rounded hover:bg-orange-600"
                      onClick={() => setStatus(index, 'contactado')}
                    >
                      Contactado
                    </button>
                    <button
                      className="bg-green-500 text-white text-sm px-2 py-1 rounded hover:bg-green-600"
                      onClick={() => setStatus(index, 'vendido')}
                    >
                      Vendido
                    </button>
                    <button
                      className="text-yellow-500 hover:text-yellow-600"
                      onClick={() => toggleFavorite(index)}
                      title="Favorito"
                    >
                      {rowStates[index].favorite ? <Star fill="currentColor" /> : <StarOff />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
