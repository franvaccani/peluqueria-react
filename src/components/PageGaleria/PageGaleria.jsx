import React, { useEffect, useState } from "react";
import contactoImage from "../../assets/contacto.jpeg"; 

const Galeria = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Activar la animación después de que el componente se haya montado
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Retrasa ligeramente la animación para un mejor efecto
    return () => clearTimeout(timer); // Limpiar el timeout
  }, []);

  return (
    <div className="contenedorContacto">
      {/* Sección de encabezado con imagen de fondo */}
      <div
        className="grayscale bg-cover font-dela bg-center bg-no-repeat h-[76vh] w-full flex flex-col justify-end items-center pb-32 text-white"
        style={{ backgroundImage: `url(${contactoImage})` }}
      >
        {/* Agregar la clase "hidden" antes de que se active "isVisible" */}
        <h1 className={`text-8xl font-dela mb-2 ${!isVisible ? "hiddenn" : "slide-up"}`}>
          Galeria
        </h1>
        <div className={`flex space-x-2 text-gray-300 ${!isVisible ? "hidden" : "slide-up"}`}>
          <span className="underline text-base font-poppins text-white">INICIO</span>
          <span className="text-base">/</span>
          <span className="underline text-base font-poppins text-gray-400">GALERIA</span>
        </div>
      </div>
    </div>
  );
};

export default Galeria;