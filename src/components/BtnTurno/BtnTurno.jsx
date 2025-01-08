import React from "react";
import { Link } from "react-router-dom";

const BtnTurno = () => {
  return (
    <Link
      to="/reserva-turnos" // Especifica la ruta a la que redirige
      className="font-light text-white py-2 px-6 rounded-full border-2 w-48 h-48 text-3xl tracking-wide transform transition-all duration-300 ease-in-out hover:bg-transparent hover:opacity-60 hover:scale-105 animate-pulse flex items-center justify-center text-center"
    >
      Reservá tu turno
    </Link>
  );
};

export default BtnTurno;