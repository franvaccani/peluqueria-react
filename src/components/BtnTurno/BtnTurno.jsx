import React from "react";
import { Link } from "react-router-dom";

const BtnTurno = () => {
  return (
    <Link
      to="/reserva-turnos" // Especifica la ruta a la que redirige
      className="font-light font-poppins text-white py-2 px-6 rounded-full border-2 w-44 h-44 text-2xl tracking-wide transform transition-all duration-300 ease-in-out hover:bg-transparent  hover:scale-110 animate-pulse flex items-center justify-center text-center"
    >
      Reservá tu turno
    </Link>
  );
};

export default BtnTurno;