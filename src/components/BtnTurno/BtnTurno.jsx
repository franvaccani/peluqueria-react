import React from "react";
import { Link } from "react-router-dom";

const BtnTurno = () => {
  return (
    <Link
      to="/reserva-turnos" // Especifica la ruta a la que redirige
      className="font-normal font-poppins text-white py-2 px-6 rounded-full border-2 w-44 h-44 text-2xl tracking-wide transform transition-all duration-300 ease-in-out hover:bg-transparent  hover:scale-110 animate-pulse flex items-center justify-center text-center max-sm:text-lg max-sm:leading-5 max-sm:w-32 max-sm:h-32"
    >
      Reservá tu turno
    </Link>
  );
};

export default BtnTurno;