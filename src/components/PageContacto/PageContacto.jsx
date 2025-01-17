import React, { useEffect, useState } from "react";
import contactoImage from "../../assets/contacto.jpeg";

const PageContacto = () => {
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
        {/* Título y ruta con animación */}
        <h1 className={`text-8xl font-dela mb-2 ${!isVisible ? "hidden" : "slide-up"}`}>
          Contáctenos
        </h1>
        <div className={`flex space-x-2 text-gray-300 ${!isVisible ? "hidden" : "slide-up"}`}>
          <span className="underline text-base font-poppins text-white">INICIO</span>
          <span className="text-base">/</span>
          <span className="underline text-base font-poppins text-gray-400">CONTÁCTENOS</span>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="bg-[#1b1b1b] max-sm:h-[100vh]  flex items-center h-[70vh] text-white py-16 px-8">
        <div className="max-sm:h-[90vh]  font-poppins container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Información de Contacto */}
          <div>
            <h2 className="text-3xl font-poppins mb-4">Información de Contacto</h2>
            <p className="mb-4">
              <span className="font-bold font-poppins">Dirección:</span> Brandsen 103, Bahía Blanca, Buenos Aires
            </p>
            <p className="mb-4">
              <span className="font-bold font-poppins">Teléfono:</span> 0291 513-4540
            </p>
            <p className="mb-4">
              <span className="font-bold font-poppins">Email:</span> info@danientraigasbarbers.com
            </p>
            <p>
              <span className="font-bold font-poppins">Sitio Web:</span> www.danientraigasbarbers.com
            </p>
          </div>

          {/* Formulario */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full bg-transparent border text-white p-3 rounded-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border text-white p-3 rounded-lg focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              className="w-full bg-transparent border text-white p-3 rounded-lg focus:outline-none"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-full bg-transparent border text-white p-3 rounded-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent border border-white text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageContacto;