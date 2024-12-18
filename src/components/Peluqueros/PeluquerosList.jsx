import React from "react";
import { Link } from "react-router-dom";
import { peluqueros } from "./peluqueros";

const PeluquerosList = () => {
  return (
    <div className="bg-[#1b1b1b] flex justify-center items-center min-h-screen py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {peluqueros.map((peluquero) => (
          <div
            key={peluquero.id}
            className="bg-transparent border border-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                src={peluquero.imagen}
                alt={peluquero.nombre}
                className="w-24 h-24 rounded-full object-cover border border-white hover:border-orange-300 p-2 transition duration-300"
              />
            </div>
            <h3 className="text-white text-xl font-semibold">{peluquero.nombre}</h3>
            <p className="text-gray-400 text-sm">{peluquero.titulo}</p>
            <p className="text-gray-300 mt-4">{peluquero.descripcion}</p>
            <Link
              to={`/peluquero/${peluquero.id}`}
              className="mt-4 inline-block text-teal-400 hover:text-teal-300"
            >
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeluquerosList;