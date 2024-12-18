import React from "react";
import { useParams } from "react-router-dom";
import { peluqueros } from "./peluqueros";

const PeluqueroDetalles = () => {
  const { id } = useParams();
  const peluquero = peluqueros.find((p) => p.id === parseInt(id));

  if (!peluquero) {
    return <p className="text-white">Peluquero no encontrado.</p>;
  }

  return (
    <div className="bg-[#000] flex justify-center items-center min-h-screen py-10 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <img
          src={peluquero.imagen}
          alt={peluquero.nombre}
          className="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold">{peluquero.nombre}</h1>
        <p className="text-teal-400">{peluquero.titulo}</p>
        <p className="mt-4">{peluquero.detalles}</p>
      </div>
    </div>
  );
};

export default PeluqueroDetalles;